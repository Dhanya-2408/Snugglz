import { profileMenu } from "../redux/slices/profile/profile.type";
import Recommendations from "../assets/images/profile/Recommdation.png";
import SavedItem from "../assets/images/profile/SavedItem.png";

export interface IProfileData {
  title: string;
  description: string;
  url: profileMenu;
  img?: string;
}

export const ProfileInfoNav: IProfileData[] = [
  {
    title: "Recommendations",
    url: profileMenu.home,
    description: "Specially selected items you may also like",
    img: Recommendations,
  },
  {
    title: "Saved Items",
    url: profileMenu.home,
    description: "All your favorite pieces in one beautiful place.",
    img: SavedItem,
  },
];

export const ProfileAccouctNav: IProfileData[] = [
  {
    title: "My Orders",
    description: "Manage and edit your orders.",
    url: profileMenu.orders,
  },
  {
    title: "Account Settings",
    description: "Manage profile and preferences.",
    url: profileMenu.profile,
  },
  {
    title: "Address Book",
    description: "Manage shipping & billing addresses.",
    url: profileMenu.address,
  },
  {
    title: "Wallet",
    description: "Manage your payment methods.",
    url: profileMenu.profile,
  },
];
