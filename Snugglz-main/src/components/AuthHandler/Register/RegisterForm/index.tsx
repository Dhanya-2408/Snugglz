/* eslint-disable react/jsx-no-undef */
import {
  initialRegisterState,
  IRegisterFormState,
  registerInputProps,
  RegisterInputs,
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
  FormSubmit,
  FormElement,
  FormTextInput,
} from "../../../../ui_kits/Form";
import { useAuth } from "../../../../contexts/AuthContext";
import { safeSetTimeout } from "../../../../utils/generics";
import useObjectState from "../../../../hooks/useObjectState";
import { initialFormState } from "../../../../models/constants";
import { authService } from "../../../../services/axiosServices";
import { Form__Elemen__Types } from "../../../../ui_kits/Form/FormElements/FormElement";
import { FormPasswordInput } from "../../../../ui_kits/Form/FormInputs/FormPasswordInput";
import { FormError } from "../../FormError";

const RegisterForm = () => {
  const {
    obj: registerState,
    get: getRegisterState,
    update: updateRegisterState,
  } = useObjectState(initialRegisterState);

  const {
    obj: formState,
    update: updateFormState,
    setObj: setFormState,
  } = useObjectState(initialFormState as IFormState<IRegisterFormState>);

  const {
    handleFormValidate,
    handleOnFocusEvent,
    updateData,
    handleRegisterPage,
  } = useAuth();

  const message: Messages = {
    success: "OTP sent to your registered mobile number.",
    error: "error While registering User!",
  };

  const registerParams = {
    ...authService.Register,
    params: registerState,
  };

  const handleOnsubmit = async (e: FormSubmitEvent) => {
    e.preventDefault();
    const isValid = handleFormValidate(
      RegisterInputs,
      registerState,
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
        safeSetTimeout(handleRegisterPage, 1000, registerState.email);
      }
    }
  };

  return (
    <Form onSubmit={handleOnsubmit}>
      <FormElement elementType={Form__Elemen__Types.FormHeader}>
        <h2 className="Heading u-h1">Register</h2>
        <p>Please fill in the information below:</p>
      </FormElement>
      <FormError formState={formState} />
      {RegisterInputs.map(({ validation, ...item }: registerInputProps) => {
        const Tag: any =
          item.label === "Password" ? FormPasswordInput : FormTextInput;
        return (
          <FormElement key={item.name}>
            <Tag
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
      })}
      <FormSubmit isFull isLoading={formState.isButtonLoading}>
        Register
      </FormSubmit>
    </Form>
  );
};

export default RegisterForm;
