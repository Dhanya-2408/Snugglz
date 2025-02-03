import classNames from "classnames";
import { ReactElement, FC } from "react";
import { IconButtonProps } from "./IconButton.props";
import "./IconButton.scss";

export const IconButton: FC<IconButtonProps> = (
  props: IconButtonProps
): ReactElement => {
  const {
    children,
    onClick,
    isSmall,
    isMedium,
    isLarge,
    isActive,
    isFlat,
    animationType = "right",
  } = props;

  return (
    <button
      data-animate={animationType}
      onClick={onClick}
      className={classNames(`RoundButton `, {
        "is-active": isActive,
        "RoundButton--small": isSmall,
        "RoundButton--medium": isMedium,
        "RoundButton--large": isLarge,
        "RoundButton--flat": isFlat,
      })}
    >
      {children}
    </button>
  );
};
