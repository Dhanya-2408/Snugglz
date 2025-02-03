import {
  FormElement,
  FormSelectInput,
  FormTextInput,
} from "../../../ui_kits/Form";
import { Panel } from "../../../ui_kits/Panel/Panel";
import { TextButton } from "../../../ui_kits/Buttons/TextButton/TextButton.component";
import "./Style.scss";
import { Alert } from "../../../ui_kits/Alert/Alert";
import { AlertErrorList } from "../../../ui_kits/Alert/AlertErrorList";
import { SectionWrapper } from "../../../ui_kits/Sections/SectionWrapper/SectionWrapper";

const options = [
  "Afghanistan",
  "Albania",
  "Åland Islands",
  "Angola",
  "Anguilla",
];

export const ShippingEstimator = () => {
  return (
    <SectionWrapper isLarge>
      <Panel title="Estimate shipping">
        <div className="ShippingEstimator">
          <div className="ShippingEstimator__Form">
            <FormElement classname="ShippingEstimator__Country">
              <FormSelectInput
                name="Country"
                label="Country"
                options={options}
                onSelect={() => {}}
              />
            </FormElement>
            <FormElement classname="ShippingEstimator__Province">
              <FormSelectInput
                name="Country"
                label="Country"
                options={options}
                onSelect={() => {}}
              />
            </FormElement>
            <FormElement classname="ShippingEstimator__Zip">
              <FormTextInput label="Zip" />
            </FormElement>
            <FormElement classname="ShippingEstimator__Submit">
              <TextButton>Edit</TextButton>
            </FormElement>
          </div>
          <AlertErrorList>
            <li className="u-h6">
              <Alert isError classname="ShippingEstimator__Error u-h7">
                Enter a valid PIN code for Afghanistan
              </Alert>
            </li>
          </AlertErrorList>
          <div className="ShippingEstimator__Results">
            <p>1 option available:</p>
            <ul>
              <li>
                Standard Shipping: <span className="money">Rs. 100</span>
              </li>
            </ul>
          </div>
        </div>
      </Panel>
    </SectionWrapper>
  );
};
