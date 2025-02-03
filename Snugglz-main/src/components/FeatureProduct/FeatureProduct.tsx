import { FC } from "react";
import {
  BUTTON_TYPE_CLASSES,
  TextButton,
} from "../../ui_kits/Buttons/TextButton/TextButton.component";
import { IF } from "../../ui_kits/IF";
import "./FeatureProduct.scss";

interface IProps {
  url: string;
  title: string;
  price: number;
  isVisibleSaleLabel?: boolean;
}

export const FeatureProduct: FC<IProps> = (props: IProps) => {
  const { url, title, price, isVisibleSaleLabel = false } = props;

  return (
    <div className="FeatureProduct_Wrapper">
      <div className="FeatureProduct_Image">
        <img src={url} alt="products" />
      </div>
      <div className="FeatureProduct_Overlay">
        <div className="FeatureProduct_Info">
          <div className="FeatureProduct_Details Heading">
            <h4>{title}</h4>
            <span>Rs. {price}</span>
          </div>
          <div className="FeatureProduct_Quickshop">
            <TextButton buttonType={BUTTON_TYPE_CLASSES.transparent}>
              Quick View
            </TextButton>
          </div>
        </div>
      </div>
      <IF condition={isVisibleSaleLabel}>
        <div className="FeatureProduct_Holder">
          <h6 className="FeatureProduct_Sale Heading">SALE</h6>
        </div>
      </IF>
    </div>
  );
};
