import React from "react";
import "./EventCard.scss";

type Props = {
  year: string;
  description: string;
  classIndex: string;
};
const EventCard: React.FC<Props> = ({ year, description, classIndex }) => {
  return (
    <div className={`event-card ${classIndex}`}>
      <h3>{year}</h3>
      <p>{description}</p>
    </div>
  );
};

export default React.memo(EventCard);
