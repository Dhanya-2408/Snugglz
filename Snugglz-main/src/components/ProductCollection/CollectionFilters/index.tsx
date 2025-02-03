import { CollectionFilter } from "./CollectionFilter";
import { Accordian } from "../../../ui_kits/Accordian/Accordian";

export const CollectionFilters = () => {
  return (
    <div className="CollectionFilters">
      <form className="">
        <Accordian
          title="SIZE"
          child={<CollectionFilter field="size" />}
          isPadded
        />
        <Accordian
          title="PRICE"
          child={<CollectionFilter field="price" />}
          isPadded
        />
        {/* <Accordian
          title="DISCOUNT"
          child={<CollectionFilter field="discount" />}
          isPadded
        /> */}
        <Accordian
          title="OCCASION"
          child={<CollectionFilter field="occasion" />}
          isPadded
        />
        <Accordian
          title="COLOR"
          child={<CollectionFilter field="color" />}
          isPadded
        />
      </form>
    </div>
  );
};
