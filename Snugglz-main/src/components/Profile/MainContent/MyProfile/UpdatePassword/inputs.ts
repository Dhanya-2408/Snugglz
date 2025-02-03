import { InputBaseProps, InputType } from "../../../../../models/types";
import { validationRules } from "../../../../../utils/Validation";

export type IUpdatePasswordState = {
  password: string;
  confirmpassword: string;
};

export type UpdatePasswordInput = InputBaseProps<IUpdatePasswordState>;

export const initialUpdatePasswordState: IUpdatePasswordState = {
  password: "",
  confirmpassword: "",
};

export const UpdatePasswordInputs: UpdatePasswordInput[] = [
  {
    name: "password",
    label: "Password",
    type: InputType.password,
    validation: [
      { rule: validationRules.password },
      { rule: validationRules.required },
    ],
  },
  {
    name: "confirmpassword",
    label: "Confirm Password",
    type: InputType.password,
    validation: [{ rule: validationRules.required }],
  },
];
