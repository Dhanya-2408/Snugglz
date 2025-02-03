import { forwardRef } from "react";
import classnames from "classnames";
import {
  GridDualView,
  GridMultiView,
  GridSingleView,
} from "../../../assets/icons/Grid.icon";
import { FilterIcon } from "../../../assets/icons/Filter.icon";
import { ArrowDownIcon } from "../../../assets/icons/Arrow.icon";
import { LayoutType } from "../../../redux/slices/collection/collection.type";
import "./CollectionToolbar.scss";

interface IProps {
  layoutType: LayoutType;
  toggleLayout: (type: LayoutType) => void;
  toggleSort: () => void;
  toggleFilter: () => void;
}

export const CollectionToolbar = forwardRef<HTMLDivElement, IProps>(
  (props, ref) => {
    // export const CollectionToolbar: FC<IProps> = (props: IProps) => {
    const { toggleLayout, layoutType, toggleSort, toggleFilter } = props;

    const DesktopView = (
      <div className="hidden-phone">
        <button
          className={classnames("CollectionToolbar__LayoutType", {
            "is-active": layoutType !== LayoutType.Dual,
          })}
          data-count="4"
          onClick={() => toggleLayout(LayoutType.Multi)}
        >
          <GridMultiView />
        </button>
        <button
          className={classnames("CollectionToolbar__LayoutType", {
            "is-active": layoutType === LayoutType.Dual,
          })}
          data-count="2"
          onClick={() => toggleLayout(LayoutType.Dual)}
        >
          <GridDualView />
        </button>
      </div>
    );

    const MobileView = (
      <div className="hidden-tablet-and-up">
        <button
          className={classnames("CollectionToolbar__LayoutType", {
            "is-active": layoutType !== LayoutType.Single,
          })}
          data-count="2"
          onClick={() => toggleLayout(LayoutType.Dual)}
        >
          <GridDualView />
        </button>
        <button
          className={classnames("CollectionToolbar__LayoutType", {
            "is-active": layoutType === LayoutType.Single,
          })}
          data-count="1"
          onClick={() => toggleLayout(LayoutType.Single)}
        >
          <GridSingleView />
        </button>
      </div>
    );
    return (
      <div className="CollectionToolbar" ref={ref}>
        <div className="CollectionToolbar__Item CollectionToolbar__Item--layout">
          {DesktopView}
          {MobileView}
        </div>
        <div className="CollectionToolbar__Group Heading Text--subdued u-h5">
          <button className="CollectionToolbar__Item" onClick={toggleSort}>
            Sort
            <ArrowDownIcon />
          </button>
          <button className="CollectionToolbar__Item" onClick={toggleFilter}>
            <FilterIcon /> Filter
          </button>
        </div>
      </div>
    );
  }
);
