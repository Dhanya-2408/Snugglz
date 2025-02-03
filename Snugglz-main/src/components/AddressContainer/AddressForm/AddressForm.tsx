import {
  Form,
  FormElement,
  FormTextInput,
  FormSelectInput,
  FormAlert,
} from "../../../ui_kits/Form";
import { Modal } from "../../../ui_kits/Modal/Modal";
import { Form__Elemen__Types } from "../../../ui_kits/Form/FormElements/FormElement";
import { TextButton } from "../../../ui_kits/Buttons/TextButton/TextButton.component";
import {
  AddressFormGroupInputs,
  AddressFormInput,
  AddressFormInputs,
  IAddressFormState,
  initialIAddressValues,
} from "./inputs";
import {
  FormSubmitEvent,
  IFormState,
  InputChangeEvent,
  InputFocusEvent,
  InputType,
} from "../../../models/types";
import { IF } from "../../../ui_kits/IF";
import { getAllDistricts, getAllStates } from "../../../mockData/States";
import useObjectState from "../../../hooks/useObjectState";
import { initialFormState } from "../../../models/constants";
import { useAuth } from "../../../contexts/AuthContext";
import { isEmpty, uid } from "../../../utils/script";
import { useAppDispatch } from "../../../redux/store";
import { addNewAddress } from "../../../redux/slices/address/address.slice";
import { IAddress } from "../../../redux/slices/address/address.type";
import { useEffect, useMemo } from "react";

interface IProps {
  isVisible: boolean;
  addresses: Array<IAddress>;
  addressId?: string;
  handleOnClose: () => void;
}

export const AddressForm = (props: IProps) => {
  const dispatch = useAppDispatch();
  const { handleOnFocusEvent, handleFormValidate } = useAuth();
  const { isVisible, addresses, addressId, handleOnClose } = props;

  const initialValues = useMemo(() => {
    let computedData = initialIAddressValues;
    let computedId = uid();

    const selectedAddress = addresses.find(
      (add: IAddress) => add.id === addressId
    );
    if (selectedAddress) {
      let { id, isDefault, ...rest } = selectedAddress;
      computedData = rest;
      computedId = id;
    }
    return { computedData, computedId };
  }, [addressId, addresses]);

  const {
    obj: addressState,
    get: getAddressState,
    update: updateAddressState,
    setObj: setAddressState,
  } = useObjectState(initialValues.computedData);

  const {
    obj: formState,
    update: updateFormState,
    setObj: setFormState,
  } = useObjectState(
    initialFormState as Partial<IFormState<IAddressFormState>>
  );

  useEffect(() => {
    setAddressState(initialValues.computedData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [addressId, addresses]);

  const handleSelectChange = (name: string, option: string) => {
    updateAddressState(name as any, option);
  };

  const getOptions = (name: string) => {
    return name === "state"
      ? getAllStates()
      : getAllDistricts(addressState.state);
  };

  const handleOnsubmit = async (e: FormSubmitEvent) => {
    e.preventDefault();
    const isValid = handleFormValidate(
      [...AddressFormInputs, ...AddressFormGroupInputs],
      addressState,
      updateFormState
    );
    if (isValid) {
      dispatch(
        addNewAddress({
          id: initialValues.computedId,
          ...addressState,
          isDefault: false,
        })
      );
      handleOnClose();
    }
  };

  const getFormInput = (addressInput: AddressFormInput) => {
    return (
      <FormTextInput
        label={addressInput.label}
        name={addressInput.name}
        type={addressInput.type}
        value={getAddressState(addressInput.name)}
        onFocus={(e: InputFocusEvent) =>
          handleOnFocusEvent(e, initialFormState, setFormState)
        }
        onChange={(e: InputChangeEvent) => {
          updateAddressState(addressInput.name, e.target.value);
        }}
      />
    );
  };

  return (
    <Modal
      title="Add Address"
      description="Please fill in the information below:"
      isHidden={!isVisible}
      onClose={handleOnClose}
    >
      <Form spacingTight onSubmit={handleOnsubmit}>
        <FormElement>
          <IF
            condition={
              !isEmpty(formState.helperText) || !isEmpty(formState.errors)
            }
          >
            <FormAlert
              isError={!formState.submitSuccess}
              isSuccess={formState.submitSuccess}
              classname="u-h6"
            >
              {formState.helperText ||
                (formState.errors && Object.values(formState.errors)[0])}
            </FormAlert>
          </IF>
        </FormElement>
        {AddressFormInputs.map((addressInput: AddressFormInput) => (
          <FormElement key={addressInput.name}>
            <IF condition={addressInput.type === InputType.select}>
              <FormSelectInput
                label={addressInput.label}
                name={addressInput.name}
                options={getOptions(addressInput.name)}
                onSelect={handleSelectChange}
                disabled={!getOptions(addressInput.name)?.length}
                value={getAddressState(addressInput.name) as string}
              />
            </IF>
            <IF condition={addressInput.type !== InputType.select}>
              {getFormInput(addressInput)}
            </IF>
          </FormElement>
        ))}
        <FormElement elementType={Form__Elemen__Types.FormGroup}>
          {AddressFormGroupInputs.map((addressInput: AddressFormInput) => (
            <FormElement key={addressInput.name}>
              {getFormInput(addressInput)}
            </FormElement>
          ))}
        </FormElement>
        <TextButton isFull>Submit</TextButton>
      </Form>
    </Modal>
  );
};
