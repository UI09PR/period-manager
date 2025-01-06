import React from "react";
import "./Controls.scss";
import Pagination from "./PaginationView";
import { PeriodsType } from "types";

type ControlsProps = {
  handleSetActive: (active: number) => void;
  active: number;
  themes: PeriodsType;
  screenWidth: number;
};

const Controls: React.FC<ControlsProps> = ({ handleSetActive, active, themes, screenWidth }) => {
  return (
    <>
      <div className="controls">
        <p>{`${active + 1}/${themes.length}`}</p>
        <div className="controls-buttons">
          <button onClick={() => handleSetActive(active - 1)}>{"<"}</button>
          <button onClick={() => handleSetActive(active + 1)}>{">"}</button>
          <Pagination active={active} screenWidth={screenWidth} themes={themes} handleSetActive={handleSetActive} />
        </div>
      </div>
    </>
  );
};

export default React.memo(Controls);
