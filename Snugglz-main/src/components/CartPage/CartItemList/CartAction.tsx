import RemoveIcon from "../../../assets/icons/Remove.icon";
import {
  decrementCartItemQuantity,
  incrementCartItemQuantity,
  removeItemFromCart,
} from "../../../redux/slices/cart/cart.slice";
import { ICartItem } from "../../../redux/slices/cart/cart.type";
import { useAppDispatch } from "../../../redux/store";
import { QuantitySelector } from "../../../ui_kits/QuantitySelector/QuantitySelector";

interface IProps {
  cartItem: ICartItem;
}

export const CartAction = (props: IProps) => {
  const { cartItem } = props;

  const dispatch = useAppDispatch();

  const handleDeleteCartItem = () => {
    dispatch(removeItemFromCart(cartItem));
  };

  const handleIncrement = () => {
    dispatch(incrementCartItemQuantity(cartItem));
  };

  const handleDecrement = () => {
    dispatch(decrementCartItemQuantity(cartItem));
  };

  return (
    <div
      className="CartItem__Actions Heading Text--subdued"
      style={{ textAlign: "center" }}
    >
      <div className="CartItem__QuantitySelector">
        <QuantitySelector
          defaultValue={cartItem.quantity}
          handleIncrement={handleIncrement}
          handleDecrement={handleDecrement}
        />
      </div>
      <div
        className="CartItem__Remove Link Link--underline"
        onClick={handleDeleteCartItem}
      >
        <RemoveIcon />
      </div>
    </div>
  );
};
