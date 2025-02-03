import { FAQ } from "../components/FooterPages/FAQ";
import { About } from "../components/FooterPages/About";
import { Contact } from "../components/FooterPages/Contact";
import { TrackOrder } from "../components/FooterPages/TrackOrder";
import { Refund } from "../components/FooterPages/Policies/Refund";
import { Shipping } from "../components/FooterPages/Policies/Shipping";
import { Cancellation } from "../components/FooterPages/Policies/Cancellation";

// project imports
import BaseLayout from "../layout/BaseLayout";

// login routing

// ==============================|| Info ROUTING ||============================== //

const InfoRoutes = {
  path: "page",
  element: <BaseLayout />,
  children: [
    {
      path: "contact",
      element: <Contact />,
    },
    {
      path: "about",
      element: <About />,
    },
    {
      path: "faq",
      element: <FAQ />,
    },
    {
      path: "track-order",
      element: <TrackOrder />,
    },
    {
      path: "shipping-policy",
      element: <Shipping />,
    },
    {
      path: "refund-policy",
      element: <Refund />,
    },
    {
      path: "cancellation-policy",
      element: <Cancellation />,
    },
  ],
};

export default InfoRoutes;
