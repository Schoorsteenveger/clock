const deg = 1;
const hour = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');



setInterval(() => {
    let day = new Date;
    let currentHour = day.getHours() * 30;
    let currentMinute = day.getMinutes() * deg;
    let currentSeconds = day.getSeconds() * deg;

    hour.style.transform = `rotateZ(${(currentHour) + (currentMinute / 12)}deg)`;
    minutes.style.transform = `rotateZ(${(currentMinute)}deg)`;
    seconds.style.transform = `rotateZ(${(currentSeconds)}deg)`;
})