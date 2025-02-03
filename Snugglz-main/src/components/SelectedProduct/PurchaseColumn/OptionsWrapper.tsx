import { ReactNode } from "react";

interface IProps {
  name: string;
  children: ReactNode;
}

export const OptionsWrapper = (props: IProps) => {
  const { name, children } = props;
  return (
    <div className="ProductForm__Option ProductForm__Option--labelled">
      <span className="ProductForm__Label Heading u-h5">
        {name}:<em>*</em>
      </span>
      {children}
    </div>
  );
};
