import { validationRules } from "../../../../utils/Validation";
import { InputBaseProps, InputType } from "../../../../models/types";

export type IResetPasswordState = {
  password: string;
  confirmpassword: string;
};

export type ResetPasswordInput = InputBaseProps<IResetPasswordState>;

export const initialResetPasswordState: IResetPasswordState = {
  password: "",
  confirmpassword: "",
};

export const ResetPasswordInputs: ResetPasswordInput[] = [
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
