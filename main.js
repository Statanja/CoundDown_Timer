

const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('min');
const secondEl = document.getElementById('seconds');

const newYear = "1 Jan 2024 ";

function countdown(){
    const newYearsDate = new Date(newYear);
    const currentDate = new Date();
    const totalSeconds = (newYearsDate-currentDate)/1000;
    const days =Math.floor(totalSeconds/(3600*24));
    const hours =Math.floor(totalSeconds/3600)%24;
    const minutes = Math.floor(totalSeconds/60)%60;
    const second = Math.floor(totalSeconds)%60;



    daysEl.innerHTML = days;
    hoursEl.innerHTML=hours;
    minutesEl.innerHTML=minutes;
    secondEl.innerHTML=second



}
countdown();
setInterval(countdown,1000)


