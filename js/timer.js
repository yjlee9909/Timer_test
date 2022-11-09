const main = document.querySelector('#app');
const inpHour = main.querySelector('.hour');
const inpMin = main.querySelector('.min');
const inpSec = main.querySelector('.sec');

const disStartBtn = main.querySelector('.btn-start-disabled');
const disResetBtn = main.querySelector('.btn-reset-disabled');

const startImg = document.querySelector('.img-start');
const resetImg = document.querySelector('.img-reset');

const defStartBtn = document.querySelector('.defStart');
console.log(defStartBtn)

let timeHour = 00;
let timeMin = 00;
let timeSec = 00;

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
        timeMin += 1;
        if (timeMin < 10) {
            minTxt.textContent = String(timeMin).padStart(2,'0');
        } else {
            minTxt.textContent = timeMin;
        }
    }
    // 시
    if (name === '.hour') {
        const hourTxt = main.querySelector(name);
        timeHour += 1;
        if (timeHour < 10) {
            hourTxt.textContent = String(timeHour).padStart(2,'0');
        } else {
            hourTxt.textContent = timeHour;
        }
        
    }
}
function pauseBtn() {
    disStartBtn.addEventListener('click', () => {
        // 왜 삭제가 안되는 거죠??....???
        disStartBtn.classList.remove('defStart');
    });
}

function lightUpBtn() {
    disStartBtn.classList.add('defStart');
    startImg.setAttribute('src', './images/start-default.png');

    
    

    disResetBtn.classList.add('defReset');
    resetImg.setAttribute('src', './images/reset-default.png');
    // 불 들어온 start 버튼 누르면 pause 버튼으로 변경하기
    pauseBtn();
}




inpSec.addEventListener('click', () => {
    addTime('.sec');
    lightUpBtn();
    
});
inpMin.addEventListener('click', () => {
    addTime('.min');
    lightUpBtn();
});
inpHour.addEventListener('click', () => {
    addTime('.hour');
    lightUpBtn();
});

