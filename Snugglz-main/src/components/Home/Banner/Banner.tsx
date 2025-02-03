import "./Banner.scss";
import BannerDesk from "../../../assets/images/banner/banner_desk.png";

export const Banner = () => {
  return (
    <figure>
      <div className="Slideshow Slideshow--fullscreen">
        <img
          className="Image--contrast hidden-phone"
          src={BannerDesk}
          alt="All About Classic"
          title="All About Classic"
          data-element="desktop_image "
        />
        <img
          className="Image--contrast hidden-tablet-and-up"
          src={BannerDesk}
          alt="All About Classic"
          title="All About Classic"
          data-element="mobile_image"
        />
      </div>
    </figure>
  );
};
