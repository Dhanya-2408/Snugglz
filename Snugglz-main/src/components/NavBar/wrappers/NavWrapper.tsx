import { FC } from "react";
import { MenuDesktopIcon, MenuMobileIcon } from "../../../assets/icons/Menu";
import { categories } from "../../../redux/slices/nav/nav.selector";
import { IMainCategory } from "../../../redux/slices/nav/nav.type";
import { useAppSelector } from "../../../redux/store";
import NavItem from "./NavItem";

interface IProps {
  handleClick: () => void;
}

const NavWrapper: FC<IProps> = (props: IProps) => {
  const { handleClick } = props;
  const categoriesData = useAppSelector(categories);

  return (
    <div className="Header__FlexItem Header__FlexItem--fill">
      <button
        className="Header__Icon Icon-Wrapper--clickable hidden-desk"
        onClick={handleClick}
      >
        <span className="hidden-tablet-and-up">
          <MenuMobileIcon />
        </span>
        <span className="hidden-phone">
          <MenuDesktopIcon />
        </span>
      </button>
      <nav className="Header__MainNav hidden-pocket hidden-lap">
        <ul className="HorizontalList HorizontalList--spacingExtraLoose">
          {categoriesData.data?.map((item: IMainCategory) => {
            return <NavItem item={item} key={item.name} />;
          })}
        </ul>
      </nav>
    </div>
  );
};

export default NavWrapper;
