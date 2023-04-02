const haveScript = () => {
  return document.getElementById("script-page");
};

export const removeScript = () => {
  if (!!haveScript()) {
    try {
      document.getElementById("app")?.removeChild(haveScript()!);
      document.body.removeChild(haveScript()!);
    } catch (e) {}
  }
};

const addScript = (script: HTMLScriptElement) => {
  const scriptInPage = haveScript();
  if (script) {
    //  if (scriptInPage) throw new Error("ja existe um script na pagina");

    document.body.appendChild(script);
  }
};

const getScrip = (view: string) => {
  const div = document.createElement("div");
  div.innerHTML = view;
  const script = div.querySelector("#script-page") as HTMLScriptElement;

  return script;
};

export const injectScript = (view: string) => {
  removeScript();
  const script = getScrip(view);

  addScript(script!);
};
