import { IF } from "../../ui_kits/IF";
import { StarRating } from "./StarRating";
import { ReviewItem } from "./ReviewItem";
import { isEmpty } from "../../utils/script";
import { useAuth } from "../../contexts/AuthContext";
import {
  IProduct,
  IProductReview,
} from "../../redux/slices/collection/collection.type";
import {
  BUTTON_TYPE_CLASSES,
  TextButton,
} from "../../ui_kits/Buttons/TextButton/TextButton.component";
import { ReviewsOverview } from "./ReviewsOverview/ReviewsOverview";
import { caluclatePercentage, groupByValueLength } from "../../utils/generics";
import "./Review.scss";

interface IProps {
  product: IProduct;
  toggleReviewDraw: () => void;
}

export const Reviews = (props: IProps) => {
  const {
    product: { reviews },
    toggleReviewDraw,
  } = props;

  const reviewsLength = reviews?.length || 0;
  const average =
    reviews?.reduce((acc, review) => acc + review.rating, 0) /
      reviews?.length || 0;
  const groupedList = groupByValueLength(reviews || [], "rating");

  const { user } = useAuth();

  const WriteReview = (
    <IF condition={!isEmpty(user)}>
      <div className="RatingWdgt__Action">
        <TextButton
          isSmall
          buttonType={BUTTON_TYPE_CLASSES.inverted}
          onClick={toggleReviewDraw}
        >
          Write Review
        </TextButton>
      </div>
    </IF>
  );

  return (
    <div className="RatingSummary">
      <div className="RatingWdgt__Header">
        <div className="RatingWdgt__Summary">
          <StarRating rating={average} />
          <div>{`Based on ${reviewsLength} reviews`}</div>
        </div>
        <IF condition={!isEmpty(reviews)}>
          <div className="RatingWdgt__ReviewsSummary">
            {Array.from(Array(5).keys()).map((item: number) => {
              const itemIndex = item + 1;
              const groupListKey = groupedList[itemIndex] || 0;
              const percentage = caluclatePercentage(
                groupListKey,
                reviewsLength
              );
              return (
                <ReviewsOverview
                  rating={itemIndex}
                  count={groupListKey}
                  percentage={`${percentage} %`}
                />
              );
            })}
          </div>
        </IF>
        {WriteReview}
      </div>
      <div>
        {reviews?.map((review: IProductReview) => (
          <ReviewItem review={review} />
        ))}
      </div>
    </div>
  );
};
