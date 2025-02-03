import React from "react";
import { Accordian } from "../../../ui_kits/Accordian/Accordian";
import { Description } from "./ProductDescription";

export const InfoViewer = () => {
  return (
    <div>
      <Accordian title="SPECIFICATION" child={<Description />} />
      <Accordian title="SPECIFICATION" child={<Description />} />
      <Accordian title="SPECIFICATION" child={<Description />} />
    </div>
  );
};
