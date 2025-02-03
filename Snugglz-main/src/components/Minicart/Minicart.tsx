import { useMemo } from "react";
import { selectCartTotal } from "../../redux/slices/cart/cart.selector";
import { useAppSelector } from "../../redux/store";
import CartItemList from "../CartPage/CartItemList/CartItemList";
import { PriceOverview } from "../PriceOverview/PriceOverview";
import "./Minicart.scss";

export default function Minicart() {
  const cartTotal = useAppSelector(selectCartTotal);

  const memoizedPriceOverview = useMemo(() => {
    return [
      {
        title: "Subtotal",
        price: `RS. ${cartTotal}`,
      },
      {
        title: "Shipping",
        subTitle: "(Free Shipping)",
        price: "RS. 0",
      },
      {
        title: "Tax",
        subTitle: "(IGST 18.0%)",
        price: "RS. 100",
      },
      {
        title: "GRAND TOTAL",
        price: `RS. ${cartTotal + 100}`,
      },
    ];
  }, [cartTotal]);

  return (
    <div className="checkout-cart-summary">
      <span className="title Heading u-h4">Order Summary</span>
      <div className="items-in-cart">
        <div className="minicart-items">
          <CartItemList />
        </div>
      </div>
      <PriceOverview priceOverview={memoizedPriceOverview} />
    </div>
  );
}
