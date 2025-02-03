import { FC } from "react";
import { NavLink } from "react-router-dom";
import { ImageWrapper } from "../../../../ui_kits/ImageWrapper/ImageWrapper";
import { encodeUrl } from "../../../../utils/textHandler";
import { IHotDeal } from "./data";

interface IProps {
  item: IHotDeal;
}

export const ImageView: FC<IProps> = (props: IProps) => {
  const { item } = props;

  return (
    <div className="CollectionItem__Wrapper">
      <div className="CollectionItem__ImageWrapper">
        <ImageWrapper
          src={item.imageUrl}
          alt={item.title}
          classes="CollectionItem__Image Image--zoomOut"
        />
      </div>
      <NavLink
        to={`/collections?discount=${encodeUrl(item.keyName)}`}
        className="CollectionItem__Content CollectionItem__Content--center Heading"
      >
        <h5 className="UnderLined__Text">
          {item.keyName} | {item.title}
        </h5>
      </NavLink>
    </div>
  );
};
