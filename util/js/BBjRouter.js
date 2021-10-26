window.BBjRouter = (() => {

  const router = new Navigo("/", { hash: true, noMatchWarning: false });
  const fire = (type, detail) => {
    const container = document.getElementsByClassName("bbj-router")[0]
    container.basisDispatchCustomEvent(container, {
      type,
      detail: JSON.stringify(detail)
    })
  }

  return {
    navigo() {
      return router;
    },

    on(path, name) {
      router.on({
        [path]: {
          as: name,
          uses: ({ data, params, queryString }) => {
            fire('bbj-router-matched', { path, data, params, queryString });
          },
        }
      });
    },

    off(path) {
      router.off(path);
    },

    navigate(path, silent = false) {
      router.navigate(path, {
        historyAPIMethod: 'pushState',
        updateBrowserURL: true,
        callHandler: !Boolean(silent),
        callHooks: !Boolean(silent),
      });
    },

    resolve() {
      router.resolve();
    }
  };
})();