import Slider from "react-slick";
import { AddFavIcon } from "../../../assets/icons/AddFav.icon";
import {
  IProduct,
  IProductImage,
} from "../../../redux/slices/collection/collection.type";
import { AddToFav } from "../AddToFav";
import "./ImageViewer.scss";

interface IProps {
  product: IProduct;
}

export const ImageViewer = (props: IProps) => {
  const { productImages } = props.product;

  const settingsMain = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="Image_Wrapper">
      <Slider {...settingsMain}>
        {productImages?.map((slide: IProductImage) => (
          <div className="ProductImage__Grid" key={slide.id}>
            <div className="ProductImage__Grid--Container">
              <div
                className="ProductImage__Grid--Image"
                style={{ backgroundImage: `url(${slide.image})` }}
              ></div>
              <div className="ProductImage__Grid--SkeletonLoader"></div>
            </div>
          </div>
        ))}
      </Slider>
      <AddToFav />
    </div>
  );
};
