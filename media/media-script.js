var mainSite = "dekub.eu";
var loadingScreen = document.getElementById("loading-screen");
var isFromMainSite =
  document.referrer.includes(mainSite) ||
  document.referrer.includes("localhost") ||
  document.referrer.includes("192.168.1.109") ||
  document.referrer.includes("127.0.0.1");
if (isFromMainSite) {
  if (loadingScreen) loadingScreen.style.display = "none";
} else {
  setTimeout(function () {
    if (!loadingScreen) return;
    loadingScreen.style.transition = "opacity 1s";
    loadingScreen.style.opacity = "0";
    setTimeout(function () {
      loadingScreen.style.display = "none";
    }, 1000); // Wait for fade out
  }, 1850); // Match animation duration
}
