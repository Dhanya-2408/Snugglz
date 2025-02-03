import {
  PageContent,
  PageHeader,
} from "../../../ui_kits/global/PageContent.styles";
import { Container } from "../../../ui_kits/global/Container.styles";
import { Form, FormElement, FormTextInput } from "../../../ui_kits/Form";
import { TextButton } from "../../../ui_kits/Buttons/TextButton/TextButton.component";
import { SectionHeader } from "../../../ui_kits/Sections/SectionHeader/SectionHeader";

export const TrackOrder = () => {
  return (
    <Container>
      <PageContent isExtraNarrow>
        <PageHeader>
          <SectionHeader heading="Track Shipment" />
        </PageHeader>
        <Form classname="Form">
          <FormElement>
            <FormTextInput
              label="Order id / Tracking number"
              placeholder="Enter order id or tracking number"
            />
          </FormElement>
          <TextButton isFull>Send message</TextButton>
        </Form>
      </PageContent>
    </Container>
  );
};
