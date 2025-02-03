import { IProduct } from "../../../redux/slices/collection/collection.type";
import { IF } from "../../../ui_kits/IF";
import { SectionHeader } from "../../../ui_kits/Sections/SectionHeader/SectionHeader";
import { SectionWrapper } from "../../../ui_kits/Sections/SectionWrapper/SectionWrapper";
import { isEmpty } from "../../../utils/script";
import { InstaFeedItem } from "./InstaFeedItem";
import "./Style.scss";

interface IProps {
  instaData: IProduct[] | undefined;
}

export const InstaFeed = (props: IProps) => {
  const { instaData = [] } = props;

  const SlicedInstaData = instaData.slice(0, 8);

  return (
    <section className="Instafeed">
      <SectionWrapper isbordered>
        <SectionHeader
          heading="@SNUGGLZ"
          subHeading="FOLLOW US & SHOP INSTAGRAM"
        />
        <div className="Instafeed__Container Grid">
          <IF condition={!isEmpty(instaData)}>
            {SlicedInstaData.map((item: IProduct) => (
              <InstaFeedItem key={item.id} instaFeedItem={item} />
            ))}
          </IF>
        </div>
      </SectionWrapper>
    </section>
  );
};
