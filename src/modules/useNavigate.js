export const useNavigate = (route) => {
  window.history.pushState({}, "", route);
  window.dispatchEvent(new PopStateEvent("popstate"));
};
