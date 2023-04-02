export const localModules = () => {
  const navigators: HTMLScriptElement[] = Array.from(
    document.querySelectorAll(`[data-module]`)
  );
  navigators.forEach((module: HTMLScriptElement) => {
    module.src = `./modules/${module.dataset.module}`;
  });
};
