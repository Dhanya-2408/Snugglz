import { useAuth } from "../../../../../contexts/AuthContext";
import useObjectState from "../../../../../hooks/useObjectState";
import { initialFormState } from "../../../../../models/constants";
import {
  FormSubmitEvent,
  IFormState,
  InputChangeEvent,
  InputFocusEvent,
  Messages,
  OnclickEvent,
} from "../../../../../models/types";
import { fetchCustomerAsync } from "../../../../../redux/slices/profile/profile.reducer";
import { customer } from "../../../../../redux/slices/profile/profile.selector";
import { useAppDispatch, useAppSelector } from "../../../../../redux/store";
import { profileService } from "../../../../../services/axiosServices";
import { ButtonGroup } from "../../../../../ui_kits/Buttons/TextButton/TextButton.styles";
import {
  Form,
  FormElement,
  FormSubmit,
  FormTextInput,
} from "../../../../../ui_kits/Form";
import { safeSetTimeout } from "../../../../../utils/generics";
import { FormError } from "../../../../AuthHandler/FormError";
import {
  IProfileFormState,
  ProfileFormInput,
  ProfileFormInputs,
} from "./inputs";

export const ProfileInformation = () => {
  const dispatch = useAppDispatch();
  const { data } = useAppSelector(customer);

  const initialProfileFormState: IProfileFormState = {
    customername: data?.customername ?? "",
    phone: data?.phone ?? "",
    dob: data?.dob ?? "",
  };

  const {
    obj: profileState,
    get: getProfileState,
    update: updateProfileState,
    setObj: setProfileState,
  } = useObjectState(initialProfileFormState);

  const {
    obj: formState,
    update: updateFormState,
    setObj: setFormState,
  } = useObjectState(initialFormState as IFormState<IProfileFormState>);

  const { handleFormValidate, handleOnFocusEvent, updateData } = useAuth();

  const message: Messages = {
    success: "Updated successfully.",
    error: "Something Went wrong, Try again later",
  };

  const params = {
    ...profileService.updateCustomer,
    params: {
      ...data,
      ...profileState,
    },
  };

  const handleOnsubmit = async (e: FormSubmitEvent) => {
    e.preventDefault();
    const isValid = handleFormValidate(
      ProfileFormInputs,
      profileState,
      updateFormState
    );
    if (isValid) {
      const response = await updateData(
        params,
        formState,
        message,
        setFormState
      );

      if (response) {
        dispatch(fetchCustomerAsync(data?.email as string));
      }
    }

    safeSetTimeout(setFormState, 3000, initialFormState);
  };

  const handleOnCancel = async (e: OnclickEvent) => {
    e.preventDefault();
    setProfileState(initialProfileFormState);
  };

  return (
    <Form onSubmit={handleOnsubmit}>
      <FormError formState={formState} />
      {ProfileFormInputs.map(({ validation, ...item }: ProfileFormInput) => {
        return (
          <FormElement key={item.name}>
            <FormTextInput
              {...item}
              value={getProfileState(item.name)}
              onFocus={(e: InputFocusEvent) =>
                handleOnFocusEvent(e, initialFormState, setFormState)
              }
              onChange={(e: InputChangeEvent) => {
                updateProfileState(item.name, e.target.value);
              }}
            />
          </FormElement>
        );
      })}
      <ButtonGroup>
        <FormSubmit isExpand>UPDATE</FormSubmit>
        <FormSubmit isExpand buttonType="inverted" onClick={handleOnCancel}>
          CANCEL
        </FormSubmit>
      </ButtonGroup>
    </Form>
  );
};
