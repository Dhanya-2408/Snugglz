import { validationRules } from "../../../../utils/Validation";
import { InputBaseProps, InputType } from "../../../../models/types";

export type IForgotPasswordState = {
  email: string;
};

export type ForgotPasswordInput = InputBaseProps<IForgotPasswordState>;

export const initialForgotPasswordState: IForgotPasswordState = {
  email: "",
};

export const ForgotPasswordInputs: ForgotPasswordInput[] = [
  {
    name: "email",
    label: "Email",
    type: InputType.email,
    validation: [
      { rule: validationRules.email },
      { rule: validationRules.required },
    ],
  },
];
