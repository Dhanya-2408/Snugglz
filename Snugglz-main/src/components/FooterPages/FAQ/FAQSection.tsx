import { FC, Fragment } from "react";
import { IFAQItem } from "./FAQData";
import { Accordian } from "../../../ui_kits/Accordian/Accordian";
import "./FAQSection.scss";

interface IProps {
  title: string;
  content: IFAQItem[];
}

export const FAQSection: FC<IProps> = (props: IProps) => {
  const { title, content } = props;

  return (
    <Fragment>
      <h2 className="Faq__Section Heading">{title}</h2>
      {content.map((item: IFAQItem, index: number) => (
        <Accordian
          key={`faqItem-${index}`}
          title={item.qn}
          child={
            <div className="Faq__Answer Rte u-h6 Heading Text--subdued">
              {item.ans.map((ans: string, key: number) => (
                <p key={`faqItemAns-${key}`}>{ans}</p>
              ))}
            </div>
          }
        />
      ))}
    </Fragment>
  );
};
