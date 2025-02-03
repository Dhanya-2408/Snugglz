import classNames from "classnames";
import { galleryData, IGalleryData } from "../../../../mockData/galleryData";
import {
  BUTTON_TYPE_CLASSES,
  TextButton,
} from "../../../../ui_kits/Buttons/TextButton/TextButton.component";
import { PageWidth } from "../../../../ui_kits/global/Container.styles";
import { IF } from "../../../../ui_kits/IF";
import { SectionWrapper } from "../../../../ui_kits/Sections/SectionWrapper/SectionWrapper";
import "./Style.scss";

export const PhotoGallery = () => {
  return (
    <SectionWrapper isbordered>
      <PageWidth isExtraNarrow>
        <div className="gallery-container-grid">
          {galleryData.map((item: IGalleryData, index: number) => (
            <div
              key={index}
              className={classNames(`grid-block block-num-${index + 1}`, {
                "gallery-img-block": !item.isTextBlock,
                "gallery-text-block": item.isTextBlock,
              })}
            >
              <IF condition={item.isTextBlock !== true}>
                <div className="gallery-overlay"></div>
                <img
                  src={item.url}
                  loading="lazy"
                  alt={item.title}
                  width="700"
                  height="1014"
                  className="gallery-img"
                />
                <div className="gallery-overlay-content">
                  <h2 className="gallery-img-title">{item.title}</h2>
                  <TextButton buttonType={BUTTON_TYPE_CLASSES.overlay}>
                    View Style
                  </TextButton>
                </div>
              </IF>
              <IF condition={item.isTextBlock === true}>
                <h1 className="gallery-text-heading">Unisex - Made for all</h1>
                <p className="gallery-text-para u-h4">
                  Our footwear are crafted for everyone! We follow a universal
                  design philosophy so feel free to buy one for yourself and one
                  for your friends, family or significant other. Because here,
                  gender is no bar!
                </p>
              </IF>
            </div>
          ))}
        </div>
      </PageWidth>
    </SectionWrapper>
  );
};
