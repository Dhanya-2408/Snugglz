import React from "react";
import { StarRating } from "../StarRating";
import "./ReviewsOverview.scss";

interface IProps {
  rating: number;
  count: number;
  percentage: string;
}

export const ReviewsOverview = (props: IProps) => {
  const { rating, count, percentage } = props;

  return (
    <div className="ReviewsRow u-h6">
      <div className="ReviewsRow__Star">
        <StarRating rating={rating} />
      </div>
      <div className="ReviewsRow__Bar">
        <div
          className="ReviewsRow__Bar--content"
          style={{ width: percentage }}
        ></div>
      </div>
      <div className="ReviewsRow__Percentage">{percentage}</div>
      <div className="ReviewsRow__Frequency">({count})</div>
    </div>
  );
};
