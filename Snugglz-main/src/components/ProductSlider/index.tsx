import { FC } from "react";
import Slider from "react-slick";
import { PageWidth } from "../../ui_kits/global/Container.styles";
import { ArrowNextIcon, ArrowPrevIcon } from "../../assets/icons/Arrow.icon";
import { IconButton } from "../../ui_kits/Buttons/IconButton/IconButton.component";
import { SectionHeader } from "../../ui_kits/Sections/SectionHeader/SectionHeader";
import { SectionWrapper } from "../../ui_kits/Sections/SectionWrapper/SectionWrapper";

import "./Style.scss";
import { IProduct } from "../../redux/slices/collection/collection.type";
import { IF } from "../../ui_kits/IF";
import { ProductItem } from "../ProductItem/ProductItem";

interface IProps {
  title: string;
  subHead?: string;
  sliderData?: IProduct[];
}

export const ProductSlider: FC<IProps> = (props: IProps) => {
  const { title, subHead, sliderData = [] } = props;

  const settings = {
    speed: 500,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: (
      <div>
        <IconButton isSmall>
          <ArrowNextIcon />
        </IconButton>
      </div>
    ),
    prevArrow: (
      <div>
        <IconButton isSmall>
          <ArrowPrevIcon />
        </IconButton>
      </div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <SectionWrapper isbordered>
      <SectionHeader heading={title} subHeading={subHead} />
      <PageWidth>
        <div className="Grid ProductList__Slider">
          <IF condition={sliderData.length > 0}>
            <Slider {...settings}>
              {sliderData.map((pdt: IProduct) => (
                <div className="Grid__Cell" key={pdt.id}>
                  <ProductItem product={pdt} isVisibleFav={false} />
                </div>
              ))}
            </Slider>
          </IF>
        </div>
      </PageWidth>
    </SectionWrapper>
  );
};
