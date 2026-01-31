// GMT+8
const targetDate = new Date("2026-02-22T00:00:00").getTime();
const openDate = new Date("2026-02-02T00:00:00").getTime();

let hasExpired = false;
let countdownInterval = null;

function updateCountdown() {
  const now = new Date().getTime();
  const distance = targetDate - now;
  const open = openDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;

  if (open >= 0) {
    waitRegisterButton();
  } else {
    const registerBtn = document.querySelector(".btn-register");
    registerBtn.classList.remove("btn-disabled");
    registerBtn.innerText = "Register Now!";
  }

  if (distance <= 0 && !hasExpired) {
    hasExpired = true;

    document.getElementById("days").innerText = 0;
    document.getElementById("hours").innerText = 0;
    document.getElementById("minutes").innerText = 0;
    document.getElementById("seconds").innerText = 0;

    setTimeout(animateThx);
    clearInterval(countdownInterval);
    disableRegisterButton();
  }
}

function waitRegisterButton() {
  const registerBtn = document.querySelector(".btn-register");
  registerBtn.classList.add("btn-disabled");
  registerBtn.innerText = "Coming Soon!";
}

function disableRegisterButton() {
  const registerBtn = document.querySelector(".btn-register");
  registerBtn.classList.add("btn-disabled");
  registerBtn.innerText = "Registration is Closed!";
}

function animateThx() {
  const isMobile = window.innerWidth <= 768;
  const countdown = document.querySelector(".countdown");
  const timeSegments = document.querySelectorAll(".time-value");
  const timeLabels = document.querySelectorAll(".time-label");

  timeLabels.forEach((label) => (label.style.display = "none"));
  countdown.classList.add("thx-mode");

  const letters = isMobile ? ["Thank", "You", "🎊", "🎊"] : ["🎊", "Thank", "You", "🎊"];

  timeSegments.forEach((segment, index) => {
    setTimeout(() => {
      segment.classList.add("thx-animate");
      segment.innerText = letters[index];
    }, index * 250); // Increased delay for better visibility
  });

  // Optional: Add confetti effect or additional animation
  setTimeout(
    () => {
      countdown.classList.add("thx-complete");
    },
    letters.length * 200 + 500,
  );
}

window.addEventListener("DOMContentLoaded", () => {
  countdownInterval = setInterval(updateCountdown, 500);
});
