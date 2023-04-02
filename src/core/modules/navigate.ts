export const navigateTo = () => {
  const navigators = document.querySelectorAll(`[data-to]`);
  navigators.forEach((nav) => {
    nav.addEventListener("click", (event) => {
      event.preventDefault();
      //@ts-expect-error
      window.history.pushState({}, "", nav.dataset.to);
      window.dispatchEvent(new PopStateEvent("popstate"));
    });
  });
};
