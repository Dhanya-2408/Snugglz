import { OnclickEvent } from "../../models/types";
import { RadioIcon } from "../../assets/icons/Radio.icon";
import { IAddress } from "../../redux/slices/address/address.type";
import { ButtonGroup } from "../../ui_kits/Buttons/TextButton/TextButton.styles";
import { TextButton } from "../../ui_kits/Buttons/TextButton/TextButton.component";

interface IProps {
  addressData: IAddress;
  handleRemoveAddress: (id: string) => void;
  toggleDefaultAddress: (id: string) => void;
  handleUpdateNewAddress: (id: string) => void;
}

export const AddressBlock = (props: IProps) => {
  const {
    addressData,
    toggleDefaultAddress,
    handleRemoveAddress,
    handleUpdateNewAddress,
  } = props;
  const {
    id,
    name,
    phone,
    state,
    city,
    locality,
    address,
    pincode,
    landmark,
    isDefault,
  } = addressData;

  const handleDeleteAddress = (e: OnclickEvent) => {
    e.preventDefault();
    handleRemoveAddress(id);
  };

  const handleEditAddress = (e: OnclickEvent) => {
    e.preventDefault();
    handleUpdateNewAddress(id);
  };

  return (
    <div className="Address_Block u-h5">
      <div
        className="Address_Content Heading u-h7"
        onClick={() => toggleDefaultAddress(id)}
      >
        <RadioIcon selected={isDefault} />
        <h5 className="name">
          {name} &nbsp; {isDefault && <span>( Default )</span>}
        </h5>
        <p>{address}</p>
        <p>{locality}</p>
        <p>Landmark : {landmark}</p>
        <p>{`${state}, ${city}, ${pincode}`}</p>
        <p>India</p>
        <p className="mobile">T : {phone}</p>
      </div>
      <ButtonGroup className="btn-blocks">
        <TextButton isSmall onClick={handleEditAddress}>
          EDIT
        </TextButton>
        <TextButton isSmall buttonType="inverted" onClick={handleDeleteAddress}>
          REMOVE
        </TextButton>
      </ButtonGroup>
    </div>
  );
};
