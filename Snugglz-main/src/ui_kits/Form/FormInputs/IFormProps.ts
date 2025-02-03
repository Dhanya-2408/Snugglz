import { InputChangeEvent, InputFocusEvent } from "../../../models/types";

export interface IFromInputProps {
  label?: string;
  type?: string;
  name?: string;
  className?: string;
  placeholder?: string;
  value?: string | undefined | any;
  required?: boolean;
  autoFocus?: boolean;
  disabled?: boolean;
  autocomplete?: string;
  onChange?: (e: InputChangeEvent) => void;
  onFocus?: (e: InputFocusEvent) => void;
  onBlur?: (e: InputFocusEvent) => void;
}
