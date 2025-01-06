import React, { useEffect, useState } from "react";
import Period from "./components/Period/Period";
import EventPage from "./components/EventPage/EventPage";
import periods from "./mocks/period";
import Controls from "./components/Controls/Controls";
import { setAnimation } from "./utils/set-animation";
import useScreenSize from "./customHooks/useScreenSize";

const App: React.FC = () => {
  const [activePeriod, setActivePeriod] = useState(0);
  const [deg, setDeg] = useState(-45);
  const screenSize = useScreenSize();

  useEffect(() => {
    setAnimation(deg, activePeriod);
  }, [activePeriod, screenSize]);

  const handleSetActive = (targetIndex: number) => {
    targetIndex = targetIndex % periods.length < 0 ? (targetIndex = periods.length - 1) : targetIndex % periods.length;
    const totalPeriods = periods.length;
    const difference = targetIndex - activePeriod;

    const shortestPath =
      Math.abs(difference) <= totalPeriods / 2
        ? difference
        : difference > 0
        ? difference - totalPeriods
        : difference + totalPeriods;

    const newDeg = deg + shortestPath * -(360 / periods.length);

    setDeg(newDeg);
    setActivePeriod(targetIndex);
  };

  return (
    <div className="container">
      {screenSize.width >= 480 && (
        <>
          <div className="middle-line-vertical"></div>
          <div className="middle-line-horizontal"></div>
        </>
      )}
      <div className="left-line"></div>
      <div className="main-screen">
        <Period activePeriod={activePeriod} periods={periods} />
        <EventPage activePeriod={activePeriod} periods={periods} screenWidth={screenSize.width} />
        <Controls
          handleSetActive={handleSetActive}
          active={activePeriod}
          themes={periods}
          screenWidth={screenSize.width}
        />
      </div>
      <div className="right-line"></div>
    </div>
  );
};

export default App;
