import React from "react";
import { IF } from "../../ui_kits/IF";
import { objectKeys } from "../../utils/generics";
import { AccountNav } from "../../components/Profile/AccountNav";
import { useAppSelector } from "../../redux/store";
import { ProfileHome } from "../../components/Profile/ProfileHome";
import { profileMenu } from "../../redux/slices/profile/profile.type";
import { ProfileBanner } from "../../components/Profile/ProfileBanner";
import { MyProfile } from "../../components/Profile/MainContent/MyProfile";
import { selectedProfilePage } from "../../redux/slices/profile/profile.selector";
import { AddressContainer } from "../../components/AddressContainer/AddressContainer";
import { OrdersTable } from "../../components/Profile/MainContent/MyOrders/OrdersTable/OrdersTable";
import "./Style.scss";
import { MyCoupons } from "../../components/Profile/MainContent/MyCoupons";
import { MyRewards } from "../../components/Profile/MainContent/MyRewards";

const profileLookup: Record<profileMenu, any> = {
  "Profile Home": ProfileHome,
  "My Profile": MyProfile,
  "My Orders": OrdersTable,
  "My Address": AddressContainer,
  "My Coupons": MyCoupons,
  "My Rewards": MyRewards,
};

export const profileOptions = objectKeys(profileLookup);

const Profile = () => {
  const currentModal = useAppSelector(selectedProfilePage);
  let renderedProfilePage;

  if (currentModal) {
    const ProfileComponent = profileLookup[
      currentModal
    ] as typeof React.Component;
    renderedProfilePage = <ProfileComponent />;
  }

  return (
    <div className="Profile">
      <ProfileBanner />
      <IF condition={currentModal === profileMenu.home}>
        {renderedProfilePage}
      </IF>
      <IF condition={currentModal !== profileMenu.home}>
        <div className="Dashbord__Container">
          <div className="Dashbord__Rows">
            <div className="Dashbord__SideNav">
              <AccountNav
                options={profileOptions}
                selectedValue={currentModal}
              />
            </div>
            <div className="Dashbord__Main">{renderedProfilePage}</div>
          </div>
        </div>
      </IF>
    </div>
  );
};

export default Profile;
