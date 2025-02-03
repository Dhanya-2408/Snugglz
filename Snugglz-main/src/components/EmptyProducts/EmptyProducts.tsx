import EmptyProduct from "../../assets/images/EmptyProduct.svg";
import { OnclickEvent } from "../../models/types";
import { TextButton } from "../../ui_kits/Buttons/TextButton/TextButton.component";
import "./EmptyProducts.scss";

interface IProps {
  handleOnClick: (e: OnclickEvent) => void;
}

export const EmptyProducts = (props: IProps) => {
  const { handleOnClick } = props;

  return (
    <div className="productsNotFoundCard-wrapper">
      <img
        src={EmptyProduct}
        alt="products-not-found"
        className="productsNotFoundCard-image"
      />
      <TextButton
        isSmall
        className="productsNotFoundCard-button"
        onClick={handleOnClick}
      >
        Reset Filters
      </TextButton>
    </div>
  );
};
