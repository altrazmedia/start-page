window.Shortcuts = (function () {
  const keyMap = {
    g: () => window.open("http://mail.google.com", "_blank"),
    f: () => window.open("http://facebook.com", "_blank"),
    m: () => window.open("http://messenger.com", "_blank"),
    t: () => window.open("http://twitter.com", "_blank"),
  };

  window.addEventListener("keypress", (e) => {
    if (e.target.tagName === "INPUT") return;
    const key = e.key;
    const callback = keyMap[key];
    if (callback) callback(e);
  });

  return {
    add: (key, cb) => {
      keyMap[key] = cb;
    },
  };
})();
