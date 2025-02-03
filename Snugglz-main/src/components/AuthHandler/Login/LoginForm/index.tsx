import {
  ILoginFormState,
  initialLoginFormState,
  LoginFormInput,
  LoginFormInputs,
} from "./inputs";
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
  FormHint,
  FormPasswordInput,
  FormSubmit,
  FormTextInput,
} from "../../../../ui_kits/Form";
import { LoginPage, useAuth } from "../../../../contexts/AuthContext";
import useObjectState from "../../../../hooks/useObjectState";
import { initialFormState } from "../../../../models/constants";
import { authService } from "../../../../services/axiosServices";
import { Form__Elemen__Types } from "../../../../ui_kits/Form/FormElements/FormElement";
import { IF } from "../../../../ui_kits/IF";
import { isEmpty } from "../../../../utils/script";
import { safeSetTimeout } from "../../../../utils/generics";
import { FormError } from "../../FormError";

export const LoginForm = () => {
  const {
    obj: loginState,
    get: getloginState,
    update: updateloginState,
  } = useObjectState(initialLoginFormState);
  const {
    obj: formState,
    update: updateFormState,
    setObj: setFormState,
  } = useObjectState(initialFormState as IFormState<ILoginFormState>);

  const {
    handleFormValidate,
    handleOnFocusEvent,
    updateData,
    navigateToHome,
    handleLoginPage,
  } = useAuth();

  const message: Messages = {
    success: "Logged in successfully!",
    error: "Error while login User!",
  };

  const loginParams = {
    ...authService.Login,
    params: loginState,
  };

  const handleOnsubmit = async (e: FormSubmitEvent) => {
    e.preventDefault();
    const isValid = handleFormValidate(
      LoginFormInputs,
      loginState,
      updateFormState
    );
    if (isValid) {
      const data = await updateData(
        loginParams,
        formState,
        message,
        setFormState
      );
      if (data) {
        safeSetTimeout(navigateToHome, 1000, loginState.email);
      }
    }
  };

  return (
    <Form onSubmit={handleOnsubmit}>
      <FormElement elementType={Form__Elemen__Types.FormHeader}>
        <h1 className="Heading">Login</h1>
        <p>Please enter your e-mail and password:</p>
      </FormElement>
      <FormError formState={formState} />
      {LoginFormInputs.map(({ validation, ...item }: LoginFormInput) => {
        const Tag: any =
          item.label === "Password" ? FormPasswordInput : FormTextInput;
        return (
          <FormElement key={item.name}>
            <Tag
              {...item}
              value={getloginState(item.name)}
              onFocus={(e: InputFocusEvent) =>
                handleOnFocusEvent(e, initialFormState, setFormState)
              }
              onChange={(e: InputChangeEvent) => {
                updateloginState(item.name, e.target.value);
              }}
            />
          </FormElement>
        );
      })}
      <div
        className="Form__HelpText Text--alignRight Link Link--secondary"
        onClick={() => handleLoginPage(LoginPage.ForgotPassword)}
      >
        Lost your password?
      </div>
      <FormSubmit isFull isLoading={formState.isButtonLoading}>
        Login
      </FormSubmit>
      <FormHint isCenter>
        <span className="Text--subdued">Don't have an account ? </span>
        &nbsp;
        <a href="/auth/register" className="Link Link--secondary">
          Create one
        </a>
      </FormHint>
    </Form>
  );
};
