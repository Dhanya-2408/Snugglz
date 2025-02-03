import { Fragment, useCallback } from "react";
import { AddressBlock } from "./AddressBlock";
import { AddressForm } from "./AddressForm/AddressForm";
import { useSetting } from "../../contexts/SettingContext";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import {
  removeAddress,
  setDefaultAddress,
  setOpenAddAddress,
  setSelectedAddressId,
} from "../../redux/slices/address/address.slice";
import {
  selectAddresses,
  selectedAddressId,
  selectOpenAddAddress,
} from "../../redux/slices/address/address.selector";
import { AddressIcon } from "../../assets/icons/Address.icon";
import { IAddress } from "../../redux/slices/address/address.type";
import { TextButton } from "../../ui_kits/Buttons/TextButton/TextButton.component";

export const AddressContainer = () => {
  const dispatch = useAppDispatch();
  const { toggleOverlay } = useSetting();

  const addresses = useAppSelector(selectAddresses);
  const addressId = useAppSelector(selectedAddressId);
  const isAddressFormOpened = useAppSelector(selectOpenAddAddress);

  const toggleAddressForm = useCallback(() => {
    toggleOverlay();
    dispatch(setOpenAddAddress(!isAddressFormOpened));
  }, [dispatch, isAddressFormOpened, toggleOverlay]);

  const handleAddNewAddress = () => {
    dispatch(setSelectedAddressId(undefined));
    toggleAddressForm();
  };

  const handleUpdateNewAddress = (id: string) => {
    dispatch(setSelectedAddressId(id));
    toggleAddressForm();
  };

  const handleRemoveAddress = useCallback(
    (id: string) => {
      dispatch(removeAddress(id));
    },
    [dispatch]
  );

  const toggleDefaultAddress = useCallback(
    (id: string) => {
      dispatch(setDefaultAddress(id));
    },
    [dispatch]
  );

  return (
    <Fragment>
      <AddressForm
        isVisible={isAddressFormOpened}
        handleOnClose={toggleAddressForm}
        addresses={addresses}
        addressId={addressId}
      />
      <div className="Address_Section">
        <h4 className="Heading">
          <AddressIcon />
          ADDRESS BOOK
        </h4>
        <TextButton isSmall onClick={handleAddNewAddress}>
          ADD ADDRESS
        </TextButton>
      </div>
      <div className="Grid">
        {addresses.map((address: IAddress) => (
          <div
            className="Grid__Cell 1/1--phone 1/2--tablet-and-up 1/2--desk"
            key={address.id}
          >
            <AddressBlock
              addressData={address}
              toggleDefaultAddress={toggleDefaultAddress}
              handleRemoveAddress={handleRemoveAddress}
              handleUpdateNewAddress={handleUpdateNewAddress}
            />
          </div>
        ))}
      </div>
    </Fragment>
  );
};
