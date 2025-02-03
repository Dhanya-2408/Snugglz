export interface IFAQItem {
  qn: string;
  ans: string[];
}

export const faqData: Record<string, Array<IFAQItem>> = {
  "SHIPPING & DELIVERY": [
    {
      qn: "How does the delivery process works?",
      ans: [
        "Within 24 hours after the order is placed, we ship the products via reputed courier services.",
        "We will email you the shipping details once the consignment is shipped.",
      ],
    },
    {
      qn: "What is the delivery time of Standard Shipping?",
      ans: [
        "For the majority countries in the world, Standard shipping takes 8-21 business days to arrive.",
        "There are occasions that the delivery may take a bit longer. Thus, please refer to the estimation that is displayed on the tracking page of the courier service, for which the URL to that page could be found on the email that our system sends you after the package is shipped.",
      ],
    },
    {
      qn: "I cannot receive my order, what should I do?",
      ans: ["Please email us at cs@snugglz.store with your order number."],
    },
  ],

  "RETURNS & ORDER": [
    {
      qn: "What if i recieved a damaged product?",
      ans: [
        "For the items that are physically damaged or defective, you simply have to write us an email on cs@snugglz.store containing the order number with the photos of damaged product/ products.",
      ],
    },
    {
      qn: "What if I have received wrong product?",
      ans: [
        "If you have received the wrong product, kindly create a detailed video while opening the package. The video should contain the packaging bag, packaging label, and the product(s) that you have received. ",
      ],
    },
    {
      qn: "How do I track my order?",
      ans: [
        "On shipping of your order, you will receive an SMS on your registered mobile number from us stating the tracking number and other details. You can track your order on the website of our courier partner with that tracking number.",
      ],
    },
    {
      qn: "How do I return/exchange my order?",
      ans: [
        "Customers can Exchange/ Return their order within 7 days after an order has been delivered.",
        "All returned items must be in unused condition with all original tags and packaging intact.",
        "Raise a return request from our website, After we have received the product the amount credited on return will be based on the price of the product at the time of purchase.",
        "Any change in the product price thereafter will not be considered.",
      ],
    },
    {
      qn: "How do I cancel my order?",
      ans: [
        "You can cancel your order within 24 hours of placing the order",
        "You have to cancel your order by sending an email along with your Order Id to care@Snugglz.com from your registered email address. Our Customer Service Executives will contact you (if required) for confirmation of the cancellation request. ",
        "Once the cancellation request has been made from your end, it will take us a maximum of 1-2 business days to cancel your order.",
      ],
    },
  ],

  "REFUND & CHARGES": [
    {
      qn: "I tried placing my order using my Debit Card/ Credit Card/ Net Banking. The order was not successful but my money got deducted. What really happened with my money?",
      ans: [
        "Please check your Bank Account/ Credit Card Statement to first ensure if your account has been debited.",
        "If your Account has been debited after a payment failure, it is normally rolled back by Banks within 10 Business days.",
        "For assistance you can write to us at care@feranoid.com, we will be happy to help you out.",
      ],
    },
    {
      qn: "What are the terms and conditions for refund?",
      ans: [
        "We will accept Return or Exchanges of an Item only if the following conditions are met:",
        "Return or size exchange should be initiated within 10 days of delivery of the Item;",
        "The tags and labels on the item should be intact;",
        "The Product should be Unwashed, Unused, and in Undamaged condition; and The Product is returned along with the original packaging. ",
        "Please be informed that the Returns or Exchanges are not acceptable for any request that do not meet the aforementioned criteria.",
      ],
    },
    {
      qn: "How long the online refund procedure takes?",
      ans: [
        "Once we have received the product/ products and our internal quality check has been carried out, amount will be credited back to your Registered BANK ACCOUNT within 3-4 working days.",
      ],
    },
    {
      qn: "Why am I not getting any COD option on the payment page?",
      ans: [
        "If the COD option is not available, it means this facility is not serviceable by our courier partners for your postal area/code. However, you can always opt for Net Banking or Credit/Debit Card payment options.",
      ],
    },
  ],

  "CUSTOMS & TAXES": [
    {
      qn: "Do you take bulk orders/ customise products?",
      ans: [
        "Yes, we do. You can mail us with your order and design details at care@feranoid.com. We’ll work out a discount for you, depending on the quantity you Order. You can check out our Bulk Orders page for more details.",
      ],
    },
    {
      qn: "How and when the Coupons will be applied?",
      ans: [
        "There is a coupon code written on the coupons. These codes are applied at the time of checkout.",
      ],
    },
  ],
};
