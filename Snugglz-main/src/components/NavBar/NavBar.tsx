import { forwardRef } from "react";
import classNames from "classnames";
import { useLocation } from "react-router-dom";
import NavWrapper from "./wrappers/NavWrapper";
import LogoWrapper from "./wrappers/LogoWrapper";
import {
  setMenuDrawHidden,
  setSearchDrawHidden,
  setSearchText,
} from "../../redux/slices/nav/nav.slice";
import {
  isMenuDrawHidden,
  isSearchDrawHidden,
} from "../../redux/slices/nav/nav.selector";
import IconsWrapper from "./wrappers/IconsWrapper";
import { MenuDrawer } from "./MenuDrawer/MenuDrawer";
import { useSetting } from "../../contexts/SettingContext";
import useScrollPosition from "../../hooks/useScrollPosition";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import "./NavBar.scss";

export const NavBar = forwardRef<HTMLDivElement>((_, ref) => {
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const path = pathname.split("/").filter(Boolean)[0];
  const { toggleOverlay } = useSetting();
  const { scrollPosition } = useScrollPosition();

  const isSearchHidden = useAppSelector(isSearchDrawHidden);
  const isMenuHidden = useAppSelector(isMenuDrawHidden);

  const handleMenuIconClick = () => {
    toggleOverlay();
    dispatch(setMenuDrawHidden(!isMenuHidden));
  };

  const handleSearchIconClick = () => {
    toggleOverlay();
    dispatch(setSearchText(undefined));
    dispatch(setSearchDrawHidden(!isSearchHidden));
  };

  const stickyPath = ["home", "product"];

  return (
    <div
      className={classNames("Snugglz__Header--Section", {
        sticky: stickyPath.includes(path),
      })}
      ref={ref}
    >
      {/* <SearchDrawer
        visibleSearch={isSearchHidden}
        handleClick={handleSearchIconClick}
      /> */}
      <MenuDrawer
        visibleMenu={isMenuHidden}
        handleClick={handleMenuIconClick}
      />
      <header
        className={classNames("Header", {
          "Header--transparent": !scrollPosition,
        })}
      >
        <div className="Header__Wrapper">
          <NavWrapper handleClick={handleMenuIconClick} />
          <LogoWrapper />
          <IconsWrapper handleClick={handleSearchIconClick} />
        </div>
      </header>
    </div>
  );
});
