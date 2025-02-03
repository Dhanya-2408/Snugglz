import { ReactElement, FC, useState } from "react";
import { IFromInputProps } from "./IFormProps";
import EyeIcon from "../../../assets/icons/Eye.icon";
import { InputType } from "../../../models/types";


export const FormPasswordInput: FC<IFromInputProps> = ({
  label,
  type,
  placeholder,
  ...otherProps
}): ReactElement => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <input
        type={showPassword ? InputType.text : InputType.password}
        autoComplete="current-password"
        placeholder={placeholder ? placeholder : label}
        {...otherProps}
        className="Form__Input"
      />
      <span className="Form__InputIcon" onClick={handleTogglePassword}>
        <EyeIcon />
      </span>
      <label className="Form__FloatingLabel">{label}</label>
    </>
  );
};
