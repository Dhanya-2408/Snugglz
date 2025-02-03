import { Modal } from "../../../ui_kits/Modal/Modal";
import { useAuth } from "../../../contexts/AuthContext";
import useObjectState from "../../../hooks/useObjectState";
import { initialFormState } from "../../../models/constants";
import {
  initialReviewFormState,
  IReviewFormState,
  ReviewFormInput,
  ReviewFormInputs,
} from "./inputs";
import {
  FormSubmitEvent,
  IFormState,
  InputChangeEvent,
  InputFocusEvent,
  Messages,
} from "../../../models/types";
import {
  Form,
  FormAlert,
  FormSubmit,
  FormTextArea,
  FormTextInput,
} from "../../../ui_kits/Form";
import { IF } from "../../../ui_kits/IF";
import { isEmpty } from "../../../utils/script";
import { FormElement } from "../../../ui_kits/Form/FormElements/FormElement";
import { productService } from "../../../services/axiosServices";
import StarRatings from "react-star-ratings";
import { ImageUploader } from "../ImageUploader/ImageUploader";
import { ImageListType } from "react-images-uploading";

interface IProps {
  isVisible: boolean;
  handleClose: () => void;
}

export const ReviewModal = (props: IProps) => {
  const { isVisible, handleClose } = props;

  const {
    obj: reviewState,
    get: getReviewState,
    update: updateReviewState,
  } = useObjectState(initialReviewFormState);

  const {
    obj: formState,
    update: updateFormState,
    setObj: setFormState,
  } = useObjectState(initialFormState as IFormState<IReviewFormState>);

  const { handleFormValidate, handleOnFocusEvent, updateData } = useAuth();

  const message: Messages = {
    success: "Updated in successfully!",
    error: "Error while write review!",
  };

  const loginParams = {
    ...productService.addReviews,
    params: reviewState,
  };

  const handleOnsubmit = async (e: FormSubmitEvent) => {
    e.preventDefault();
    const isValid = handleFormValidate(
      ReviewFormInputs,
      reviewState,
      updateFormState
    );

    if (isValid) {
    }
  };

  return (
    <Modal
      title="Write Review"
      description="Please fill in the information below:"
      isHidden={!isVisible}
      onClose={handleClose}
    >
      <Form onSubmit={handleOnsubmit}>
        <IF
          condition={
            !isEmpty(formState.helperText) || !isEmpty(formState.errors)
          }
        >
          <FormAlert
            isError={!formState.submitSuccess}
            isSuccess={formState.submitSuccess}
            classname="u-h6"
          >
            {formState.helperText ||
              (formState.errors && Object.values(formState.errors)[0])}
          </FormAlert>
        </IF>
        {ReviewFormInputs.map(({ validation, ...item }: ReviewFormInput) => {
          return (
            <FormElement key={item.name}>
              <IF condition={item.name === "rating"}>
                <StarRatings
                  rating={+reviewState.rating}
                  starDimension="15px"
                  starSpacing="1px"
                  starRatedColor="#d3b289"
                  changeRating={(newRating) => {
                    updateReviewState(item.name, newRating.toString());
                  }}
                />
              </IF>
              <IF condition={item.name === "description"}>
                <FormTextArea
                  label={item.label}
                  placeholder={item.placeholder}
                  value={getReviewState(item.name)}
                  onFocus={(e: InputFocusEvent) =>
                    handleOnFocusEvent(e, initialFormState, setFormState)
                  }
                  onChange={(e: InputChangeEvent) => {
                    updateReviewState(item.name, e.target.value);
                  }}
                />
              </IF>
              <IF condition={item.type === "text"}>
                <FormTextInput
                  {...item}
                  value={getReviewState(item.name)}
                  onFocus={(e: InputFocusEvent) =>
                    handleOnFocusEvent(e, initialFormState, setFormState)
                  }
                  onChange={(e: InputChangeEvent) => {
                    updateReviewState(item.name, e.target.value);
                  }}
                />
              </IF>

              <IF condition={item.name === "imageUrl"}>
                <ImageUploader
                  updateImageChange={(imageList: ImageListType) => {
                    updateReviewState(item.name, imageList[0].file);
                  }}
                />
              </IF>
            </FormElement>
          );
        })}
        <FormSubmit isFull isLoading={formState.isButtonLoading}>
          Submit
        </FormSubmit>
      </Form>
    </Modal>
  );
};
