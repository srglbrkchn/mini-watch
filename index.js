// specifying hands of the watch by ID
const hourHand = document.getElementById("hour_hand");
const minuteHand = document.getElementById("minute_hand");
const secondHand = document.getElementById("second_hand");

const txtElement = document.getElementById("text");

let showDate = true;

// Animating watch movement
function animate() {
  const date = new Date();

  const day = date.getDate();
  const ampm = date.getHours() >= 12 ? "PM" : "AM";


  // Get current hours minutes and seconds
  const hour = date.getHours() + date.getMinutes()/60;
  const minute = date.getMinutes() + date.getSeconds()/60;
  const second = date.getSeconds() + date.getMilliseconds()/1000;

  txtElement.textContent = showDate? day : ampm;

  // Rotate watch hands based on current time
  hourHand.setAttribute("transform", `rotate(${(360/12) * hour})`);
  minuteHand.setAttribute("transform", `rotate(${(360/60) * minute})`);
  secondHand.setAttribute("transform", `rotate(${(360/60) * second})`);

  requestAnimationFrame(animate);
}

requestAnimationFrame(animate);

txtElement.addEventListener("click", () => {
  showDate = !showDate;
});
