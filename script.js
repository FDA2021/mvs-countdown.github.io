const seconds = document.querySelector(".seconds .number"),
  minutes = document.querySelector(".minutes .number"),
  hours = document.querySelector(".hours .number"),
  days = document.querySelector(".days .number");

// Set the target date and time
const targetDate = new Date("2024-3-13T12:00:00+02:00");

const timeFunction = setInterval(updateCountdown, 1000);

  if (distance < 1000) {
    clearInterval(x);
    document.getElementById("the-timer").innerHTML = "0";
  }else{
document.getElementById("the-timer").innerHTML = minutes + "m " + seconds + "s ";

function updateCountdown() {
  const now = new Date();
  const timeRemaining = targetDate - now;

  if (timeRemaining <= 0) {
    clearInterval(timeFunction);
    seconds.textContent = "00";
    minutes.textContent = "00";
    hours.textContent = "00";
    days.textContent = "00";
  } else {
    const secondsRemaining = Math.floor((timeRemaining / 1000) % 60);
    const minutesRemaining = Math.floor((timeRemaining / 1000 / 60) % 60);
    const hoursRemaining = Math.floor((timeRemaining / (1000 * 60 * 60)) % 24);
    const daysRemaining = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));

    seconds.textContent = secondsRemaining < 10 ? `0${secondsRemaining}` : secondsRemaining;
    minutes.textContent = minutesRemaining < 10 ? `0${minutesRemaining}` : minutesRemaining;
    hours.textContent = hoursRemaining < 10 ? `0${hoursRemaining}` : hoursRemaining;
    days.textContent = daysRemaining < 10 ? `0${daysRemaining}` : daysRemaining;
  }
}
