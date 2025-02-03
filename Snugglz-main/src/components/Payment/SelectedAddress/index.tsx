import { RadioIcon } from "../../../assets/icons/Radio.icon";
import { TextButton } from "../../../ui_kits/Buttons/TextButton/TextButton.component";
import { ButtonGroup } from "../../../ui_kits/Buttons/TextButton/TextButton.styles";

export const SelectedAddress = () => {
  return (
    <div className="Address_Block u-h5">
      <div className="Address_Content Heading u-h7">
        <RadioIcon selected={true} />
        <h5 className="name">Dhanya</h5>
        <p>4,364 I Bharath Nager, Nagercoil</p>
        <p>Puthery</p>
        <p>Landmark : Bank</p>
        <p>{`Tamil Nadu, Chennai, 629001`}</p>
        <p>India</p>
        <p className="mobile">T : 9498422064</p>
      </div>
      <ButtonGroup className="btn-blocks">
        <TextButton isSmall buttonType="inverted">
          EDIT
        </TextButton>
      </ButtonGroup>
    </div>
  );
};
