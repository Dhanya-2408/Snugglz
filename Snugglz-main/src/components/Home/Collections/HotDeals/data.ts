import {
  Deal1,
  Deal2,
  Deal3,
  Deal4,
} from "../../../../assets/images/hot_deals";

export interface IHotDeal {
  title: string;
  imageUrl: string;
  keyName: string;
  minMaxValues: Number[];
}

export const hotDealsData: IHotDeal[] = [
  {
    title: "Upto 20% OFF",
    imageUrl: Deal1,
    keyName: "New In",
    minMaxValues: [10, 20],
  },
  {
    title: "30-40% Off",
    imageUrl: Deal2,
    keyName: "Back in Stock",
    minMaxValues: [30, 40],
  },
  {
    title: "Min 50% Off",
    imageUrl: Deal3,
    keyName: "Half Price Store",
    minMaxValues: [50, 50],
  },
  {
    keyName: "Joyful Stock",
    title: "Upto 60% OFF",
    imageUrl: Deal4,
    minMaxValues: [10, 60],
  },
];
