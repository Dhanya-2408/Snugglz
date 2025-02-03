import { FC, LazyExoticComponent, Suspense } from "react";
import { LoadingSpinner } from "../../ui_kits/Buttons/TextButton/TextButton.styles";

const Loadable = (Component: LazyExoticComponent<FC>) => (props: any) =>
  (
    <Suspense fallback={<LoadingSpinner />}>
      <Component {...props} />
    </Suspense>
  );

export default Loadable;
