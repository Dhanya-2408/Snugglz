import { FC, ReactNode } from "react";
import { IF } from "../../IF";
import { isEmpty } from "../../../utils/script";
import "./SectionHeader.scss";

interface IProps {
  heading?: string;
  subHeading?: string;
  description?: ReactNode;
}

export const SectionHeader: FC<IProps> = (props: IProps) => {
  const { subHeading, heading, description } = props;

  return (
    <div className="SectionHeader">
      <IF condition={!isEmpty(subHeading)}>
        <div className="SectionHeader__SubHeading Heading u-h4">
          {subHeading}
        </div>
      </IF>
      <IF condition={!isEmpty(heading)}>
        <h2 className="SectionHeader__Heading Heading">{heading}</h2>
      </IF>
      <IF condition={!isEmpty(description)}>
        <p className="SectionHeader__Description">{description}</p>
      </IF>
    </div>
  );
};
