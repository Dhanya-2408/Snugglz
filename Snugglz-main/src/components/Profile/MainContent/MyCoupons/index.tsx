import "./Style.scss";

const data = {
  "Minimum purchase": "Rs. 999",
  Code: "PREMIUM1KOFF",
  Expiry: "OCT 31 2022",
};

export const MyCoupons = () => {
  return (
    <div>
      {Array.from(Array(10).keys()).map((index) => (
        <div className="coupon-card" key={index}>
          <div className="coupon-off-component u-h5">
            <div>40%</div>
            <div>OFF</div>
          </div>
          <div className="coupon-info u-h6">
            {Object.entries(data).map(([key, value]) => (
              <div className="Text--subdued" key={key}>
                {key} : <span className="Heading">{value}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
