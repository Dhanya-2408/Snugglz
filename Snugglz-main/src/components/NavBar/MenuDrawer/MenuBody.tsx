import { FC, Fragment } from "react";
import { NavLink } from "react-router-dom";
import { categories } from "../../../redux/slices/nav/nav.selector";
import {
  IMainCategory,
  ISubCategory,
} from "../../../redux/slices/nav/nav.type";
import { useAppSelector } from "../../../redux/store";
import { Accordian } from "../../../ui_kits/Accordian/Accordian";
import { encodeUrl } from "../../../utils/textHandler";

interface IProps {
  handleClick: () => void;
}

export const MenuBody: FC<IProps> = (props: IProps) => {
  const categoriesData = useAppSelector(categories);
  const { handleClick } = props;

  return (
    <nav className="SidebarMenu__Nav SidebarMenu__Nav--primary">
      {categoriesData.data?.map((item: IMainCategory) => {
        return (
          <Accordian
            title={item.name}
            key={item.name}
            child={
              <>
                {item.subcategory.map((submenu: ISubCategory) => (
                  <div className="Collapsible" key={submenu.subcategoryname}>
                    <NavLink
                      to={`/collections/${item.name}?sc=${encodeUrl(
                        submenu.name
                      )}`}
                      className="Collapsible__Button Heading Text--subdued Link Link--primary u-h7"
                      onClick={handleClick}
                    >
                      {submenu.name}
                    </NavLink>
                  </div>
                ))}
              </>
            }
          />
        );
      })}
    </nav>
  );
};
