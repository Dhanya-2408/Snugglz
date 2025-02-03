import { useAppSelector } from "../../redux/store";
import { Banner } from "../../components/Home/Banner/Banner";
import { InstaFeed } from "../../components/Home/InstaFeeds";
import { HotDeals } from "../../components/Home/Collections/HotDeals";
import { SaleItem } from "../../components/Home/Collections/SaleItem";
import { ShopFeatures } from "../../components/Home/Collections/ShopFeatures";
import { PhotoGallery } from "../../components/Home/Collections/PhotoGallery";
import {
  collection,
  productCollection,
} from "../../redux/slices/home/home.selector";
import { AnnouncementBar } from "../../components/AnnouncementBar/AnnouncementBar";
import { FeateredCollection } from "../../components/Home/Collections/FeateredCollection/FeateredCollection";
import { groupByPropValue } from "../../utils/generics";
import {
  CollectionEnum,
} from "../../redux/slices/home/home.type";
import { CategoriesView } from "../../components/Home/Collections/CategoriesView";
import { ExploreView } from "../../components/Home/Collections/ExploreView";

const Home = () => {
  const { data: collectionData } = useAppSelector(collection);
  const { data: productsData } = useAppSelector(productCollection);

  // Collection
  const groupedCollection = groupByPropValue(collectionData || [], "type");
  const menCollection = groupedCollection.get(CollectionEnum.MEN);
  const womenCollection = groupedCollection.get(CollectionEnum.WOMEN);

  // console.log(productsData);

  return (
    <main className="maincontent">
      <Banner />
      <AnnouncementBar />
      <PhotoGallery />
      <HotDeals />
      <CategoriesView collectionsData={menCollection || []} />
      <ExploreView exploreData={womenCollection || []} />
      <SaleItem saleData={productsData?.selling} />
      <FeateredCollection featureData={productsData?.feature} />
      <InstaFeed instaData={productsData?.trending} />
      <ShopFeatures />
    </main>
  );
};

export default Home;
