import React from "react";
import FavouriteIcon from "../../../assets/icons/Fav.icon";
import { IconButton } from "../../../ui_kits/Buttons/IconButton/IconButton.component";

export const AddToFav = () => {
  return (
    <div className="ProductForm__AddFav isActive">
      <IconButton isSmall>
        <FavouriteIcon />
      </IconButton>
    </div>
  );
};
