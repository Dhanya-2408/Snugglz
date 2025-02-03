import classNames from "classnames";
import { SortList } from "../../../models/constants";
import { ISortCollection } from "../../../redux/slices/collection/collection.type";
import { DrawerView } from "../../../ui_kits/Drawer/Drawer.compenent";
import { Popover } from "../../../ui_kits/Popover/Popover";

interface IProps {
  visibility: boolean;
  selectedSorter: ISortCollection | undefined;
  togglePopover: () => void;
  toggleSortClick: (item: ISortCollection) => void;
  top: number;
}

export const CollectionSorter = (props: IProps) => {
  const { visibility, selectedSorter, togglePopover, toggleSortClick } = props;

  const PopoverValue = () => (
    <div className="Popover__ValueList u-h6" data-scrollable>
      {SortList.map((item: ISortCollection) => (
        <button
          className={classNames("Popover__Value  Link Link--primary", {
            "is-selected": item.key === selectedSorter?.key,
          })}
          key={item.key}
          onClick={() => toggleSortClick(item)}
        >
          {item.key}
        </button>
      ))}
    </div>
  );

  return (
    <Popover
      top={`250px`}
      right="0px"
      title="Sort"
      children={<PopoverValue />}
      togglePopover={togglePopover}
      isHidden={!visibility}
    />
  );
};
