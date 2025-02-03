import { useMemo } from "react";
import { useLocation } from "react-router-dom";

function usePath() {
  const { pathname } = useLocation();

  const path = useMemo(() => {
    const pathArray = pathname.split("/").filter(Boolean);
    const pathValue =
      pathArray.length > 1 ? pathArray[pathArray.length - 1] : "";
    return pathValue;
  }, [pathname]);

  return path;
}

export default usePath;
