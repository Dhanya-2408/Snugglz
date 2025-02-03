import { FC, useState } from "react";
import classNames from "classnames";
import { IFooterLinks } from "./data/data";

interface IProps {
  links: IFooterLinks;
}

export const FooterLinks: FC<IProps> = (props: IProps) => {
  const { links } = props;
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div
      className={classNames("Footer__Block Footer__Block--links", {
        collapsed,
      })}
    >
      <h5
        className="Footer__Title Heading"
        onClick={() => setCollapsed(!collapsed)}
      >
        {links.title}
      </h5>
      <ul className="Linklist u-h7">
        {links.items.map((submenu) => (
          <li className="Linklist__Item" key={submenu.head}>
            <a href={`/page/${submenu.url}`} className="Link Link--secondary">
              {submenu.head}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
