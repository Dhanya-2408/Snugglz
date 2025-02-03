import "./Style.scss";
import ProfileBannerImage from "../../../assets/images/profile/ProfileBanner.png";
import ProfileBannerMobImage from "../../../assets/images/profile/ProfileBannerMob.png";

export const ProfileBanner = () => {
  return (
    <div className="Profile_Banner">
      <img
        src={ProfileBannerImage}
        alt="ProfileBannerImage"
        className="hidden-phone"
      />
      <img
        src={ProfileBannerMobImage}
        alt="ProfileBannerImage"
        className="hidden-tablet-and-up"
      />
      <h2 className="Heading">Welcome Dhanya</h2>
      <div className="Profile_Banner--letters">
        <span className="Heading u-h3">D</span>
      </div>
    </div>
  );
};
