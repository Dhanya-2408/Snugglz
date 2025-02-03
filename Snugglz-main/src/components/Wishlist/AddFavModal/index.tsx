import { FC } from "react";
import { OnclickEvent } from "../../../models/types";
import { addItemToCart } from "../../../redux/slices/cart/cart.slice";
import { IProduct } from "../../../redux/slices/collection/collection.type";
import { productVariants } from "../../../redux/slices/product/product.selector";
import { setProductVariants } from "../../../redux/slices/product/product.slice";
import { IProductVariants } from "../../../redux/slices/product/product.type";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import { TextButton } from "../../../ui_kits/Buttons/TextButton/TextButton.component";
import { Form, FormElement, FormSelectInput } from "../../../ui_kits/Form";
import { IF } from "../../../ui_kits/IF";
import { Modal } from "../../../ui_kits/Modal/Modal";
import { pick } from "../../../utils/generics";
import { isEmpty } from "../../../utils/script";

interface IProps {
  product: IProduct;
  isHidden: boolean;
  toggleFavOpen: () => void;
}

export const AddFavModal: FC<IProps> = (props: IProps) => {
  const { product, toggleFavOpen, isHidden } = props;
  const { productSize } = product;
  const dispatch = useAppDispatch();

  const handleSizeInputChange = (name: string, option: string) => {
    console.log(name, option);

    const variants = pick(product, ["id", "name", "price", "image", "color"]);

    dispatch(
      setProductVariants({
        ...variants,
        quantity: 1,
        size: option || "",
      })
    );

    // dispatch(
    //   addItemToCart({
    //     ...variants,
    //     quantity: 1,
    //     size: option || "",
    //   })
    // );
  };

  const selectedProductVariants =
    useAppSelector(productVariants) || ({} as IProductVariants);

  const addToCart = (e: OnclickEvent) => {
    e.preventDefault();
    dispatch(addItemToCart(selectedProductVariants));
  };

  return (
    <Modal title="Add to Cart" isHidden={isHidden} onClose={toggleFavOpen}>
      <Form>
        <FormElement>
          <IF condition={!isEmpty(productSize)}>
            <FormSelectInput
              name="Size"
              options={productSize?.map((product) => product.size) || []}
              onSelect={handleSizeInputChange}
            />
          </IF>
        </FormElement>
        <TextButton isFull onClick={addToCart}>
          ADD CART
        </TextButton>
      </Form>
    </Modal>
  );
};
