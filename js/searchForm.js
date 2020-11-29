(function () {
  const form = document.getElementById("google-form");
  const input = document.getElementById("google-input");

  form.addEventListener("submit", onSubmit);

  function onSubmit(ev) {
    ev.preventDefault();
    const inputValue = input.value;
    inputValue.trim() && searchForValue(inputValue);
  }

  function searchForValue(value) {
    value = value.replace(" ", "+");
    const link = `https://google.com/search?q=${value}`;
    window.open(link, "blank");
  }

  window.Shortcuts.add("/", (e) => {
    e.preventDefault();
    input.focus();
  });
})();
