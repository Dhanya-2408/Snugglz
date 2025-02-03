import { FC } from "react";
import {
  BUTTON_TYPE_CLASSES,
  TextButton,
} from "../../../../ui_kits/Buttons/TextButton/TextButton.component";
import { ImageWrapper } from "../../../../ui_kits/ImageWrapper/ImageWrapper";
import { ICollection } from "../../../../redux/slices/home/home.type";
import { OnclickEvent } from "../../../../models/types";
import { useNavigate } from "react-router-dom";
import { encodeUrl } from "../../../../utils/textHandler";

interface IProps {
  collectionItem: ICollection;
}

export const ImageView: FC<IProps> = (props: IProps) => {
  const { collectionItem } = props;
  const navigate = useNavigate();

  const handleOnclick = (e: OnclickEvent) => {
    e.preventDefault();
    navigate(
      `/collections/MEN?collection=${encodeUrl(collectionItem.collection)}`
    );
  };

  return (
    <div className="CollectionItem__Wrapper">
      <div className="CollectionItem__ImageWrapper">
        <ImageWrapper
          src={collectionItem.url}
          alt={collectionItem.collection}
          classes="CollectionItem__Image  Image--contrast Image--zoomOut "
        />
      </div>
      <div className="CollectionItem__Content Heading">
        <h2>{collectionItem.collection}</h2>
        <div className="u-h5">{collectionItem.collection}</div>
        <TextButton
          buttonType={BUTTON_TYPE_CLASSES.overlay}
          onClick={handleOnclick}
        >
          SHOP NOW
        </TextButton>
      </div>
    </div>
  );
};
