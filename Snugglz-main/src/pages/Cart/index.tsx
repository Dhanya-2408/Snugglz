import CartFooter from "../../components/CartPage/CartFooter/CartFooter";
import CartItemList from "../../components/CartPage/CartItemList/CartItemList";
import { ShippingEstimator } from "../../components/CartPage/ShippingEstimator";
import { BreadCrumb } from "../../ui_kits/BreadCrumb";
import { Container } from "../../ui_kits/global/Container.styles";
import { PageHeader } from "../../ui_kits/global/PageContent.styles";

const Cart = () => {
  return (
    <>
      <BreadCrumb path={["Shopping Cart"]} />
      <Container isNarrow>
        <PageHeader>
          <h3 className="Heading Text--alignCenter">My Cart</h3>
        </PageHeader>
        <form action="/cart" className="Cart Cart--expanded" noValidate>
          <CartItemList />
          <CartFooter />
        </form>
        <ShippingEstimator />
      </Container>
    </>
  );
};

export default Cart;
