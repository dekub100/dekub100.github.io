setTimeout(function () {
  var loadingScreen = document.getElementById("loading-screen");
  loadingScreen.style.transition = "opacity 1s";
  loadingScreen.style.opacity = "0";
  setTimeout(function () {
    loadingScreen.style.display = "none";
  }, 1000); // Wait for fade out
}, 1850); // Match animation duration

document.addEventListener("DOMContentLoaded", function () {
  const r6Btn = document.getElementById("r6-settings-btn");
  const r6Link = document.getElementById("r6-settings-link");
  const pcBtn = document.getElementById("pc-btn");
  const pcLink = document.getElementById("pc-link");
  const socialBtn = document.getElementById("social-media-btn");
  const settingsText = document.getElementById("settings-text");
  const backBtn = document.getElementById("back-btn");
  const r6Desc = document.getElementById("settings-description-r6");
  const pcDesc = document.getElementById("settings-description-pc");
  const ps2Dots = document.getElementById("ps2-dots");
  if (
    r6Btn &&
    r6Link &&
    pcBtn &&
    pcLink &&
    socialBtn &&
    settingsText &&
    backBtn &&
    r6Desc &&
    pcDesc
  ) {
    r6Link.addEventListener("click", function (e) {
      e.preventDefault();
      // Fade out menu buttons
      r6Btn.classList.add("fade-out");
      pcBtn.classList.add("fade-out");
      socialBtn.classList.add("fade-out");
      setTimeout(function () {
        r6Btn.style.display = "none";
        pcBtn.style.display = "none";
        socialBtn.style.display = "none";
        settingsText.classList.remove("hidden");
        r6Desc.classList.remove("hidden");
        pcDesc.classList.add("hidden");
        if (window.innerWidth <= 700 && ps2Dots) {
          ps2Dots.classList.add("dots-bottom-mobile");
        }
      }, 500); // Wait for fade out
    });
    pcLink.addEventListener("click", function (e) {
      e.preventDefault();
      // Fade out menu buttons
      r6Btn.classList.add("fade-out");
      pcBtn.classList.add("fade-out");
      socialBtn.classList.add("fade-out");
      setTimeout(function () {
        r6Btn.style.display = "none";
        pcBtn.style.display = "none";
        socialBtn.style.display = "none";
        settingsText.classList.remove("hidden");
        r6Desc.classList.add("hidden");
        pcDesc.classList.remove("hidden");
        if (window.innerWidth <= 700 && ps2Dots) {
          ps2Dots.classList.add("dots-bottom-mobile");
        }
      }, 500); // Wait for fade out
    });
    backBtn.addEventListener("click", function (e) {
      e.preventDefault();
      r6Btn.style.display = "";
      pcBtn.style.display = "";
      socialBtn.style.display = "";
      r6Btn.classList.remove("fade-out");
      pcBtn.classList.remove("fade-out");
      socialBtn.classList.remove("fade-out");
      settingsText.classList.add("hidden");
      r6Desc.classList.remove("hidden");
      pcDesc.classList.add("hidden");
      if (window.innerWidth <= 700 && ps2Dots) {
        ps2Dots.classList.remove("dots-bottom-mobile");
      }
    });
  }
});
