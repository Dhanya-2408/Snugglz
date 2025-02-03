
import { InputBaseProps, InputType } from "../../../models/types";
import { IAddress } from "../../../redux/slices/address/address.type";
import { validationRules } from "../../../utils/Validation";

export type IAddressFormState = Omit<IAddress, "id" | "isDefault">;

export const initialIAddressValues: IAddressFormState = {
  name: "",
  email: "",
  phone: "",
  state: "",
  city: "",
  locality: "",
  address: "",
  pincode: "",
  landmark: "",
};

export type AddressFormInput = InputBaseProps<IAddressFormState>;

export const AddressFormInputs: AddressFormInput[] = [
  {
    name: "name",
    label: "Name",
    type: InputType.text,
    validation: [
      { rule: validationRules.name },
      { rule: validationRules.required },
    ],
  },
  {
    name: "email",
    label: "Email",
    type: InputType.email,
    validation: [
      { rule: validationRules.email },
      { rule: validationRules.required },
    ],
  },
  {
    name: "phone",
    label: "Phone Number",
    type: InputType.number,
    validation: [
      { rule: validationRules.phone },
      { rule: validationRules.required },
    ],
  },

  {
    name: "state",
    label: "State",
    type: InputType.select,
    validation: [{ rule: validationRules.required }],
  },
  {
    name: "city",
    label: "City",
    type: InputType.select,
    validation: [{ rule: validationRules.required }],
  },
  {
    name: "locality",
    label: "Locality/Town",
    type: InputType.text,
    validation: [{ rule: validationRules.required }],
  },
  {
    name: "address",
    label: "Address",
    type: InputType.text,
    validation: [{ rule: validationRules.required }],
  },
];

export const AddressFormGroupInputs: AddressFormInput[] = [
  {
    name: "pincode",
    label: "Zip Code",
    type: InputType.number,
    validation: [
      { rule: validationRules.required },
      { rule: validationRules.length, args: 6 },
    ],
  },
  {
    name: "landmark",
    label: "Landmark",
    type: InputType.text,
  },
];
