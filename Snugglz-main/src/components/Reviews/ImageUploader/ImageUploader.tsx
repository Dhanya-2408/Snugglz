import React from "react";
import ImageUploading, { ImageListType } from "react-images-uploading";
import {
  BUTTON_TYPE_CLASSES,
  TextButton,
} from "../../../ui_kits/Buttons/TextButton/TextButton.component";
import { ButtonGroup } from "../../../ui_kits/Buttons/TextButton/TextButton.styles";
import "./Style.scss";

interface IProps {
  updateImageChange: (imageList: ImageListType) => void;
}

export const ImageUploader = (props: IProps) => {
  const [images, setImages] = React.useState([]);
  const maxNumber = 5;

  const onChange = (imageList: ImageListType) => {
    // data for submit
    setImages(imageList as never[]);
    props.updateImageChange(imageList as never[]);
  };

  return (
    <ImageUploading
      value={images}
      onChange={onChange}
      maxNumber={maxNumber}
      multiple={false}
    >
      {({
        imageList,
        onImageUpload,
        onImageUpdate,
        onImageRemove,
        isDragging,
        dragProps,
      }) => (
        // write your building UI
        <div className="upload__image-wrapper ">
          <div>
            <button
              className="Uploader"
              style={isDragging ? { color: "red" } : undefined}
              onClick={onImageUpload}
              {...dragProps}
            >
              Click or Drop here
            </button>
          </div>
          {imageList.map((image, index) => (
            <div key={index} className="image-item">
              <img src={image.dataURL} alt="" width="100" />

              <ButtonGroup>
                <TextButton
                  buttonType={BUTTON_TYPE_CLASSES.overlay}
                  onClick={() => onImageUpdate(index)}
                >
                  Update
                </TextButton>
                <TextButton
                  buttonType={BUTTON_TYPE_CLASSES.overlay}
                  onClick={() => onImageRemove(index)}
                >
                  Remove
                </TextButton>
              </ButtonGroup>
            </div>
          ))}
        </div>
      )}
    </ImageUploading>
  );
};
