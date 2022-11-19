// 타이머 다시 구현
const main = document.querySelector('#app');
const inpHour = main.querySelector('.hour');
const inpMin = main.querySelector('.min');
const inpSec = main.querySelector('.sec');

const nonStartBtn = main.querySelector('.btn-start.disabled');
const nonResetBtn = main.querySelector('.btn-reset.disabled');
const pauseBtn = main.querySelector('.btn-pause.hidden')
// console.log(nonResetBtn)

const startImg = document.querySelector('.img-start');
const resetImg = document.querySelector('.img-reset');

const onStartBtn = document.querySelector('btn-start.startBtnOn');
console.log(onStartBtn);


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
const inputLenFunc = () => {
    if (inpSec.value.length > 2) {
        inpSec.value = inpSec.value.slice(0, 2);
    };

    if (inpMin.value.length > 2) {
        inpMin.value = inpMin.value.slice(0, 2);
    };

    if (inpHour.value.length > 2) {
        inpHour.value = inpHour.value.slice(0, 2);
    };
    console.log(inpSec.value)
}

const activeBtn = () => {
    switch(!(inpSec.value || inpMin.value || inpHour.value)) {
        case true:

            break;
        // 하나라도 입력한 경우
        case false:
            nonStartBtn.classList.remove('disabled');
            nonStartBtn.classList.add('startBtnOn');
            startImg.setAttribute('src', './images/start-default.png');
            nonResetBtn.classList.remove('disabled');
            nonResetBtn.classList.add('resetBtnOn');
            resetImg.setAttribute('src', './images/reset-default.png');
            break;
    }
}

[inpSec, inpMin, inpHour].map(item => item.addEventListener('input', inputLenFunc));

// 값 입력받으면 버튼 활성화
[inpSec, inpMin, inpHour].map(item => item.addEventListener('keyup', activeBtn));

// onStartBtn.addEventListener('click', () => {
//     console.log('hi')
// });