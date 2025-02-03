import { FC, ReactNode } from "react";
import { PageWidth } from "../../../ui_kits/global/Container.styles";
import { SectionHeader } from "../../../ui_kits/Sections/SectionHeader/SectionHeader";
import { SectionWrapper } from "../../../ui_kits/Sections/SectionWrapper/SectionWrapper";
import "./Collections.scss";

interface IProps {
  children: ReactNode;
  heading?: string;
  subHeading?: string;
  isNarrow?: boolean;
}

export const Collections: FC<IProps> = (props: IProps) => {
  const { heading, subHeading, children, isNarrow } = props;

  return (
    <SectionWrapper isbordered>
      <SectionHeader heading={heading} subHeading={subHeading} />
      <PageWidth isNarrow={isNarrow}>
        <div className="CollectionList Grid">{children}</div>
      </PageWidth>
    </SectionWrapper>
  );
};
