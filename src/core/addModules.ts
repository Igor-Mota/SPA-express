type Module = () => void;
export const addModules = (modules?: Module[]) => {
  if (modules) modules.forEach((module) => module());
};
