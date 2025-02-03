import { ReactElement, FC } from "react";
import { IFromInputProps } from "./IFormProps";
import { SearchDesktopIcon } from "../../../assets/icons/Search.icon";

export const FormSearchInput: FC<IFromInputProps> = ({
  label,
  placeholder,
  ...otherProps
}): ReactElement => {
  return (
    <>
      <input
        placeholder={placeholder ? placeholder : label}
        {...otherProps}
        className="Form__Input"
      />
      <span className={"Form__InputIcon"}>{<SearchDesktopIcon />}</span>
      <label className="Form__FloatingLabel">{label}</label>
    </>
  );
};
