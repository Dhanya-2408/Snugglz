import { CollectionFilters } from "../CollectionFilters";
import { DrawerView } from "../../../ui_kits/Drawer/Drawer.compenent";
import { TextButton } from "../../../ui_kits/Buttons/TextButton/TextButton.component";
import { OnclickEvent } from "../../../models/types";

interface IProps {
  visibility: boolean;
  toggleFilter: () => void;
  resetFilters: (e: OnclickEvent) => void;
}

export const CollectionDrawer = (props: IProps) => {
  const { visibility, toggleFilter, resetFilters } = props;

  return (
    <DrawerView
      body={<CollectionFilters />}
      footer={
        <TextButton isFull onClick={resetFilters}>
          RESET
        </TextButton>
      }
      title="FILTERS"
      position="right"
      isHidden={!visibility}
      handleClose={toggleFilter}
      // classes="hidden-lap-and-up"
    />
  );
};
