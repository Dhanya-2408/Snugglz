import { Collections } from "../Collections";
import { FeatureProduct } from "../../../FeatureProduct/FeatureProduct";
import { IProduct } from "../../../../redux/slices/collection/collection.type";
import { IF } from "../../../../ui_kits/IF";
import { isEmpty } from "../../../../utils/script";

interface IProps {
  saleData: IProduct[] | undefined;
}

export const SaleItem = (props: IProps) => {
  const { saleData = [] } = props;

  return (
    <Collections heading="Sale item of the Week!!" isNarrow>
      <IF condition={!isEmpty(saleData)}>
        {saleData.map((pdt: IProduct) => (
          <div className="Grid__Cell  1/3--tablet-and-up" key={pdt.id}>
            <FeatureProduct
              url={pdt.image}
              title={pdt.name}
              price={pdt.price}
              isVisibleSaleLabel={true}
            />
          </div>
        ))}
      </IF>
    </Collections>
  );
};
