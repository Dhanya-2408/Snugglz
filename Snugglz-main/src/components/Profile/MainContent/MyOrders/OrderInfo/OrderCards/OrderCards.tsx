import React from "react";
import "./OrderCards.scss";

export const OrderCards = () => {
  const OrderCard = () => {
    return (
      <div className="Order__Card">
        <div className="Card__Img">
          <img
            src="https://cdn.shopify.com/s/files/1/0250/7571/2047/products/image_a473f5a4-ccc3-48c4-95e9-3de3da8e9bfc.jpg?v=1625824457"
            alt="product"
          />
        </div>
        <div className="Card__Desc u-h6 Heading">
          <div className="Sub__Title">Elizba Rhinestone Bustier </div>
          <div className="Sub__Title">Black / XS</div>
          <div className="Sub__Title">1 x ₹ 2299.00</div>
        </div>
      </div>
    );
  };

  return (
    <div className="Order__Cards">
      <OrderCard />
      <OrderCard />
      <OrderCard />
    </div>
  );
};
