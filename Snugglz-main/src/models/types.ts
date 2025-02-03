import { ReactNode } from "react";
import { IValidation } from "../utils/Validation";

export type InputChangeEvent = React.ChangeEvent<
  HTMLInputElement | HTMLTextAreaElement
>;
export type InputFocusEvent = React.FocusEvent<
  HTMLInputElement | HTMLTextAreaElement
>;

export type OnclickEvent = React.MouseEvent<HTMLButtonElement>;
export type FormSubmitEvent = React.FormEvent<HTMLFormElement>;

export type ChildrenType = {
  children: ReactNode;
};

export type AsyncData<T> = {
  loading: boolean;
  error: string | null;
  data: T | null;
};

export enum InputType {
  button = "button",
  checkbox = "checkbox",
  color = "color",
  date = "date",
  datetimelocal = "datetime-local",
  email = "email",
  file = "file",
  hidden = "hidden",
  image = "image",
  month = "month",
  number = "number",
  password = "password",
  radio = "radio",
  range = "range",
  reset = "reset",
  search = "search",
  submit = "submit",
  tel = "tel",
  text = "text",
  time = "time",
  url = "url",
  week = "week",
  select = "select",
  textarea = "textarea",
}

export interface IErrors {
  [key: string]: string;
}

export default interface ISorter<T> {
  property: Extract<keyof T, string | number | Date>;
  isDescending: boolean;
}

type messageName = "success" | "error";
export type Messages = Record<messageName, string>;

export interface IFormState<T> {
  submitSuccess: boolean;
  isButtonLoading: boolean;
  helperText: string;
  errors: Partial<T | null>;
}

export interface InputBaseProps<T> {
  name: keyof T;
  type: InputType;
  label: string;
  id?: string | number;
  placeholder?: string;
  validation?: IValidation[];
}

export interface InputSelectProps<T> {
  name: keyof T;
  label: string;
  validation?: IValidation[];
}

export interface IPriceOverview {
  title: string;
  subTitle?: string;
  price: string;
}
