import React from "react";
import { ITextButtonProps } from "../../Buttons/TextButton/ITextButton.props";
import { TextButton } from "../../Buttons/TextButton/TextButton.component";

export const FormSubmit: React.FC<ITextButtonProps> = (
  props: ITextButtonProps
) => {
  return <TextButton className="Form__Submit" {...props} />;
};
