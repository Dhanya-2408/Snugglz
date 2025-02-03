import classNames from "classnames";
import { FC, ReactNode } from "react";
import { CloseIcon } from "../../assets/icons/Close.icon";
import "./Popover.scss";

export enum PopoverPosition {
  top = "top",
  left = "left",
  bottom = "bottom",
}

interface IProps {
  top: string;
  right: string;
  title: string;
  children: ReactNode;
  isHidden: boolean;
  position?: PopoverPosition;
  togglePopover: () => void;
}

export const Popover: FC<IProps> = (props: IProps) => {
  const {
    top,
    right,
    title,
    children,
    isHidden,
    togglePopover,
    position = "bottom",
  } = props;

  return (
    <div
      className={classNames("Popover", {
        "Popover--positionTop": position === PopoverPosition.top,
        "Popover--positionLeft": position === PopoverPosition.left,
        "Popover--positionBottom": position === PopoverPosition.bottom,
      })}
      aria-hidden={isHidden}
      style={{ top: top, right: right }}
    >
      <header className="Popover__Header">
        <button
          className="Popover__Close Icon-Wrapper--clickable"
          onClick={togglePopover}
        >
          <CloseIcon />
        </button>
        <span className="Popover__Title Heading u-h4">{title}</span>
      </header>
      <div className="Popover__Content">{children}</div>
    </div>
  );
};
