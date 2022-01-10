// specifying hands of the watch by ID
const hourHand = document.getElementById("hour_hand");
const minuteHand = document.getElementById("minute_hand");
const secondHand = document.getElementById("second_hand");

// Animating watch movement
function animate() {



const date = new Date();

// Get current hours minutes and seconds
const hour = date.getHours();
const minute = date.getMinutes();
const second = date.getSeconds();

// Rotate watch hands based on current time
hourHand.setAttribute("transform", `rotate(${(360/12) * hour})`);
minuteHand.setAttribute("transform", `rotate(${(360/60) * minute})`);
secondHand.setAttribute("transform", `rotate(${(360/60) * second})`);

}
