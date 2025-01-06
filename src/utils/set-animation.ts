import { getBetweenStyleForDots } from "./get-between-style-for-dots";

export const setAnimation = (angle: number, active: number) => {
  const circle = document.getElementsByClassName("circle-pagination");
  if (circle && circle.length > 0) {
    const circleElement = circle[0] as HTMLElement;
    circleElement.style.transform = `rotate(${angle}deg)`;
    getBetweenStyleForDots({active, angle})
  }
};