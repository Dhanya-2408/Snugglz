import { Collections } from "../Collections";
import { IF } from "../../../../ui_kits/IF";
import { isEmpty } from "../../../../utils/script";
import { FeatureProduct } from "../../../FeatureProduct/FeatureProduct";
import { IProduct } from "../../../../redux/slices/collection/collection.type";

interface IProps {
  featureData: IProduct[] | undefined;
}

export const FeateredCollection = (props: IProps) => {
  const { featureData = [] } = props;

  const slicedFeaturedData = featureData.slice(0, 8);

  return (
    <Collections heading="New Featured Items" isNarrow>
      <IF condition={!isEmpty(featureData)}>
        {slicedFeaturedData.map((pdt: IProduct) => (
          <div
            className="Grid__Cell 1/1--phone 1/2--tablet-and-up 1/4--desk"
            key={pdt.id}
          >
            <FeatureProduct
              url={pdt.image}
              title={pdt.name}
              price={pdt.price}
            />
          </div>
        ))}
      </IF>
    </Collections>
  );
};
