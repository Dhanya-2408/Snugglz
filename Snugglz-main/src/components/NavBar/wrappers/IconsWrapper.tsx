import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import AccountIcon from "../../../assets/icons/Account.icon";
import {
  CartDesktopIcon,
  CartMobileIcon,
} from "../../../assets/icons/Cart.icon";
import FavouriteIcon from "../../../assets/icons/Fav.icon";
import {
  SearchDesktopIcon,
  SearchMobileIcon,
} from "../../../assets/icons/Search.icon";
import { selectCartCount } from "../../../redux/slices/cart/cart.selector";
import { useAppSelector } from "../../../redux/store";
import { IF } from "../../../ui_kits/IF";
import { isEmpty } from "../../../utils/script";

interface IProps {
  handleClick: () => void;
}

const IconsWrapper: FC<IProps> = (props: IProps) => {
  const { handleClick } = props;
  const cartItemLength = useAppSelector(selectCartCount);

  return (
    <div className="Header__FlexItem Header__FlexItem--fill">
      <NavLink
        to="wishlist"
        className="Header__Icon Icon-Wrapper--clickable hidden-phone"
      >
        <FavouriteIcon />
      </NavLink>

      <NavLink
        to="/account"
        className="Header__Icon Icon-Wrapper--clickable hidden-phone"
      >
        <AccountIcon />
      </NavLink>
      <div
        className="Header__Icon Icon-Wrapper--clickable "
        onClick={handleClick}
      >
        <span className="hidden-tablet-and-up">
          <SearchMobileIcon />
        </span>
        <span className="hidden-phone">
          <SearchDesktopIcon />
        </span>
      </div>

      <NavLink to="/cart" className="Header__Icon  Icon-Wrapper--clickable ">
        <span className="hidden-tablet-and-up">
          <CartMobileIcon />
        </span>
        <span className="hidden-phone">
          <CartDesktopIcon />
        </span>
        <IF condition={!isEmpty(cartItemLength)}>
          <span className="Header__CartDot is-visible"></span>
        </IF>
      </NavLink>
    </div>
  );
};

export default IconsWrapper;
