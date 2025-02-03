import React from "react";
import { IPriceOverview } from "../../models/types";
import { IF } from "../../ui_kits/IF";
import { isEmpty } from "../../utils/script";
import "./PriceOverview.scss";

interface IProps {
  priceOverview: IPriceOverview[];
}

export const PriceOverview = (props: IProps) => {
  const { priceOverview } = props;

  return (
    <div className="PricingOverview  u-h7 Heading">
      <h4>Price Details</h4>
      {priceOverview.map((item: IPriceOverview) => (
        <div className="PricingOverview__Unit Text--subdued" key={item.title}>
          <span>
            {item.title}
            <IF condition={!isEmpty(item.subTitle)}>
              <div className="Text--subdued">{item.subTitle}</div>
            </IF>
          </span>
          <span>{item.price}</span>
        </div>
      ))}
    </div>
  );
};
