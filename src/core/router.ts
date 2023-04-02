export interface Route {
  path: string;
  view: string;
}

const getView = async (name: string) => {
  const response = await fetch(`/views/${name}.html`);
  const html = await response.text();
  return html;
};

export const routes = async (routes: Route[]) => {
  return Promise.all(
    routes.map(async (route) => {
      return {
        path: route.path,
        view: await getView(route.view),
      };
    })
  );
};
