import { ImageView } from "./ImageView";
import { IF } from "../../../../ui_kits/IF";
import { Collections } from "../Collections";
import LazyLoad from "../../../LazyComponent";
import { isEmpty } from "../../../../utils/script";
import { ICollection } from "../../../../redux/slices/home/home.type";

interface IProps {
  collectionsData: ICollection[];
}

export const CategoriesView = (props: IProps) => {
  const { collectionsData } = props;

  return (
    <Collections
      heading="COLLECTIONS"
      subHeading="Big Bang Deals On Our Favourite Collections!"
    >
      <IF condition={!isEmpty(collectionsData)}>
        {collectionsData?.map((item: ICollection, index: number) => (
          <LazyLoad
            tag="div"
            key={index}
            className="Grid__Cell 1/1--phone 1/2--tablet-and-up 1/3--lap-and-up"
          >
            <ImageView collectionItem={item} />
          </LazyLoad>
        ))}
      </IF>
    </Collections>
  );
};
