import { ImageWrapper } from "../../../../ui_kits/ImageWrapper/ImageWrapper";
import LazyLoad from "../../../LazyComponent";
import { Collections } from "../Collections";
import { ShopFeature, ShopFeaturesData } from "./data";

export const ShopFeatures = () => {
  return (
    <Collections isNarrow>
      {ShopFeaturesData.map((item: ShopFeature) => (
        <LazyLoad
          tag="div"
          key={item.id}
          className="Grid__Cell  1/3--tablet-and-up"
        >
          <div className="ShopFeature Text--alignCenter Heading">
            <div className="CollectionItem__ImageWrapper">
              <ImageWrapper
                src={item.img}
                alt={item.id}
                classes="CollectionItem__Image Image--zoomOut"
              />
            </div>

            <h5>{item.title}</h5>
            <p className="u-h6">{item.textContent}</p>
          </div>
        </LazyLoad>
      ))}
    </Collections>
  );
};
