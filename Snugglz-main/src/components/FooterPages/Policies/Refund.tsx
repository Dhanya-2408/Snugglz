import { IFAQItem } from "../FAQ/FAQData";
import { RefundData } from "./data/RefundData";
import {
  PageContent,
  PageHeader,
} from "../../../ui_kits/global/PageContent.styles";
import { Container } from "../../../ui_kits/global/Container.styles";
import { SectionHeader } from "../../../ui_kits/Sections/SectionHeader/SectionHeader";

export const Refund = () => {
  return (
    <Container>
      <PageContent>
        <PageHeader>
          <SectionHeader heading="Return and Refund Policy" />
        </PageHeader>
        <div className="Rte">
          <p>
            We at Snugglz strive to give you the quality product of your choice.
            However, if you are not happy with the order that you have received
            for any reason you can simply return the product within 7 days of
            delivery.
          </p>
          <p>
            For any further query mail us at &nbsp;
            <span className="Heading Link Link--primary Text--subdued">
              care@renderer.store
            </span>
          </p>
          {RefundData.map((item: IFAQItem, index) => (
            <p key={index}>
              <h3 className="Heading" key={`refundQn-${index}`}>
                {item.qn}
              </h3>
              {item.ans.map((ans: string, i: number) => (
                <p key={`refundAns-${i} `}>{ans}</p>
              ))}
            </p>
          ))}
        </div>
      </PageContent>
    </Container>
  );
};
