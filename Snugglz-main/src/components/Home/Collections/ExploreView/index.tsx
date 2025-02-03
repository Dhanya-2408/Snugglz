import { ImageView } from "./ImageView";
import { Collections } from "../Collections";
import LazyLoad from "../../../LazyComponent";
import { IF } from "../../../../ui_kits/IF";
import { isEmpty } from "../../../../utils/script";
import { ICollection } from "../../../../redux/slices/home/home.type";

interface IProps {
  exploreData: ICollection[] | null;
}

export const ExploreView = (props: IProps) => {
  const { exploreData = [] } = props;

  const dataSet1 = exploreData?.slice(0, 1);
  const dataSet2 = exploreData?.slice(1, 5);

  const dataset = {
    dataSet1,
    dataSet2,
  };

  return (
    <Collections
      heading="Explore"
      subHeading="Ready to take your style to the next level?"
      isNarrow
    >
      <IF condition={!isEmpty(exploreData)}>
        {Object.entries(dataset).map(([key, value]) => {
          return (
            <LazyLoad
              tag="div"
              className="Grid__Cell 1/2--tablet-and-up"
              style={{ padding: 0 }}
              key={key}
            >
              {value?.map((item: ICollection, index: number) => (
                <div
                  key={item.id}
                  className={`Grid__Cell ${
                    key === "dataSet1" ? "" : "1/2--phone 1/2--tablet-and-up"
                  }`}
                >
                  <ImageView collectionItem={item} />
                </div>
              ))}
            </LazyLoad>
          );
        })}
      </IF>
    </Collections>
  );
};
