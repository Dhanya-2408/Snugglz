import { FC } from "react";
import classNames from "classnames";
import "./AnnouncementBar.scss";

interface IProps {
  position?: string;
}

export const AnnouncementBar: FC<IProps> = (props: IProps) => {
  const { position = "left" } = props;

  return (
    <section className="AnnouncementBar Heading u-h6">
      <div
        className={classNames("AnnouncementBar__Wrapper", {
          "AnnouncementBar__Wrapper--right": position === "right",
        })}
      >
        <p className="AnnouncementBar__Content">
          <span>FREE DELIVERY</span> across India
        </p>
        <p className="AnnouncementBar__Content">
          <span>Upto 20% off, </span> No discount codes needed.
        </p>
        <p className="AnnouncementBar__Content">
          <span>No questions asked</span> Exchanges and Returns
        </p>
        <p className="AnnouncementBar__Content">
          <span>FREE DELIVERY</span> across India
        </p>
        <p className="AnnouncementBar__Content">
          <span>Upto 20% off, </span> No discount codes needed.
        </p>
        <p className="AnnouncementBar__Content">
          <span>No questions asked</span> Exchanges and Returns
        </p>
      </div>
    </section>
  );
};
