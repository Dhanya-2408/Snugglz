export interface IFooterLinks {
  title: string;
  items: {
    head: string;
    url: string;
  }[];
}

export const footerLinks: IFooterLinks[] = [
  {
    title: "INFORMATION",
    items: [
      {
        head: "About Us",
        url: "about",
      },
      {
        head: "FAQ",
        url: "faq",
      },
      {
        head: "Shipping Policy",
        url: "shipping-policy",
      },
      {
        head: "Return and Refund Policy",
        url: "refund-policy",
      },
      {
        head: "Cancellation Policy",
        url: "cancellation-policy",
      },
    ],
  },
  {
    title: "CUSTOMER SERVICE",
    items: [
      {
        head: "Contact",
        url: "contact",
      },
      {
        head: "Store Locator",
        url: "store-locator",
      },
      {
        head: "Track Order",
        url: "track-order",
      },
    ],
  },
];
