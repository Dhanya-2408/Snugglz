import { Fragment, useMemo } from "react";
import useQuery from "../../hooks/useQuery";
import usePath from "../../hooks/usePath";
import { OnclickEvent } from "../../models/types";
import useElementSize from "../../hooks/useElementSize";
import {
  filterArray,
  filterCollections,
  filterItems,
  findArrayItems,
  genericSort,
} from "../../utils/generics";
import { decodeUrl } from "../../utils/textHandler";
import {
  setFilterVisibility,
  setLayoutType,
  setSelectedFilters,
  setSelectedSorter,
  setSorterVisibility,
} from "../../redux/slices/collection/collection.slice";
import {
  allProducts,
  isFilterEnabled,
  isSortEnabled,
  layoutType,
  selectedFilters,
  selectedSorter,
} from "../../redux/slices/collection/collection.selector";
import { useSetting } from "../../contexts/SettingContext";
import {
  IProduct,
  IProductSize,
  ISortCollection,
  LayoutType,
} from "../../redux/slices/collection/collection.type";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { Spinner } from "../../ui_kits/Spinner/Spinner.component";
import { EmptyProducts } from "../../components/EmptyProducts/EmptyProducts";
import { hotDealsData } from "../../components/Home/Collections/HotDeals/data";
import { CollectionSorter } from "../../components/ProductCollection/CollectionSorter";
import { CollectionProducts } from "../../components/ProductCollection/CollectionProducts";
import { CollectionToolbar } from "../../components/ProductCollection/CollectionToolbar/CollectionToolbar";
import { CollectionDrawer } from "../../components/ProductCollection/CollectionDrawer/CollectionDrawer";
import "./Style.scss";

const ProductCollection = () => {
  const dispatch = useAppDispatch();
  const mainCategory = usePath();
  const subCategory = useQuery().get("sc") as string;
  const collection = useQuery().get("collection") as string;
  const discount = useQuery().get("discount") as string;
  const { toggleOverlay } = useSetting();

  const layout = useAppSelector(layoutType);
  const isVisibleSorter = useAppSelector(isSortEnabled);
  const isVisibleFilter = useAppSelector(isFilterEnabled);
  const sorter = useAppSelector(selectedSorter);
  const filters = useAppSelector(selectedFilters);
  const { data: productList, loading } = useAppSelector(allProducts);

  const [toolbarRef, { height: toolbarHeight, top: toolbarTop }] =
    useElementSize();
  const toolBarBottom = toolbarTop + toolbarHeight;

  const handleToggleLayout = (type: LayoutType) => {
    dispatch(setLayoutType(type));
  };

  const handleToggleFilter = () => {
    dispatch(setFilterVisibility(!isVisibleFilter));
  };

  const handleToggleSort = () => {
    toggleOverlay();
    dispatch(setSorterVisibility(!isVisibleSorter));
  };

  const toggleSortClick = (item: ISortCollection) => {
    const value = item.key === sorter?.key ? undefined : item;
    dispatch(setSelectedSorter(value));
    handleToggleSort();
  };

  const resetFilters = (e: OnclickEvent) => {
    e.preventDefault();
    dispatch(setSelectedSorter(undefined));
    dispatch(setSelectedFilters(undefined));
  };

  const filteredData = useMemo(() => {
    let computedData: IProduct[] = productList || [];
    if (productList) {
      computedData = filterItems(productList, {
        maincategory: mainCategory,
        subcategory: decodeUrl(subCategory),
        collection: decodeUrl(collection),
      });
    }
    if (sorter) {
      computedData = [...computedData].sort((PdtA: IProduct, pdtB: IProduct) =>
        genericSort(PdtA, pdtB, {
          property: sorter.field,
          isDescending: sorter.isDescending,
        })
      );
    }
    if (discount) {
      const discountValue = decodeUrl(discount);
      const hotDealItem = findArrayItems(hotDealsData, {
        keyName: discountValue,
      });

      const discountValidation = {
        offer: (offer: number) => {
          if (!discountValue) return true;
          else {
            const min = hotDealItem?.minMaxValues[0] as Number;
            const max = hotDealItem?.minMaxValues[1] as Number;
            return offer >= min && offer <= max;
          }
        },
      };

      computedData = filterArray(computedData, discountValidation as any);
    }
    if (filters) {
      computedData = filterCollections(computedData, {
        color: filters.color || [],
        occation: filters.occasion || [],
      });

      const filtersValidation = {
        productSize: (sizeArray: IProductSize[]) => {
          if (!filters.size?.length) return true;
          return sizeArray.some((sizeEl: IProductSize) =>
            filters.size?.includes(sizeEl.size)
          );
        },
        price: (price: number) => {
          const priceValue = filters.price;
          if (!filters.price) return true;
          else {
            const minMaxValue = priceValue?.match(/\d+/g)?.map(Number) as any;
            const min = minMaxValue[0];
            const max = minMaxValue[1];

            if (!max) {
              return min >= 5000
                ? price > parseInt(min)
                : price < parseInt(min);
            }
            return price >= parseInt(min) && price < parseInt(max);
          }
        },
      };

      computedData = filterArray(computedData, filtersValidation as any);
    }
    return computedData;
  }, [
    productList,
    mainCategory,
    subCategory,
    discount,
    collection,
    sorter,
    filters,
  ]);

  if (loading) {
    return <Spinner />;
  }

  if (!loading && filteredData.length === 0) {
    return <EmptyProducts handleOnClick={resetFilters} />;
  }

  return (
    <Fragment>
      <CollectionSorter
        top={toolBarBottom}
        visibility={isVisibleSorter}
        selectedSorter={sorter}
        togglePopover={handleToggleSort}
        toggleSortClick={toggleSortClick}
      />
      <CollectionDrawer
        visibility={isVisibleFilter}
        toggleFilter={handleToggleFilter}
        resetFilters={resetFilters}
      />
      <div className="CollectionMain">
        <CollectionToolbar
          ref={toolbarRef}
          layoutType={layout}
          toggleSort={handleToggleSort}
          toggleLayout={handleToggleLayout}
          toggleFilter={handleToggleFilter}
        />
        <div className="CollectionInner">
          {/* <div className="CollectionInner__Sidebar CollectionInner__Sidebar--withTopToolbar hidden-pocket">
            <CollectionFilters />
            <IF condition={filters !== undefined}>
              <TextButton
                isSmall
                className="CollectionInner__ResetBtn hidden-pocket"
                onClick={resetFilters}
              >
                RESET
              </TextButton>
            </IF>
          </div> */}
          <CollectionProducts layoutType={layout} ProductData={filteredData} />
        </div>
      </div>
    </Fragment>
  );
};

export default ProductCollection;
