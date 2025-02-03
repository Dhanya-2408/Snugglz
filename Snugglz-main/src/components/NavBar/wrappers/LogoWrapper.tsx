import { NavLink } from "react-router-dom";
import Logo from "../../../assets/images/logo.svg";

const LogoWrapper = () => {
  return (
    <div className="Header__FlexItem">
      <div className="Header__Logo">
        <NavLink to="/" className="Header__LogoLink">
          <img
            className="Header__LogoImage"
            src={Logo}
            width="155"
            style={{ height: "61px" }}
            alt="Renderer"
          />
        </NavLink>
      </div>
    </div>
  );
};

export default LogoWrapper;
