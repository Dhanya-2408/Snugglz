import { IProductReview } from "../../redux/slices/collection/collection.type";
import { StarRating } from "./StarRating";

interface IProps {
  review: IProductReview;
}

export const ReviewItem = (props: IProps) => {
  const { review } = props;

  return (
    <div className="Review">
      <div className="Review__Header">
        <div className="Review__Icon">{review.username.charAt(0)}</div>
        <StarRating rating={review.rating} />
        <span className="Review__Timestamp">25/07/2022</span>
        <div className="Review__br"></div>
        <span className="Review__Author">{review.username}</span>
      </div>
      <div className="Review__Content">
        <div className="Review__Title">{review.titile}</div>
        <div className="Review__Body">
          <p>{review.description}</p>
        </div>
        <div className="Review__Pics">
          <img alt="reviewProduct" src={review.imageUrl} />
        </div>
      </div>
    </div>
  );
};
