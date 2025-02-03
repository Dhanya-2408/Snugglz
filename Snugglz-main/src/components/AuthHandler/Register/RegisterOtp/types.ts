import { validationRules } from "../../../../utils/Validation";
import { InputBaseProps, InputType } from "../../../../models/types";

export type IRegisterOTPState = {
  otp: string;
};
export type registerOtpInputProps = InputBaseProps<IRegisterOTPState>;

export const initialRegisterOtpState: IRegisterOTPState = {
  otp: "",
};

export const RegisterOTPInputs: registerOtpInputProps[] = [
  {
    name: "otp",
    label: "OTP",
    type: InputType.text,
    validation: [{ rule: validationRules.required }],
  },
];
