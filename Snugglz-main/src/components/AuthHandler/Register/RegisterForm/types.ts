import { validationRules } from "../../../../utils/Validation";
import { InputBaseProps, InputType } from "../../../../models/types";

export type IRegisterFormState = {
  customername: string;
  email: string;
  password: string;
  phone: string;
};

export type registerInputProps = InputBaseProps<IRegisterFormState>;

export const initialRegisterState: IRegisterFormState = {
  customername: "",
  email: "",
  phone: "",
  password: "",
};

export const RegisterInputs: registerInputProps[] = [
  {
    name: "customername",
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
    name: "password",
    label: "Password",
    type: InputType.password,
    validation: [
      { rule: validationRules.password },
      { rule: validationRules.required },
    ],
  },
];
