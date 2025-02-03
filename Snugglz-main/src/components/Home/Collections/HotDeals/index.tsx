import LazyLoad from "../../../LazyComponent";
import { Collections } from "../Collections";
import { hotDealsData, IHotDeal } from "./data";
import { ImageView } from "./ImageView";

export const HotDeals = () => {
  return (
    <Collections heading="Hot Deals" isNarrow>
      {hotDealsData.map((item: IHotDeal) => (
        <LazyLoad
          tag="div"
          key={item.title}
          className="Grid__Cell 1/2--phone 1/4--tablet-and-up"
        >
          <ImageView item={item} key={item.title} />
        </LazyLoad>
      ))}
    </Collections>
  );
};
