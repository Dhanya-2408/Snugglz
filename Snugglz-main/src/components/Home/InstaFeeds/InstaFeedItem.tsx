import { FC } from "react";
import LikeIcon from "../../../assets/icons/Like.icon";
import { IProduct } from "../../../redux/slices/collection/collection.type";

interface IProps {
  instaFeedItem: IProduct;
}

export const InstaFeedItem: FC<IProps> = (props: IProps) => {
  const { instaFeedItem } = props;

  return (
    <div className="Grid__Cell 1/2--phone 1/4--tablet-and-up 1/4--desk">
      <div className="Instafeed__Wrapper">
        <img alt={instaFeedItem.name} src={instaFeedItem.image} />
        <div className="Instafeed__Overlay">
          <div className="Instafeed__Likes u-h5">
            <span>
              <LikeIcon />
            </span>
            49
          </div>
        </div>
      </div>
    </div>
  );
};
