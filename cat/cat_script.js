const unlockDate = new Date("2025-02-05T00:00:00"); // Set the unlock date here

function createGuideButton() {
  const descElement = document.querySelector(".desc");

  if (descElement && !document.querySelector(".guide-btn")) {
    const buttonContainer = document.createElement("div");
    buttonContainer.className = "lock";

    const guideButton = document.createElement("a");
    guideButton.className = "guide-btn locked";
    guideButton.textContent = "📄 Lihat Guidebook";
    guideButton.target = "_blank";

    buttonContainer.appendChild(guideButton);
    descElement.appendChild(buttonContainer);
  }
}

function checkUnlock() {
  const now = new Date();
  const guideButton = document.querySelector(".guide-btn");

  if (now > unlockDate) {
    guideButton.classList.remove("locked");
    guideButton.classList.add("unlocked");
    guideButton.href = "#";
  } else {
    guideButton.classList.remove("unlocked");
    guideButton.classList.add("locked");
  }
}

// Auto-run on page load
createGuideButton();
checkUnlock();
setInterval(checkUnlock, 60000);
