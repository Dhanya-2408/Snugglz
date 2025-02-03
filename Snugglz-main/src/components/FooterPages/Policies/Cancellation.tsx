import {
  PageContent,
  PageHeader,
} from "../../../ui_kits/global/PageContent.styles";
import { CancellationData } from "./data/CancellationData";
import { Container } from "../../../ui_kits/global/Container.styles";
import { SectionHeader } from "../../../ui_kits/Sections/SectionHeader/SectionHeader";


export const Cancellation = () => {
  return (
    <Container>
      <PageContent isNarrow>
        <PageHeader>
          <SectionHeader heading="Cancellation Policy" />
        </PageHeader>
        <div className="Rte">
          {CancellationData.map((item: string, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
      </PageContent>
    </Container>
  );
};
