import { ArrowDownIcon } from "../../assets/icons/Arrow.icon";
import useScrollPosition from "../../hooks/useScrollPosition";
import "./ScrollTop.scss";

export const ScrollTop = () => {
  const { scrollPosition, scrollTop } = useScrollPosition();

  return (
    <div
      className="ScrollTop"
      onClick={scrollTop}
      style={{ visibility: scrollPosition > 400 ? "visible" : "hidden" }}
    >
      <ArrowDownIcon />
    </div>
  );
};
