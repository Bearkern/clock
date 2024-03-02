const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');

setInterval(() => {
  const date = new Date();
  const seconds = date.getSeconds();
  const minutes = date.getMinutes();
  const hours = date.getHours();

  const secondRotation = seconds * 6;
  const minuteRotation = minutes * 6;
  const hourRotation = hours * 30 + minutes / 2;

  secondHand.style = `transform: translate(-50%, -100%) rotate(${secondRotation}deg)`;
  minuteHand.style = `transform: translate(-50%, -95%) rotate(${minuteRotation}deg)`;
  hourHand.style = `transform: translate(-50%, -95%) rotate(${hourRotation}deg)`;
}, 1000);



