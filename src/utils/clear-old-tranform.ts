export const clearAllTransform = () => {
  const elements = [...document.querySelectorAll(".pagination-container"), ...document.querySelectorAll(".dot")];
  elements.forEach((el) => {
    const element = el as HTMLElement;
    element.style.transform = "";
    if (element.classList.contains("dot")) {
      element.style.left = "";
      element.style.top = "";
    }
  });
};
