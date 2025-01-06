import React, { lazy, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/css/navigation";
import "./EventPage.scss";
import "../../styles/EventKeyframes.scss";
import { PeriodsType } from "types";
import { Navigation } from "swiper/modules";
const EventCard = lazy(() => import("../EventCard/EventCard"));

type Props = { activePeriod: number; periods: PeriodsType; screenWidth: number };

const EventPage: React.FC<Props> = ({ activePeriod, periods, screenWidth }) => {
  const events = periods[activePeriod].events;
  const [activeIndex, setActiveIndex] = useState(0);

  const screenCheck = (num: number) => screenWidth >= num
  const smCheck = screenCheck(480);

  const handleSlideChange = (swiper: any) => {
    setActiveIndex(swiper.activeIndex);
  };

  return (
    <div className="event-page">
      <Swiper
        centeredSlides={false}
        navigation={smCheck}
        slidesPerView={!smCheck ? 1.5 : 3}
        spaceBetween={30}
        slidesOffsetAfter={!smCheck ? 120 : 0}
        onSlideChange={handleSlideChange}
        modules={[Navigation]}
      >
        {events.map((event, index) => (
          <SwiperSlide key={`${activePeriod}-${index}`} className={'fade-in'}>
            <EventCard
              year={event.year}
              description={event.description}
              classIndex={!smCheck && index !== activeIndex ? "element-slide" : ""}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default React.memo(EventPage);
