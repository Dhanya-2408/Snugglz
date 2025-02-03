import {
  Delivery,
  Exchange,
  MadeInIndia1,
} from "../../../../assets/images/shop_features";

type ShopFeaturesKeys = "id" | "img" | "title" | "textContent";

export type ShopFeature = Record<ShopFeaturesKeys, string>;

export const ShopFeaturesData: ShopFeature[] = [
  {
    id: "Refund",
    img: Exchange,
    title: "Exchange and Return",
    textContent:
      "Want to try a different size or color? With our 7 day trial policy, you can request for an exchange or return the products for a full refund, no questions asked!",
  },
  {
    id: "MadeInIndia",
    img: MadeInIndia1,
    title: "PROUDLY 'MADE IN INDIA'",
    textContent:
      "Every product from Snugglz's is made with the heart and soul of our own people. We are a 'Made in India' brand with the aim to #ChangeTheNorm internationally.",
  },
  {
    id: "FreeDelivery",
    img: Delivery,
    title: "Free Delivery",
    textContent:
      "We deliver Snugglz's to your doorstep in 3-4 Business days in a proper delivery box made with Recycled Wastepaper at no added cost to you.",
  },
];
