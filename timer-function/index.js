let timer;
let time = 0;

const timerDisplay = document.getElementById("timer");
const startDisplay = document.getElementById("start");
const pauseDisplay = document.getElementById("pause");
const restartDisplay = document.getElementById("restart");

function formatTime(seconds) {
  let hours = Math.floor(seconds / 3600);
  let minutes = Math.floor((seconds % 3600) / 60);
  let secs = seconds % 60;

  hours = hours < 10 ? `0${hours}` : hours;
  minutes = minutes < 10 ? `0${minutes}` : minutes;
  secs = secs < 10 ? `0${secs}` : secs;

  console.log(`${hours}:${minutes}:${secs}`);
  return `${hours}:${minutes}:${secs}`;
}

startDisplay.addEventListener("click", startTimer);

function startTimer() {
  startDisplay.textContent = "Resume";
  pauseDisplay.classList.add("pause");
  pauseDisplay.classList.remove("hidden");
  timer = setInterval(() => {
    time++;
    timerDisplay.textContent = formatTime(time);
  }, 1000);
}

pauseDisplay.addEventListener("click", pauseTimer);

function pauseTimer() {
  pauseDisplay.classList.add("hidden");

  //   pauseDisplay.style.marginLeft = "30px";
  clearInterval(timer);
}

restartDisplay.addEventListener("click", restartTimer);

function restartTimer() {
  clearInterval(timer);
  time = 0;
  timerDisplay.textContent = formatTime(time);
  pauseDisplay.classList.add("hidden");
}
