import { FormElement } from "../../../ui_kits/Form";
import { PasswordStrength } from "../../../utils/passwordStrength";
import "./StrengthIndicator.scss";

export const StrengthIndicator = (props: { level: PasswordStrength }) => {
  return (
    <FormElement>
      <div className="Form__HelpText StrengthIndicator">
        <div
          className="StrengthIndicator__Marker"
          style={{ backgroundColor: props.level.color }}
        ></div>
        <div className="u-h5">{props.level.label}</div>
      </div>
    </FormElement>
  );
};
