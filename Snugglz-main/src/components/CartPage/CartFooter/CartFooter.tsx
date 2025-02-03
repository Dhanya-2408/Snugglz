import { useAppSelector } from "../../../redux/store";
import { selectCartTotal } from "../../../redux/slices/cart/cart.selector";
import { TextButton } from "../../../ui_kits/Buttons/TextButton/TextButton.component";
import { useNavigate } from "react-router-dom";
import { OnclickEvent } from "../../../models/types";
import "./CartFooter.scss";

export default function CartFooter() {
  const total = useAppSelector(selectCartTotal);
  const navigate = useNavigate();

  const handleCheckout = (e: OnclickEvent) => {
    e.preventDefault();
    navigate("/address");
  };

  return (
    <footer className="Cart__Footer">
      <div className="Cart__Recap">
        <p className="Heading u-h5">
          Total: <span data-money-convertible="">Rs.{total}</span>
        </p>
        <p className="Cart__Taxes Text--subdued">
          Shipping &amp; taxes calculated at checkout
        </p>
        <TextButton className="Cart__Checkout" onClick={handleCheckout}>
          Checkout
        </TextButton>
      </div>
    </footer>
  );
}
