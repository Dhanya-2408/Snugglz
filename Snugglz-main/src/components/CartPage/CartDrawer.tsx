import CartFooter from "./CartFooter/CartFooter";
import CartItemList from "./CartItemList/CartItemList";
import { DrawerView } from "../../ui_kits/Drawer/Drawer.compenent";

interface IProps {
  isVisible: boolean;
  handleClose: () => void;
}

export const CartDrawer = (props: IProps) => {
  const { isVisible, handleClose } = props;

  return (
    <DrawerView
      body={<CartItemList />}
      footer={<CartFooter />}
      position="right"
      title="Cart"
      isHidden={isVisible}
      handleClose={handleClose}
      spacingTight
    />
  );
};

export default CartDrawer;
