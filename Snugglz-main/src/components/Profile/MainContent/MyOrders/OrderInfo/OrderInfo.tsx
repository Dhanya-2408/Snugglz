
import { OrderCards } from "./OrderCards/OrderCards";
import { Alert } from "../../../../../ui_kits/Alert/Alert";
import { PageContent } from "../../../../../ui_kits/global/PageContent.styles";
import "./OrderInfo.scss";

const Amounts = {
  "Order Number": "Obc591f",
  "Ordered On": "12 May' 22",
  "Order Status": "Cancelled",
  "Total Items": 2,
  "Payment Method": "Cash on Delivery",
  "Payment Status": "Pending",
};

const OrderSummary = () => {
  return (
    <div className="OrderSummary Grid u-h5">
      {Object.entries(Amounts).map(([key, value]) => (
        <div className="Grid__Cell 1/2--phone 1/3--tablet-and-up">
          <div className="OrderSummary__Unit">
            <div className="OrderSummary__subtitle Heading">{key}</div>
            <div className="Text--subdued">{value}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

const DeliveryInfo = () => {
  return (
    <div className="Address__Summary Heading u-h6">
      <h4>Delivery Address</h4>
      <div className="Address-nameNumber u-h5">
        <span>Dhanya V</span>
        <div className="Address-verticalDivider"></div>
        <span> 9498422064</span>
      </div>
      <span className="Rte Text--subdued">
        4,364 I Bharath Nager, Nagercoil,Chennai, TamilNadu - 629001
      </span>
    </div>
  );
};

const TrackAlert = () => {
  return (
    <Alert isLarge isSuccess classname="u-h6">
      Your order has been sent. Track the shipment with number 1091130292410 or
      by clicking here: &nbsp;
      <a
        href="https://shiprocket.co/tracking/1091130292410"
        className="Link Link--underlineNative"
        target="/_blank"
      >
        TrackOrder
      </a>
    </Alert>
  );
};

export const OrderInfo = () => {
  return (
    <PageContent spacingTight>
      <TrackAlert />
      <OrderSummary />
      <DeliveryInfo />
      <OrderCards />
      {/* <PriceOverview /> */}
    </PageContent>
  );
};
