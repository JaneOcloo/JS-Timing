function sayHello() {
  let helloBox = document.querySelector("#hello");
  helloBox.innerHTML = "Bonjour";
}
function displayDate() {
  let date = document.querySelector("#date");
  date.innerHTML = new Date();
}
setTimeout(sayHello, 1000);
displayDate();
setInterval(displayDate, 1000);

let today = moment().format(`ddd Do MMMM`);
let todayElement = document.querySelector("#today");
todayElement.innerHTML = `Today is ${today}`;

let tomorrow = moment().add(1, "day").format("ddd Do, MMMM");
let tomorrowElement = document.querySelector("#tomorrow");
tomorrowElement.innerHTML = `Tomorrow will be ${tomorrow}`;
