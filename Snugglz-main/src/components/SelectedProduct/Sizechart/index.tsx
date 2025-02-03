import { Modal } from "../../../ui_kits/Modal/Modal";
import { Container } from "../../../ui_kits/global/Container.styles";
import "./Style.scss";

interface IProps {
  visibilty: boolean;
  toggleSizeChart: () => void;
}

export const Sizechart = (props: IProps) => {
  const { visibilty, toggleSizeChart } = props;

  return (
    <Modal
      isDark
      isFullScreen
      classes="Modal__SizeChart"
      isHidden={!visibilty}
      onClose={toggleSizeChart}
    >
      <Container isExtraNarrow>
        <div>
          <div className="hidden-phone">
            <img
              src="https://cdn.shopify.com/s/files/1/2428/5565/files/desktop-size-chart.png"
              alt="SizeChart"
            />
          </div>
          <div className="hidden-tablet-and-up">
            <img
              src="https://cdn.shopify.com/s/files/1/2428/5565/files/mobile-size-chart.png"
              alt="SizeChart"
            />
          </div>
        </div>
      </Container>
    </Modal>
  );
};
