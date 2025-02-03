import {
  PageContent,
  PageHeader,
} from "../../../ui_kits/global/PageContent.styles";
import { ShippingData } from "./data/ShippingData";
import { Container } from "../../../ui_kits/global/Container.styles";
import { SectionHeader } from "../../../ui_kits/Sections/SectionHeader/SectionHeader";

export const Shipping = () => {
  return (
    <Container>
      <PageContent isNarrow>
        <PageHeader>
          <SectionHeader heading="Shipping Policy" />
        </PageHeader>
        <div className="Rte">
          {ShippingData.map((item: string, index) => (
            <p key={index}>{item}</p>
          ))}
          <p>
            For all the international order you can contact us at &nbsp;
            <span className="Heading Link Link--secondary u-h4">
              care@renderer.store
            </span>
          </p>
        </div>
      </PageContent>
    </Container>
  );
};
