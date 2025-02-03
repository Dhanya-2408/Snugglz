import { FC, ReactElement } from "react";
import "./Style.scss";

interface IProps {
  path: string[];
}

export const BreadCrumb: FC<IProps> = (props: IProps): ReactElement => {
  const { path } = props;

  return (
    <div className="Breadcrumb">
      <div className="Breadcrumb__Container">
        <ul className="Breadcrumb__List">
          <li className="Breadcrumb__ListItem">
            <a className="Link Link--primary" href="/">
              Home
            </a>
          </li>
          {path.map((x: string) => (
            <li className="Breadcrumb__ListItem" key={x}>
              {x}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
