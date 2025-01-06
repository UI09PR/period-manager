import React from "react";
import "./Period.scss";
import { PeriodsType } from "types";

type Props = {
  activePeriod: number;
  periods: PeriodsType;
};

const Period: React.FC<Props> = ({ activePeriod, periods }) => {
  const { start, end } = periods[activePeriod];

  return (
    <div className="period">
      <div className="title-period">
        <p>Исторические даты</p>
      </div>
      <h2 className="flex-around period-conteiner" key={activePeriod}>
        <p className="start fade-in">{start}</p>
        <p className="end fade-in">{end}</p>
      </h2>
    </div>
  );
};

export default React.memo(Period);
