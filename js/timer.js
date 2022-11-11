const main = document.querySelector('#app');
const inpHour = main.querySelector('.hour');
const inpMin = main.querySelector('.min');
const inpSec = main.querySelector('.sec');

const disStartBtn = main.querySelector('.btn-start-disabled');
const disResetBtn = main.querySelector('.btn-reset-disabled');

const startImg = document.querySelector('.img-start');
const resetImg = document.querySelector('.img-reset');

const defStartBtn = document.querySelector('.defStart');

let timeHour = 00;
let timeMin = 00;
let timeSec = 00;


const addTime = (name) => {
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
};
const pauseBtn = () => {
    disStartBtn.addEventListener('click', () => {
        disStartBtn.classList.remove('defStart');

        // pause 버튼으로 변경해주기
        disStartBtn.classList.add('pauseBtn');
        startImg.setAttribute('src', './images/pause.png');

        const pauseBtn = document.querySelector('.pauseBtn');
        pauseBtn.addEventListener('click', () => {
            disStartBtn.classList.remove('pauseBtn');
            startImg.setAttribute('src', './images/start-default.png');
            lightUpBtn();
        })
        
    });
}

const resetBtn = () => {
    disResetBtn.addEventListener('click', () => {
        disStartBtn.classList.remove('defStart');
        startImg.setAttribute('src', './images/start-disabled.png');

        disResetBtn.classList.remove('defReset');
        resetImg.setAttribute('src', './images/reset-disabled.png');

        timerReset();
    })
}
const timerReset = () => {

    timeHour = 00;
    timeMin = 00;
    timeSec = 00;
    const secTxt = main.querySelector('.sec');
    secTxt.textContent = String(timeSec).padStart(2,'0');

    const minTxt = main.querySelector('.min');
    minTxt.textContent = String(timeMin).padStart(2,'0');
    const hourTxt = main.querySelector('.hour');
    hourTxt.textContent = String(timeHour).padStart(2,'0');

}

const lightUpBtn = () => {
    disStartBtn.classList.add('defStart');
    startImg.setAttribute('src', './images/start-default.png');

    disResetBtn.classList.add('defReset');
    resetImg.setAttribute('src', './images/reset-default.png');
    // 불 들어온 start 버튼 누르면 pause 버튼으로 변경하기
    pauseBtn();
    resetBtn();
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

