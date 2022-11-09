const main = document.querySelector('#app');
const inpHour = main.querySelector('.hour');
const inpMin = main.querySelector('.min');
const inpSec = main.querySelector('.sec');

const disStartBtn = main.querySelector('.btn-start-disabled');
const disResetBtn = main.querySelector('.btn-reset-disabled');

let timeHour = 0;
let timeMin = 0;
let timeSec = 0;

function addTime(name) {
    // 초
    if (name === '.sec') {
        const secTxt = main.querySelector(name);
        timeSec += 10;
        secTxt.textContent = timeSec;
    }
    // 분
    if (name === '.min') {
        const minTxt = main.querySelector(name);
        timeMin += 10;
        minTxt.textContent = timeMin;
    }
    // 시
    if (name === '.hour') {
        const hourTxt = main.querySelector(name);
        timeHour += 10;
        hourTxt.textContent = timeHour;
    }
}

inpSec.addEventListener('click', () => {
    addTime('.sec')
});
inpMin.addEventListener('click', () => {
    addTime('.min')
});
inpHour.addEventListener('click', () => {
    addTime('.hour')
});

disStartBtn.addEventListener('click', () => {
})