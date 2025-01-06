import { debounce } from "./debounce";

const debouncedRecalculatePositions = debounce(
  (dots: NodeListOf<Element>, radius: number, activeIndex: number | undefined, normalizedAngle: number) => {
    recalculatePositions(dots, radius, activeIndex, normalizedAngle);
  },
  100
);

export const getBetweenStyleForDots = (params?: { active: number; angle: number }) => {
  const container = document.querySelector(".circle-pagination");
  if (!container) return;

  const dots = container.querySelectorAll(".dot");
  const radius = container.clientWidth / 2;
  const paramAngel = normalizeAngle(params?.angle ?? 0);

  debouncedRecalculatePositions(dots, radius, params?.active, paramAngel);
  setupObservers(container, dots, radius, params?.active, paramAngel);
};

const normalizeAngle = (angle: number): number => {
  const normalized = angle % 360;

  return normalized < 0 ? normalized + 360 : normalized;
};

const recalculatePositions = (
  dots: NodeListOf<Element>,
  radius: number,
  activeIndex: number | undefined,
  paramAngel: number
) => {
  dots.forEach((dot, index) => {
    const dotElement = dot as HTMLElement;

    const rotation = index === activeIndex ? Math.abs(360 - paramAngel) : Math.abs(paramAngel);
    dotElement.style.transform = `rotate(${rotation}deg)`;

    const angle = (index * 2 * Math.PI) / dots.length;
    const x = radius + radius * Math.cos(angle) - dotElement.clientWidth / 2;
    const y = radius + radius * Math.sin(angle) - dotElement.clientWidth / 2;

    dotElement.style.left = `${x.toFixed()}px`;
    dotElement.style.top = `${y.toFixed()}px`;
  });
};

const setupObservers = (
  container: Element,
  dots: NodeListOf<Element>,
  radius: number,
  activeIndex: number | undefined,
  paramAngel: number
) => {
  const resizeObserver = new ResizeObserver(() => {
    recalculatePositions(dots, radius, activeIndex, paramAngel);
  });

  dots.forEach((dot) => {
    resizeObserver.observe(dot);
  });

  const mutationObserver = new MutationObserver(() => {
    recalculatePositions(dots, radius, activeIndex, paramAngel);
  });

  mutationObserver.observe(container, { childList: true, subtree: true });
};
