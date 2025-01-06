import React, { useEffect } from "react";
import { PeriodsType } from "types";
import { clearAllTransform } from "../../utils/clear-old-tranform";

type Props = {
  active: number;
  screenWidth: number;
  themes: PeriodsType;
  handleSetActive: (active: number) => void;
};

const Pagination: React.FC<Props> = ({ active, screenWidth, themes, handleSetActive }) => {
  useEffect(() => {
    if (screenWidth < 1480) {
      clearAllTransform();
    }
  }, [active, screenWidth]);

  if (screenWidth < 1480)
    return (
      <div className="flex-center pagination-container">
        {themes.map((_, i) => (
          <div key={i} className={active === i ? "pagination-target" : "pagination-element"}></div>
        ))}
      </div>
    );
  else
    return (
      <div className="flex-center circle-pagination">
        {themes.map((theme, i) => (
          <div
            key={i}
            className={(active === i ? "circle-pagination-target target-string" : "circle-pagination-element") + " dot"}
            style={
              {
                "--number": `'${i + 1}'`,
              } as React.CSSProperties
            }
            onClick={() => handleSetActive(i)}
          >
            <div className="theme-category">{active === i && theme.category}</div>
          </div>
        ))}
      </div>
    );
};

export default React.memo(Pagination);
