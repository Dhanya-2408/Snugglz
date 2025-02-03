import { validationRules } from "../../../../utils/Validation";
import { InputBaseProps, InputType } from "../../../../models/types";

export type ILoginFormState = {
  email: string;
  password: string;
};

export type LoginFormInput = InputBaseProps<ILoginFormState>;

export const initialLoginFormState: ILoginFormState = {
  email: "",
  password: "",
};

export const LoginFormInputs: LoginFormInput[] = [
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
    name: "password",
    label: "Password",
    type: InputType.password,
    validation: [{ rule: validationRules.required }],
  },
];
