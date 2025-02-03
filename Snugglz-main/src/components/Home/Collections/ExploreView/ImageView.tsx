import { FC } from "react";
import { NavLink } from "react-router-dom";
import { encodeUrl } from "../../../../utils/textHandler";
import { ICollection } from "../../../../redux/slices/home/home.type";
import { ImageWrapper } from "../../../../ui_kits/ImageWrapper/ImageWrapper";

interface IProps {
  collectionItem: ICollection;
}

export const ImageView: FC<IProps> = (props: IProps) => {
  const { collectionItem } = props;

  return (
    <div className="CollectionItem__Wrapper">
      <div className="CollectionItem__ImageWrapper">
        <ImageWrapper
          src={collectionItem.url}
          alt={collectionItem.collection}
          classes="CollectionItem__Image  Image--contrast Image--zoomOut "
        />
      </div>
      <NavLink
        to={`/collections/WOMEN?collection=${encodeUrl(
          collectionItem.collection
        )}`}
        className="CollectionItem__Content Heading"
      >
        <h4 className="UnderLined__Text">{collectionItem.collection}</h4>
      </NavLink>
    </div>
  );
};
