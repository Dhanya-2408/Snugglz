import { ReactNode } from "react";
import classNames from "classnames";
import { CloseIcon } from "../../assets/icons/Close.icon";
import { IconButton } from "../Buttons/IconButton/IconButton.component";
import "./Modal.scss";
import { OnclickEvent } from "../../models/types";
import { IF } from "../IF";
import { isEmpty } from "../../utils/script";

interface IProps {
  children: ReactNode;
  isHidden: boolean;
  title?: string;
  description?: string;
  isDark?: boolean;
  classes?: string;
  isFullScreen?: boolean;
  onClose: () => void;
}

export const Modal = (props: IProps) => {
  const {
    title,
    children,
    isDark,
    isHidden,
    isFullScreen,
    description,
    onClose,
    classes = "",
  } = props;

  const handleOnclose = (e: OnclickEvent) => {
    e.preventDefault();
    onClose();
  };

  return (
    <div
      aria-hidden={isHidden}
      id={classes}
      className={classNames("Modal", {
        "Modal--dark": isDark,
        "Modal--fullScreen Modal--pageContent": isFullScreen,
      })}
    >
      <header className="Modal__Header">
        <h2 className="Modal__Title Heading">{title}</h2>
        <p className="Modal__Description">{description}</p>
      </header>
      <div className="Modal__Content Rte">{children}</div>
      <IF condition={isEmpty(isFullScreen)}>
        <button
          className="Modal__Close Modal__Close--outside"
          onClick={handleOnclose}
        >
          <CloseIcon />
        </button>
      </IF>
      <IF condition={!isEmpty(isFullScreen)}>
        <div className="Modal__Close">
          <IconButton isSmall onClick={handleOnclose}>
            <CloseIcon />
          </IconButton>
        </div>
      </IF>
    </div>
  );
};
