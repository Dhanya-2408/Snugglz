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
  FormPasswordInput,
  FormSubmit,
} from "../../../../ui_kits/Form";
import { Form__Elemen__Types } from "../../../../ui_kits/Form/FormElements/FormElement";
import { IF } from "../../../../ui_kits/IF";
import { safeSetTimeout } from "../../../../utils/generics";
import { isEmpty } from "../../../../utils/script";
import { FormError } from "../../FormError";
import {
  initialResetPasswordState,
  IResetPasswordState,
  ResetPasswordInput,
  ResetPasswordInputs,
} from "./inputs";

const ResetPassword = () => {
  const {
    obj: registerState,
    get: getRegisterState,
    update: updateRegisterState,
  } = useObjectState(initialResetPasswordState);

  const {
    obj: formState,
    update: updateFormState,
    setObj: setFormState,
  } = useObjectState(initialFormState as IFormState<IResetPasswordState>);

  const {
    handleFormValidate,
    handleOnFocusEvent,
    updateData,
    verificationEmail,
    handleLoginPage,
  } = useAuth();

  const message: Messages = {
    success: "Password updated succesfully",
    error: "Error While updating password, Try again!",
  };

  const registerParams = {
    ...authService.ResetPassword,
    params: {
      email: verificationEmail,
      password: registerState.password,
    },
  };

  const handleOnsubmit = async (e: FormSubmitEvent) => {
    e.preventDefault();
    let isValid = handleFormValidate(
      ResetPasswordInputs,
      registerState,
      updateFormState
    );

    if (registerState.password !== registerState.confirmpassword) {
      isValid = false;
      updateFormState("helperText", "Passwords do NOT match!");
    }
    if (isValid) {
      const data = await updateData(
        registerParams,
        formState,
        message,
        setFormState
      );
      if (data) {
        safeSetTimeout(handleLoginPage, 1000, LoginPage.Login, null);
      }
    }
  };

  return (
    <Form onSubmit={handleOnsubmit}>
      <FormElement elementType={Form__Elemen__Types.FormHeader}>
        <h1 className="Heading u-h1">Reset password</h1>
        <p>Please enter a new password:</p>
      </FormElement>
      <FormError formState={formState} />
      {ResetPasswordInputs.map(
        ({ validation, ...item }: ResetPasswordInput) => {
          return (
            <FormElement key={item.name}>
              <FormPasswordInput
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

      <FormSubmit isFull isLoading={formState.isButtonLoading}>
        Register
      </FormSubmit>
    </Form>
  );
};

export default ResetPassword;
