setTimeout(function () {
  var loadingScreen = document.getElementById("loading-screen");
  loadingScreen.style.transition = "opacity 1s";
  loadingScreen.style.opacity = "0";
  setTimeout(function () {
    loadingScreen.style.display = "none";
  }, 1000); // Wait for fade out
}, 1850); // Match animation duration
