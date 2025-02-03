import { InputBaseProps, InputType } from "../../../../../models/types";
import { validationRules } from "../../../../../utils/Validation";

export type IProfileFormState = {
  customername: string;
  phone: string;
  dob: string;
};

export type ProfileFormInput = InputBaseProps<IProfileFormState>;

export const ProfileFormInputs: ProfileFormInput[] = [
  {
    name: "customername",
    label: "Customer Name",
    type: InputType.text,
    validation: [
      { rule: validationRules.name },
      { rule: validationRules.required },
    ],
  },
  {
    name: "phone",
    label: "Phone",
    type: InputType.number,
    validation: [
      { rule: validationRules.phone },
      { rule: validationRules.required },
    ],
  },
  {
    name: "dob",
    label: "Date of Birth",
    type: InputType.date,
    validation: [{ rule: validationRules.required }],
  },
];
