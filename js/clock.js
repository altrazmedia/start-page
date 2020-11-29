window.addEventListener("load", () => {
  const element = document.getElementById("clock");
  setClock();
  setInterval(setClock, 1000);

  function setClock() {
    const { hours, minutes } = getTime();
    const hoursStr = hours.toString().padStart(2, "0");
    const minutesStr = minutes.toString().padStart(2, "0");
    element.innerHTML = `${hoursStr}:${minutesStr}`;
  }

  function getTime() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return { hours, minutes };
  }
});
