const countdownDisplay = document.getElementById("countdown-display");
const countdownDate = new Date("Dec 25, 2021 00:00:00").getTime();
const timeLeft = document.querySelector(".time-left");

function renderCountdown() {
  let x = setInterval(function () {
    const christmas = 24;
    // Task:
    // - Get today's date (you only need the day).
    const currentDate = new Date();

    // - Calculate remaining days.
    const remainingDays = christmas - currentDate.getDate();

    // - Display remaining days in countdownDisplay.
    countdownDisplay.innerHTML = remainingDays;

    //Display hours, minutes, seconds.
    const now = new Date().getTime();
    const countdown = countdownDate - now;

    let hours = Math.floor(
      (countdown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((countdown % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((countdown % (1000 * 60)) / 1000);

    timeLeft.innerHTML = `☃️ ${hours}h ${minutes}m ${seconds}s`;

    if (countdown < 0) {
      clearInterval(x);
      document.getElementById("countdown-display").innerHTML =
        "Merry Christmas!!! 🎅🏽🎄☃️🎁";
    }
  });
}

renderCountdown();

// Stretch goals:
// - Display hours, minutes, seconds.
// - Add a countdown for another festival, your birthday, or Christmas 2022.
