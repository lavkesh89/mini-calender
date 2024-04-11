const dateElement = document.getElementById('date');
const dayElement = document.getElementById('day');
const monthElement = document.getElementById('month');
const yearElement = document.getElementById('year');

const today = new Date();

const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const allMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

dateElement.innerHTML = (today.getDate() < 10 ? "0" : "") + today.getDate();
dayElement.innerHTML = weekDays[today.getDay()];
monthElement.innerHTML = allMonths[today.getMonth()];
yearElement.innerHTML = today.getFullYear();
