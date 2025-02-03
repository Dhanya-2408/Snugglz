import { FC, ReactElement, useState } from "react";
import classNames from "classnames";
import { MinusIcon } from "../../assets/icons/Minus.icon";
import { PlusIcon } from "../../assets/icons/Plus.icon";
import "./QuantitySelector.scss";
import { OnclickEvent } from "../../models/types";

interface IProps {
  isLarge?: boolean;
  defaultValue?: number;
  handleIncrement: (quantity: number) => void;
  handleDecrement: (quantity: number) => void;
}

export const QuantitySelector: FC<IProps> = (props: IProps): ReactElement => {
  const { isLarge, defaultValue = 1, handleIncrement, handleDecrement } = props;
  const [quantity, setQuantity] = useState<number>(defaultValue);

  const handleIncrementOnclick = (e: OnclickEvent) => {
    e.preventDefault();
    setQuantity((prev) => prev + 1);
    handleIncrement(quantity + 1);
  };

  const handleDecrementOnclick = (e: OnclickEvent) => {
    e.preventDefault();
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
      handleDecrement(quantity - 1);
    }
  };

  return (
    <div
      className={classNames("QuantitySelector u-h6", {
        "QuantitySelector--large": isLarge,
      })}
    >
      <button
        className="QuantitySelector__Button Link Link--primary"
        onClick={handleDecrementOnclick}
      >
        <MinusIcon />
      </button>
      <input
        className="QuantitySelector__CurrentQuantity"
        type="text"
        pattern="[0-9]*"
        value={quantity}
        readOnly
      />
      <button
        className="QuantitySelector__Button Link Link--primary"
        onClick={handleIncrementOnclick}
      >
        <PlusIcon />
      </button>
    </div>
  );
};
