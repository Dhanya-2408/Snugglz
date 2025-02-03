import { InputBaseProps, InputType } from "../../../models/types";
import { validationRules } from "../../../utils/Validation";

export type IReviewFormState = {
  username: string;
  titile: string;
  description: string;
  rating: string;
  imageUrl: any;
};

export type ReviewFormInput = InputBaseProps<IReviewFormState>;

export const initialReviewFormState: IReviewFormState = {
  username: "",
  titile: "",
  description: "",
  rating: "",
  imageUrl: "",
};

export const ReviewFormInputs: ReviewFormInput[] = [
  {
    name: "username",
    label: "UserName",
    type: InputType.text,
    validation: [
      { rule: validationRules.name },
      { rule: validationRules.required },
    ],
  },
  {
    name: "titile",
    label: "Title",
    type: InputType.text,
    validation: [{ rule: validationRules.required }],
  },
  {
    name: "description",
    label: "Description",
    type: InputType.textarea,
    validation: [{ rule: validationRules.required }],
  },
  {
    name: "rating",
    label: "Rating",
    type: InputType.number,
    validation: [{ rule: validationRules.required }],
  },
  {
    name: "imageUrl",
    label: "Image",
    type: InputType.file,
    validation: [{ rule: validationRules.required }],
  },
];
