import { PaymentList } from "../../assets/icons/Payment.icon";

export const FooterAside = () => {
  return (
    <div className="Footer__Aside">
      <div className="Footer__Copyright">
        <a href="/" className="Heading u-h6 Link Link--secondary">
          © 2022 Snugglz. <span className="u-h7">ALL RIGHTS RESERVED</span>
        </a>
      </div>
      <ul className="Footer__PaymentList HorizontalList">
        {PaymentList.map((payment: any, index: number) => {
          return (
            <li className="HorizontalList__Item" key={index}>
              {payment}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
