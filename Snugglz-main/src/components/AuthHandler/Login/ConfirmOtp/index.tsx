import { LoginPage, useAuth } from "../../../../contexts/AuthContext";
import useObjectState from "../../../../hooks/useObjectState";
import { initialFormState } from "../../../../models/constants";
import {
  FormSubmitEvent,
  IFormState,
  InputChangeEvent,
  InputFocusEvent,
  Messages,
} from "../../../../models/types";
import { authService } from "../../../../services/axiosServices";
import {
  Form,
  FormAlert,
  FormElement,
  FormSubmit,
  FormTextInput,
} from "../../../../ui_kits/Form";
import { Form__Elemen__Types } from "../../../../ui_kits/Form/FormElements/FormElement";
import { IF } from "../../../../ui_kits/IF";
import { safeSetTimeout } from "../../../../utils/generics";
import { isEmpty } from "../../../../utils/script";
import { FormError } from "../../FormError";
import { ResendOTP } from "../../ResendOTP";
import {
  ILoginOTPState,
  initialLoginOTPState,
  LoginOTPInput,
  LoginOTPInputs,
} from "./input";

export const ConfirmOtp = () => {
  const {
    obj: loginOTPState,
    get: getLoginOTPState,
    update: updateLoginOTPState,
  } = useObjectState(initialLoginOTPState);

  const {
    obj: formState,
    update: updateFormState,
    setObj: setFormState,
  } = useObjectState(initialFormState as IFormState<ILoginOTPState>);

  const {
    handleFormValidate,
    handleOnFocusEvent,
    updateData,
    handleLoginPage,
    verificationEmail,
  } = useAuth();

  const message: Messages = {
    success: "OTP validated successfully!",
    error: "Incorrect OTP, Try Again!",
  };

  const registerParams = {
    ...authService.ConfirmOtp,
    params: {
      ...loginOTPState,
      email: verificationEmail,
    },
  };

  const handleOnsubmit = async (e: FormSubmitEvent) => {
    e.preventDefault();
    const isValid = handleFormValidate(
      LoginOTPInputs,
      loginOTPState,
      updateFormState
    );
    if (isValid) {
      const data = await updateData(
        registerParams,
        formState,
        message,
        setFormState
      );
      if (data) {
        safeSetTimeout(handleLoginPage, 1000, LoginPage.ResetPassword);
      }
    }
  };

  return (
    <Form onSubmit={handleOnsubmit}>
      <FormElement elementType={Form__Elemen__Types.FormHeader}>
        <h1 className="Heading u-h1">OTP Verification</h1>
        <p>Please enter an OTP sent to your Email.</p>
      </FormElement>
      <FormError formState={formState} />
      {LoginOTPInputs.map(({ validation, ...item }: LoginOTPInput) => {
        return (
          <FormElement key={item.name}>
            <FormTextInput
              {...item}
              value={getLoginOTPState(item.name)}
              onFocus={(e: InputFocusEvent) =>
                handleOnFocusEvent(e, initialFormState, setFormState)
              }
              onChange={(e: InputChangeEvent) => {
                updateLoginOTPState(item.name, e.target.value);
              }}
            />
          </FormElement>
        );
      })}
      <ResendOTP formState={formState} setFormState={setFormState} />
      <FormSubmit isFull isLoading={formState.isButtonLoading}>
        Submit
      </FormSubmit>
    </Form>
  );
};
