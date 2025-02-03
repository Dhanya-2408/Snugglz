import { Fragment, useEffect } from "react";
import Routes from "./routes";
import { useAppDispatch, useAppSelector } from "./redux/store";
import { ScrollTop } from "./ui_kits/ScrollTop/ScrollTop";
import NavigationScroll from "./components/NavigationScroll";
import { fetchCategoriesAsync } from "./redux/slices/nav/nav.reducer";
import { fetchAllProductsAsync } from "./redux/slices/collection/collection.reducer";
import {
  fetchCollectionAsync,
  fetchProductCollection,
} from "./redux/slices/home/home.reducer";
import { CollectionEnum, ProductsEnum } from "./redux/slices/home/home.type";
import LayoutWrapper from "./layout/LayoutWrapper";
import { ToastContainer } from "react-toastify";

// style + assets
import "./assets/scss/style.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.scss";
import "react-toastify/dist/ReactToastify.css";
import { fetchCustomerAsync } from "./redux/slices/profile/profile.reducer";
import { useAuth } from "./contexts/AuthContext";
import { customer } from "./redux/slices/profile/profile.selector";
import { getFavAsync } from "./redux/slices/wishlist/wishlist.reducer";

function App() {
  const dispatch = useAppDispatch();
  // const { isoverlayHidden } = useSetting();

  const { user } = useAuth();
  const { data: customerData } = useAppSelector(customer);

  useEffect(() => {
    dispatch(fetchAllProductsAsync());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchCategoriesAsync());
  }, [dispatch]);

  useEffect(() => {
    if (user) {
      dispatch(fetchCustomerAsync(user));
    }
  }, [dispatch, user]);

  useEffect(() => {
    dispatch(fetchCollectionAsync(CollectionEnum.MEN));
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchCollectionAsync(CollectionEnum.WOMEN));
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchProductCollection(ProductsEnum.SALE));
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchProductCollection(ProductsEnum.FEATURE));
  }, [dispatch]);

  useEffect(() => {
    if (user && customerData?.customerid) {
      dispatch(getFavAsync({ customerid: customerData?.customerid }));
    }
  }, [customerData?.customerid, dispatch, user]);

  return (
    <Fragment>
      <ScrollTop />
      <ToastContainer />
      {/* <PageOverlay isVisible={!isoverlayHidden} /> */}
      <LayoutWrapper>
        <NavigationScroll>
          <Routes />
        </NavigationScroll>
      </LayoutWrapper>
    </Fragment>
  );
}

export default App;
