import { routes } from "./core/router";
import { injectScript } from "./core/scriptContent";
import { addModules } from "./core/addModules";
import { navigateTo, localModules } from "./core/modules";
import myRoutes from "../src/routes.json";

const rootElement = document.getElementById("app");

const render = async () => {
  const allRoutes = await routes(myRoutes);

  const path = window.location.pathname;
  const component = allRoutes.find((el) => el.path === path);

  if (!component)
    //@ts-ignore
    return (rootElement?.innerHTML = allRoutes.find(
      (el) => el.path === "/404"
    )?.view);

  rootElement!.innerHTML = component!.view;
  injectScript(component?.view!);
  addModules([navigateTo, localModules]);
};
render();

window.addEventListener("popstate", () => {
  render();
});
