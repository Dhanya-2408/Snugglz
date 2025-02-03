import { FC, ReactElement, useRef } from "react";
import { NavLink } from "react-router-dom";
import classnames from "classnames";
import {
  IMainCategory,
  ISubCategory,
} from "../../../redux/slices/nav/nav.type";
import useHover from "../../../hooks/useHover";
import { encodeUrl } from "../../../utils/textHandler";
import { IF } from "../../../ui_kits/IF";

interface IProps {
  item: IMainCategory;
}

const NavItem: FC<IProps> = (props: IProps): ReactElement => {
  const { item } = props;
  const hoverRef = useRef(null);
  const isShown = useHover(hoverRef);

  return (
    <li
      className={classnames("HorizontalList__Item u-h7", {
        "is-expanded": isShown,
        "is-active": isShown,
      })}
      ref={hoverRef}
    >
      <NavLink to={`/collections/${item.name}`} className="Heading">
        {item.name}
        <IF condition={item.subcategory.length < 1}>
          <span className="Header__LinkSpacer"> {item.name}</span>
        </IF>
      </NavLink>
      <div className="DropdownMenu u-h7" aria-hidden={!isShown}>
        <ul className="Linklist">
          {item.subcategory.map((submenu: ISubCategory) => (
            <li className="Linklist__Item" key={submenu.name}>
              <NavLink
                to={`/collections/${item.name}?sc=${encodeUrl(submenu.name)}`}
                className="Link Link--secondary"
              >
                {submenu.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
};

export default NavItem;
