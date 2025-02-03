import { Container } from "../../../../ui_kits/global/Container.styles";
import { PageContent } from "../../../../ui_kits/global/PageContent.styles";
import { Panel } from "../../../../ui_kits/Panel/Panel";
import { ProfileInformation } from "./ProfileInformation";
import { UpdatePassword } from "./UpdatePassword";

export const MyProfile = () => {
  return (
    <>
      <PageContent isNarrow>
        <Panel title=" Profile Information">
          <ProfileInformation />
        </Panel>
      </PageContent>
      <PageContent isNarrow>
        <Panel title="Update Password">
          <UpdatePassword />
        </Panel>
      </PageContent>
    </>
  );
};
