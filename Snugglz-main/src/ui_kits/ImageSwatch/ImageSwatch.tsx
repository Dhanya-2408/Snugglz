import { useState } from "react";
import classNames from "classnames";
import { InputChangeEvent } from "../../models/types";
import "./ImageSwatch.scss";

interface IOption {
  productid: number;
  image: string;
  name: string;
}

interface IProps {
  title: string;
  options: IOption[];
  onChange: (selectedInput: IOption) => void;
  isSmall?: boolean;
  isLarge?: boolean;
  isWhite?: boolean;
}

export const ImageSwatch = (props: IProps) => {
  const { options, title, onChange, isSmall, isLarge, isWhite } = props;

  const [selectedValue, setSelectedValue] = useState<String>(options[0].name);

  const radioHandler = (event: InputChangeEvent, item: IOption) => {
    const selectedInput = event.target.value;
    setSelectedValue(selectedInput);
    onChange(item);
  };

  return (
    <ul className="HorizontalList HorizontalList--spacingTight">
      {options.map((option) => (
        <li className="HorizontalList__Item" key={option.productid}>
          <input
            type="radio"
            id={option.productid.toString()}
            value={option.productid}
            name={`${title}-option`}
            className="ColorSwatch__Radio"
            onChange={(event: InputChangeEvent) => radioHandler(event, option)}
            checked={+selectedValue === option.productid}
          />
          <label
            htmlFor={option.productid.toString()}
            className={classNames("ColorSwatch", {
              "ColorSwatch--small": isSmall,
              "ColorSwatch--large": isLarge,
              "ColorSwatch--white": isWhite,
            })}
          >
            <img src={option.image} alt={option.name} />
          </label>
        </li>
      ))}
    </ul>
  );
};
