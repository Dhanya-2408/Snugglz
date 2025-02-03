import { FC } from "react";
import { MenuBody } from "./MenuBody";
import { DrawerView } from "../../../ui_kits/Drawer/Drawer.compenent";
import "./MenuDrawer.scss";

interface IProps {
  handleClick: () => void;
  visibleMenu: boolean;
}

export const MenuDrawer: FC<IProps> = (props: IProps) => {
  const { handleClick, visibleMenu } = props;

  return (
    <DrawerView
      body={<MenuBody handleClick={handleClick} />}
      position="left"
      title="Menu"
      isHidden={visibleMenu}
      handleClose={handleClick}
      classes="SidebarMenu"
      spacingTight={true}
    />
  );
};
