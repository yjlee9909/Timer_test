// 타이머 다시 구현
const main = document.querySelector('#app');
const inpHour = main.querySelector('.hour');
const inpMin = main.querySelector('.min');
const inpSec = main.querySelector('.sec');

const nonStartBtn = main.querySelector('.btn-start-disabled');
const nonResetBtn = main.querySelector('.btn-reset-disabled');
const onStartBtn = document.querySelector('.defStart');

const startImg = document.querySelector('.img-start');
const resetImg = document.querySelector('.img-reset');

let timer;
let time = 0;
let timeHour = 0;
let timeMin = 0;
let timeSec = 0;

// 00 할당
inpHour.textContent = String(timeHour).padStart(2,'0');
inpMin.textContent = String(timeMin).padStart(2,'0');
inpSec.textContent = String(timeSec).padStart(2,'0');

// input 입력 글자수 제한하기 (number)