(function () {
  const key = `da464aac45e5c69dc25ccf377a41b95a7142e19600953ec8a31de23f9e63c861`;
  const collection = "827743";
  const url = `https://api.unsplash.com/photos/random?client_id=${key}&collections=${collection}&orientation=landscape`;
  const element = document.getElementById("bg-img");
  const reloadButton = document.getElementById("reload-btn");

  const backupImages = [
    "https://images.unsplash.com/photo-1571208756906-92fea1cc1087?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80",
    "https://images.unsplash.com/photo-1571388826617-5a9094f5f9ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80",
    "https://images.unsplash.com/photo-1559530259-cd011f67f2c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1549558549-415fe4c37b60?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1865&q=80",
  ];

  fetchImage();

  reloadButton.addEventListener("click", fetchImage);
  window.Shortcuts.add("r", fetchImage);

  function fetchImage() {
    fetch(url)
      .then((res) => res.json())
      .then(onImageFetched)
      .catch(onFetchError);
  }

  function onImageFetched(data) {
    const { full: image } = data.urls;
    applyImage(image);
  }

  function applyImage(img) {
    element.classList.remove("load");
    element.setAttribute("src", img);
    const interval = setInterval(() => {
      if (element.complete) {
        element.classList.add("load");
        clearInterval(interval);
      }
    }, 100);
  }

  function onFetchError() {
    const imageIndex = Math.ceil(Math.random() * backupImages.length);
    applyImage(backupImages[imageIndex]);
  }
})();
