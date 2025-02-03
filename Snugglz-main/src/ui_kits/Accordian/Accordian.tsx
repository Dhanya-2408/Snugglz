import classNames from "classnames";
import { FC, ReactNode, useState } from "react";
import useElementSize from "../../hooks/useElementSize";
import "./Accordian.scss";

interface IProps {
  title: string;
  child: ReactNode;
  isPadded?: boolean;
  isAutoExpand?: boolean;
  isLarge?: boolean;
}

export const Accordian: FC<IProps> = (props: IProps) => {
  const { child, title, isPadded, isAutoExpand, isLarge } = props;

  const [squareRef, { height }] = useElementSize();
  const [isExpand, setIsExpand] = useState(false);

  const handleClick = () => {
    setIsExpand(!isExpand);
  };

  return (
    <div
      className={classNames("Collapsible", {
        "Collapsible--padded": isPadded,
        "Collapsible--autoExpand": isAutoExpand,
        "Collapsible--large": isLarge,
      })}
    >
      <button
        type="button"
        className="Collapsible__Button u-h6 Heading"
        aria-expanded={isExpand}
        onClick={handleClick}
      >
        {title}
        <span className="Collapsible__Plus"></span>
      </button>
      <div
        className="Collapsible__Inner"
        style={{
          height: isExpand ? `${height}px` : "0",
        }}
      >
        <div className="Collapsible__Content" ref={squareRef}>
          {child}
        </div>
      </div>
    </div>
  );
};
