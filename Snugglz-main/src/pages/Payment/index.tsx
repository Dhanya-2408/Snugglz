import Minicart from "../../components/Minicart/Minicart";
import { SelectedAddress } from "../../components/Payment/SelectedAddress";

export const Payment = () => {
  return (
    <div className="PageLayout">
      <div className="PageLayout--Primary">
        <SelectedAddress />
      </div>
      <div className="PageLayout--Secondary">
        <Minicart />
      </div>
    </div>
  );
};
