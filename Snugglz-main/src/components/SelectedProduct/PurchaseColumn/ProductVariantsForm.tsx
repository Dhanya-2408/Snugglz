import React, { ReactNode } from "react";
import { Form } from "../../../ui_kits/Form";
import {
  IProduct,
  IProductSize,
} from "../../../redux/slices/collection/collection.type";
import { RadioSwatch } from "../../../ui_kits/RadioSwatch/RadioSwatch";
import { QuantitySelector } from "../../../ui_kits/QuantitySelector/QuantitySelector";
import { TextButton } from "../../../ui_kits/Buttons/TextButton/TextButton.component";
import { isEmpty } from "../../../utils/script";
import { IF } from "../../../ui_kits/IF";
import { useAppSelector } from "../../../redux/store";
import { productVariants } from "../../../redux/slices/product/product.selector";
import { useDispatch } from "react-redux";
import { setProductVariants } from "../../../redux/slices/product/product.slice";
import { IProductVariants } from "../../../redux/slices/product/product.type";
import { addItemToCart } from "../../../redux/slices/cart/cart.slice";
import { OnclickEvent } from "../../../models/types";
import { OptionsWrapper } from "./OptionsWrapper";

interface IProps {
  product: IProduct;
  children: ReactNode;
  toggleCartDraw: () => void;
}

export const ProductVariantsForm: React.FC<IProps> = (props: IProps) => {
  const { product, children, toggleCartDraw } = props;
  const { productSize } = product;
  const dispatch = useDispatch();
  // const groupedList = useAppSelector(groupedProducts) || [];
  const selectedProductVariants =
    useAppSelector(productVariants) || ({} as IProductVariants);
  // const navigate = useNavigate();

  const handleSizeInput = (item: IProductSize) => {
    dispatch(
      setProductVariants({
        ...selectedProductVariants,
        size: item.size,
      })
    );
  };

  const handleQuantityInput = (item: number) => {
    dispatch(
      setProductVariants({
        ...selectedProductVariants,
        quantity: item,
      })
    );
  };

  const handleAddTocart = (e: OnclickEvent) => {
    e.preventDefault();
    dispatch(addItemToCart(selectedProductVariants));
    toggleCartDraw();
  };

  // const handleColorChange = (item: any) => {
  //   navigate(`/product/${encodeUrl(item.name)}/${item.productid}`);
  // };

  return (
    <Form classname="ProductForm">
      <div className="ProductForm__Variants">
        {children}
        <IF condition={!isEmpty(productSize)}>
          <OptionsWrapper name="Size">
            <RadioSwatch
              name="productSize"
              productSizeArray={(productSize as IProductSize[]) || []}
              onChange={handleSizeInput}
              valueKey="size"
              initialSelectedItem={(productSize?.[0] || []) as IProductSize}
            />
          </OptionsWrapper>
        </IF>
        {/* <IF condition={!isEmpty(groupedList)}>
          <OptionsWrapper name="Color">
            <ImageSwatch
              title="productColor"
              options={groupedList.map((item: IProduct) => {
                return pick(item, ["productid", "name", "image"]);
              })}
              onChange={handleColorChange}
            />
          </OptionsWrapper>
        </IF> */}
        <OptionsWrapper name="Quantity">
          <QuantitySelector
            isLarge
            handleIncrement={handleQuantityInput}
            handleDecrement={handleQuantityInput}
          />
        </OptionsWrapper>
      </div>
      <TextButton isFull onClick={handleAddTocart}>
        Add To Cart
      </TextButton>
    </Form>
  );
};
