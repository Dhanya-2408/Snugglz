import classNames from "classnames";
import { selectedFilters } from "../../../redux/slices/collection/collection.selector";
import { setSelectedFilters } from "../../../redux/slices/collection/collection.slice";
import {
  FilterData,
  FilterKeys,
  ISelectedFilters,
} from "../../../redux/slices/collection/collection.type";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import { FormCheckInput } from "../../../ui_kits/Form";
import { toggleArrayItem } from "../../../utils/generics";
import { FiltersData } from "./FiltersData";

interface IProps {
  field: FilterKeys;
}

const singleFilterFields = ["price", "discount"];
const multiFilterFields = ["color", "size", "occasion"];

export const CollectionFilter = (props: IProps) => {
  const { field } = props;
  const FilterList = FiltersData[field];

  const dispatch = useAppDispatch();
  const selectedFilterValues = useAppSelector(selectedFilters);
  const selectedFilterFields = selectedFilterValues?.[field];

  const toggleFilterData = (selectedItem: FilterData) => {
    const initialData = selectedFilterValues || ({} as ISelectedFilters);
    let filters;
    if (singleFilterFields.includes(field)) {
      filters =
        selectedFilterFields === selectedItem.title ? "" : selectedItem.title;
    }
    if (multiFilterFields.includes(field)) {
      const selectedFiliterFieldsCopy = selectedFilterFields || [];
      filters = toggleArrayItem(
        selectedFiliterFieldsCopy as string[],
        selectedItem.title
      );
    }
    dispatch(setSelectedFilters({ ...initialData, [field]: filters }));
  };

  const validateIsChecked = (title: string) => {
    if (Array.isArray(selectedFilterFields)) {
      return selectedFilterFields.includes(title);
    }
    return selectedFilterFields === title;
  };

  if (field === "color") {
    return (
      <div className="CollectionFilter__Color">
        <ul className="HorizontalList">
          {FilterList.map((item: FilterData) => (
            <li className="HorizontalList__Item" key={item.id}>
              <div
                className={classNames("swatch__item", {
                  "swatch__item--active": validateIsChecked(item.title),
                })}
                onClick={() => toggleFilterData(item)}
                style={{
                  backgroundImage: `url(${item.url})`,
                }}
              ></div>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <ul className="Linklist u-h6">
      {FilterList.map((item: FilterData) => (
        <li className="Linklist__Item" key={item.id}>
          <FormCheckInput
            item={item}
            name={item.title}
            label={item.title}
            handleChange={toggleFilterData}
            isChecked={validateIsChecked(item.title)}
          />
        </li>
      ))}
    </ul>
  );
};
