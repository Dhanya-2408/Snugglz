import {
  initialRegisterOtpState,
  IRegisterOTPState,
  registerOtpInputProps,
  RegisterOTPInputs,
} from "./types";
import {
  FormSubmitEvent,
  IFormState,
  InputChangeEvent,
  InputFocusEvent,
  Messages,
} from "../../../../models/types";
import {
  Form,
  FormAlert,
  FormElement,
  FormSubmit,
  FormTextInput,
} from "../../../../ui_kits/Form";
import { useAuth } from "../../../../contexts/AuthContext";
import useObjectState from "../../../../hooks/useObjectState";
import { initialFormState } from "../../../../models/constants";
import { authService } from "../../../../services/axiosServices";
import { Form__Elemen__Types } from "../../../../ui_kits/Form/FormElements/FormElement";
import { IF } from "../../../../ui_kits/IF";
import { isEmpty } from "../../../../utils/script";
import { safeSetTimeout } from "../../../../utils/generics";
import { ResendOTP } from "../../ResendOTP";
import { FormError } from "../../FormError";

const RegisterOTP = () => {
  const {
    obj: registerState,
    get: getRegisterState,
    update: updateRegisterState,
  } = useObjectState(initialRegisterOtpState);

  const {
    obj: formState,
    update: updateFormState,
    setObj: setFormState,
  } = useObjectState(initialFormState as IFormState<IRegisterOTPState>);

  const {
    handleFormValidate,
    handleOnFocusEvent,
    updateData,
    verificationEmail,
    navigateToHome,
  } = useAuth();

  const registerOTPParams = {
    ...authService.ConfirmOtp,
    params: {
      ...registerState,
      email: verificationEmail,
    },
  };

  const registerOTPmessage: Messages = {
    success: "Registered Successfully!",
    error: "Error while registering User!",
  };

  const handleOnsubmit = async (e: FormSubmitEvent) => {
    e.preventDefault();
    const isValid = handleFormValidate(
      RegisterOTPInputs,
      registerState,
      updateFormState
    );
    if (isValid) {
      const data = await updateData(
        registerOTPParams,
        formState,
        registerOTPmessage,
        setFormState
      );
      if (data) {
        console.log(data);
        safeSetTimeout(navigateToHome, 1000, verificationEmail);
      }
    }
  };

  return (
    <Form onSubmit={handleOnsubmit}>
      <FormElement elementType={Form__Elemen__Types.FormHeader}>
        <h2 className="Heading u-h1">OTP Verification</h2>
        <p>Please enter an OTP sent to your Email.</p>
      </FormElement>
      <FormError formState={formState} />
      {RegisterOTPInputs.map(
        ({ validation, ...item }: registerOtpInputProps) => {
          return (
            <FormElement key={item.name}>
              <FormTextInput
                {...item}
                value={getRegisterState(item.name)}
                onFocus={(e: InputFocusEvent) =>
                  handleOnFocusEvent(e, initialFormState, setFormState)
                }
                onChange={(e: InputChangeEvent) => {
                  updateRegisterState(item.name, e.target.value);
                }}
              />
            </FormElement>
          );
        }
      )}
      <ResendOTP formState={formState} setFormState={setFormState} />
      <FormSubmit isFull isLoading={formState.isButtonLoading}>
        Register
      </FormSubmit>
    </Form>
  );
};

export default RegisterOTP;
