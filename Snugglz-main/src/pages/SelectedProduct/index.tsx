import { useMemo, useEffect } from "react";
import CartDrawer from "../../components/CartPage/CartDrawer";
import { ReviewModal } from "../../components/Reviews/ReviewModal";
import { Reviews } from "../../components/Reviews/Reviews";
import { ColorVariants } from "../../components/SelectedProduct/ColorVariants";
import { ImageViewer } from "../../components/SelectedProduct/ImageViewer/ImageViewer";
import { InfoViewer } from "../../components/SelectedProduct/InfoViewer";
import { ProductAbout } from "../../components/SelectedProduct/ProductAbout";
import { PurchaseColumn } from "../../components/SelectedProduct/PurchaseColumn";
import { Sizechart } from "../../components/SelectedProduct/Sizechart";
import { useSetting } from "../../contexts/SettingContext";
import usePath from "../../hooks/usePath";
import { selectIsCartOpen } from "../../redux/slices/cart/cart.selector";
import { setCartDrawVisibilty } from "../../redux/slices/cart/cart.slice";
import { allProducts } from "../../redux/slices/collection/collection.selector";
import { setGroupedProducts } from "../../redux/slices/collection/collection.slice";
import { IProduct } from "../../redux/slices/collection/collection.type";
import {
  isReviewEnabled,
  isVisibleSizechart,
} from "../../redux/slices/product/product.selector";
import {
  setProductVariants,
  setReviewEnabled,
  setSizechartVisibility,
} from "../../redux/slices/product/product.slice";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { Container, PageWidth } from "../../ui_kits/global/Container.styles";
import { SectionHeader } from "../../ui_kits/Sections/SectionHeader/SectionHeader";
import { SectionWrapper } from "../../ui_kits/Sections/SectionWrapper/SectionWrapper";
import { filterItems, findArrayItems, pick } from "../../utils/generics";
import "./Style.scss";

const SelectedProduct = () => {
  const productId = usePath();
  const dispatch = useAppDispatch();
  const { toggleNoScroll, toggleOverlay } = useSetting();
  const { data: productList } = useAppSelector(allProducts);
  const isSizeChartVisible = useAppSelector(isVisibleSizechart);
  const isCartOpen = useAppSelector(selectIsCartOpen);
  const isReviewOpen = useAppSelector(isReviewEnabled);

  const toggleSizeChart = () => {
    toggleNoScroll();
    dispatch(setSizechartVisibility(!isSizeChartVisible));
  };

  const toggleCartDraw = () => {
    toggleOverlay();
    dispatch(setCartDrawVisibilty(!isCartOpen));
  };

  const toggleReviewDraw = () => {
    toggleOverlay();
    dispatch(setReviewEnabled(!isReviewOpen));
  };

  const filteredData = useMemo(() => {
    let computedData: IProduct | undefined = {} as IProduct;

    if (productList) {
      computedData = findArrayItems(productList, {
        productid: +productId,
      });
    }

    return computedData;
  }, [productList, productId]);

  useEffect(() => {
    if (filteredData) {
      const variants = pick(filteredData, [
        "id",
        "name",
        "price",
        "image",
        "color",
      ]);
      dispatch(
        setProductVariants({
          ...variants,
          quantity: 1,
          size: filteredData.productSize?.[0]?.size || "",
        })
      );
    }
  }, [dispatch, filteredData]);

  useEffect(() => {
    if (productList && filteredData) {
      let groupedList = filterItems(productList, {
        group: filteredData.group,
      });
      dispatch(setGroupedProducts(groupedList));
    }
  }, [dispatch, filteredData, productList]);

  if (!filteredData) {
    return <></>;
  }

  return (
    <>
      <Sizechart
        visibilty={isSizeChartVisible}
        toggleSizeChart={toggleSizeChart}
      />
      <CartDrawer isVisible={isCartOpen} handleClose={toggleCartDraw} />
      <ReviewModal isVisible={isReviewOpen} handleClose={toggleReviewDraw} />
      <main className="SelectedProduct">
        <div className="ProductImages">
          <ImageViewer product={filteredData} />
          <PurchaseColumn
            product={filteredData}
            toggleSizeChart={toggleSizeChart}
            toggleCartDraw={toggleCartDraw}
          />
        </div>

        <SectionWrapper isbordered>
          <div className="Grid">
            <div className="Grid__Cell 1/2--tablet-and-up 7/12--lap-and-up 7/12--desk">
              <PageWidth>
                <InfoViewer />
              </PageWidth>
            </div>
            <div className="Grid__Cell 1/2--tablet-and-up 5/12--lap-and-up 5/12--desk">
              <PageWidth>
                <ColorVariants />
                <ProductAbout product={filteredData} />
                {/* <ProductDeliveryForm /> */}
              </PageWidth>
            </div>
          </div>
        </SectionWrapper>

        <SectionWrapper isbordered>
          <Container>
            <SectionHeader heading="Customer Reviews" />
            <Reviews
              product={filteredData}
              toggleReviewDraw={toggleReviewDraw}
            />
          </Container>
        </SectionWrapper>
      </main>
    </>
  );
};

export default SelectedProduct;
