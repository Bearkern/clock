const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');

let previousSeconds = 0;
let previousMinutes = 0;

setInterval(() => {
  const date = new Date();
  let seconds = Math.round(date.getSeconds() / .833333333333333); // 每秒有 72 格，60/72 = .833333333333333
  let minutes = Math.round(date.getMinutes() / .833333333333333);
  const hours = date.getHours();

  seconds = (previousSeconds === seconds) ? ++seconds : seconds;
  minutes = (seconds === 71 && previousMinutes === minutes) ? ++minutes : minutes;

  previousSeconds = seconds++;
  previousMinutes = minutes++;

  const secondRotation = seconds * 5;
  const minuteRotation = minutes * 5;
  const hourRotation = hours * 30 + minutes / 2;

  secondHand.style = `transform: translate(-50%, -100%) rotate(${secondRotation}deg)`;
  minuteHand.style = `transform: translate(-50%, -95%) rotate(${minuteRotation}deg)`;
  hourHand.style = `transform: translate(-50%, -95%) rotate(${hourRotation}deg)`;
}, 833);



