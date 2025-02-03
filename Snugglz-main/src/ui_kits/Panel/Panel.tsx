import { FC, ReactNode } from "react";
import "./Panel.scss";

interface IProps {
  title: string;
  children: ReactNode;
}

export const Panel: FC<IProps> = (props: IProps) => {
  const { title, children } = props;
  return (
    <div className="Panel">
      <h4 className="Panel__Title Heading">{title}</h4>
      <div className="Panel__Content ">{children}</div>
    </div>
  );
};
