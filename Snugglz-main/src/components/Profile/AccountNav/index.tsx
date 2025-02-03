import { FC } from "react";
import { useAppDispatch } from "../../../redux/store";
import { FormElement, FormSelectInput } from "../../../ui_kits/Form";
import { profileMenu } from "../../../redux/slices/profile/profile.type";
import { setProfilePage } from "../../../redux/slices/profile/profile.slice";
import { Form__Elemen__Types } from "../../../ui_kits/Form/FormElements/FormElement";
import { useAuth } from "../../../contexts/AuthContext";

interface IProps {
  options: Array<profileMenu>;
  selectedValue: profileMenu;
}

export const AccountNav: FC<IProps> = (props: IProps) => {
  const { options, selectedValue } = props;
  const dispatch = useAppDispatch();

  const { logout } = useAuth();
  const handleSelectChange = (name: string, option: string) => {
    dispatch(setProfilePage(option as profileMenu));
  };

  return (
    <FormElement elementType={Form__Elemen__Types.FormGroup}>
      <FormSelectInput
        isTransparent
        name="Profile"
        value={selectedValue}
        options={options}
        onSelect={handleSelectChange}
      />
      <div className="Heading u-h6" onClick={logout}>
        LOGOUT
      </div>
    </FormElement>
  );
};
