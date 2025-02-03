import { IProductSpecification } from "../../../../redux/slices/collection/collection.type";
import "./Style.scss";

interface IProps {
  productSpecification: IProductSpecification[] | null;
}

export const Specification = (props: IProps) => {
  const { productSpecification } = props;

  return (
    <div className="Spec-TableContainer">
      {productSpecification?.map((spec: IProductSpecification) => {
        const [key, value] = spec.productspecification.split(":");
        return (
          <div className="Spec-Row u-h6" key={spec.productspecid}>
            <div className="Spec-RowKey">{key}</div>
            <div className="Spec-RowValue">{value}</div>
          </div>
        );
      })}
    </div>
  );
};
