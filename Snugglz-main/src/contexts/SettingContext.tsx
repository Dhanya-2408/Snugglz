import { FC, useState, createContext, useContext } from "react";
import { ChildrenType } from "../models/types";

type SettingContextType = {
  isoverlayHidden: boolean;
  toggleOverlay: () => void;
  toggleNoScroll: () => void;
};

export const SettingContext = createContext<SettingContextType>(
  {} as SettingContextType
);

export const SettingProvider: FC<ChildrenType> = ({
  children,
}: ChildrenType) => {
  const [isoverlayHidden, setIsOverlayHidden] = useState(true);

  const toggleNoScroll = () => {
    document.body.classList.toggle("no-scroll");
  };

  const toggleOverlay = () => {
    setIsOverlayHidden(!isoverlayHidden);
    toggleNoScroll();
  };

  return (
    <SettingContext.Provider
      value={{ isoverlayHidden, toggleOverlay, toggleNoScroll }}
    >
      {children}
    </SettingContext.Provider>
  );
};

export const useSetting = () => useContext(SettingContext);
