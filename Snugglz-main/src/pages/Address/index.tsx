import { AddressContainer } from "../../components/AddressContainer/AddressContainer";
import Minicart from "../../components/Minicart/Minicart";
import "./Style.scss";

const Address = () => {
  return (
    <div className="PageLayout">
      <div className="PageLayout--Primary">
        <AddressContainer />
      </div>
      <div className="PageLayout--Secondary">
        <Minicart />
      </div>
    </div>
  );
};

export default Address;
