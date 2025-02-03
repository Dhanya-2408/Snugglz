import { FC, useMemo } from "react";
import useDebounce from "../../../hooks/useDebounce";
import { genericSearch } from "../../../utils/generics";
import { ProductItem } from "../../ProductItem/ProductItem";
import { IProduct } from "../../../redux/slices/collection/collection.type";
import { EmptySearchIcon } from "../../../assets/icons/EmptySearch.icon";

interface IProps {
  searchValue: string;
  productsData: IProduct[];
}

export const SearchResults: FC<IProps> = (props: IProps) => {
  const { searchValue = "", productsData = [] } = props;

  const debouncedSearchTerm = useDebounce<string>(searchValue, 500);

  const filteredData = useMemo(() => {
    let computedData: IProduct[] = productsData || [];

    if (debouncedSearchTerm) {
      const searchKeys: Array<keyof IProduct> = [
        "name",
        "collection",
        "productid",
      ];

      computedData = computedData?.filter((pdt: IProduct) =>
        genericSearch(pdt, searchKeys, debouncedSearchTerm)
      );
    }

    return computedData;
  }, [productsData, debouncedSearchTerm]);

  if (!filteredData.length) {
    return (
      <div className="Search__NotFound">
        <span className="Search__NotFound--text u-h6 Heading">
          Nothing matches your search
        </span>
        <span>
          <EmptySearchIcon />
        </span>
      </div>
    );
  }

  return (
    <div className="Search__Results">
      <div className="Search__Results--Title Heading u-h5">
        <span className="Text--subdued ">{filteredData?.length} results</span>
      </div>
      <div className="Search__Results--Content">
        {filteredData &&
          filteredData.map((product: IProduct) => (
            <ProductItem key={product.productid} product={product} />
          ))}
      </div>
    </div>
  );
};
