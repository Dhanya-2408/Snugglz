import { useState } from "react";
import "./RadioSwatch.scss";

interface IProps<T, K extends keyof T> {
  name: string;
  productSizeArray: Array<T>;
  valueKey: K;
  onChange: (selectedInput: T) => void;
  initialSelectedItem: T;
}

export const RadioSwatch = <T, K extends keyof T>(props: IProps<T, K>) => {
  const { name, onChange, productSizeArray, valueKey, initialSelectedItem } =
    props;
  const [selectedValue, setSelectedValue] = useState<T>(initialSelectedItem);

  const radioHandler = (item: T) => {
    setSelectedValue(item);
    onChange(item);
  };

  return (
    <ul className="HorizontalList HorizontalList--spacingTight">
      {productSizeArray.map((sizeItem, index) => (
        <li className="HorizontalList__Item" key={index}>
          <input
            type="radio"
            id={`${sizeItem[valueKey]}-${index}`}
            value={sizeItem[valueKey] as any}
            name={`${name}-option`}
            onChange={() => radioHandler(sizeItem)}
            checked={selectedValue[valueKey] === sizeItem[valueKey]}
            className="RadioSwatch__Input"
          />
          <label
            className="RadioSwatch__Label Heading u-h6"
            htmlFor={`${sizeItem[valueKey]}-${index}`}
          >
            {sizeItem[valueKey] as any}
          </label>
        </li>
      ))}
    </ul>
  );
};
