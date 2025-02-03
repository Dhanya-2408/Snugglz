import {
  FormSubmitEvent,
  IFormState,
  InputChangeEvent,
  InputFocusEvent,
  Messages,
} from "../../../../../models/types";
import { useAuth } from "../../../../../contexts/AuthContext";
import useObjectState from "../../../../../hooks/useObjectState";
import { initialFormState } from "../../../../../models/constants";
import { authService } from "../../../../../services/axiosServices";
import {
  Form,
  FormElement,
  FormPasswordInput,
  FormSubmit,
} from "../../../../../ui_kits/Form";
import { safeSetTimeout } from "../../../../../utils/generics";
import { FormError } from "../../../../AuthHandler/FormError";
import {
  initialUpdatePasswordState,
  IUpdatePasswordState,
  UpdatePasswordInput,
  UpdatePasswordInputs,
} from "./inputs";
import { PageHeader } from "../../../../../ui_kits/global/PageContent.styles";

export const UpdatePassword = () => {
  const { user } = useAuth();

  const {
    obj: registerState,
    get: getRegisterState,
    update: updateRegisterState,
    setObj: setregisterState,
  } = useObjectState(initialUpdatePasswordState);

  const {
    obj: formState,
    update: updateFormState,
    setObj: setFormState,
  } = useObjectState(initialFormState as IFormState<IUpdatePasswordState>);

  const { handleFormValidate, handleOnFocusEvent, updateData } = useAuth();

  const message: Messages = {
    success: "Password updated succesfully",
    error: "Error While updating password, Try again!",
  };

  const params = {
    ...authService.ResetPassword,
    params: {
      email: user,
      password: registerState.password,
    },
  };

  const handleOnsubmit = async (e: FormSubmitEvent) => {
    e.preventDefault();
    let isValid = handleFormValidate(
      UpdatePasswordInputs,
      registerState,
      updateFormState
    );

    if (isValid && registerState.password !== registerState.confirmpassword) {
      isValid = false;
      updateFormState("helperText", "Passwords do NOT match!");
    }

    if (isValid) {
      await updateData(params, formState, message, setFormState);
      await setregisterState(initialUpdatePasswordState);
    }

    safeSetTimeout(setFormState, 3000, initialFormState);
  };

  return (
    <Form onSubmit={handleOnsubmit}>
     
      <FormError formState={formState} />
      {UpdatePasswordInputs.map(
        ({ validation, ...item }: UpdatePasswordInput) => {
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
        UPDATE
      </FormSubmit>
    </Form>
  );
};
