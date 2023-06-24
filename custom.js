let hour = document.querySelector('.hour');
let min = document.querySelector('.min');
let sec = document.querySelector('.sec');

function clock() {
  let now = new Date();
  hour.innerHTML = String(now.getHours()).padStart('2', '0');
  min.innerHTML = String(now.getMinutes()).padStart('2', '0');
  sec.innerHTML = String(now.getSeconds()).padStart('2', '0');
}

setInterval(clock, 1000);