import {
  ProfileAccouctNav,
  ProfileInfoNav,
} from "../../../mockData/ProfileData";
import { ProfileContent } from "./ProfileContent";
import "./Style.scss";

export const ProfileHome = () => {
  return (
    <section className="Profile_Home">
      <div className="Grid">
        {ProfileInfoNav.map((item) => (
          <div className="Grid__Cell 1/2--desk 1/2--tablet-and-up">
            <ProfileContent data={item} />
          </div>
        ))}
      </div>
      <div className="Grid">
        {ProfileAccouctNav.map((item) => (
          <div className="Grid__Cell  1/4--desk 1/2--tablet-and-up Grid__TextCell">
            <ProfileContent data={item} />
          </div>
        ))}
      </div>
    </section>
  );
};
