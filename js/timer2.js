// 타이머 다시 구현
const main = document.querySelector('#app');
const inpHour = main.querySelector('.hour');
const inpMin = main.querySelector('.min');
const inpSec = main.querySelector('.sec');

const nonStartBtn = main.querySelector('.btn-start');
const nonResetBtn = main.querySelector('.btn-reset');
const pauseBtn = main.querySelector('.btn-pause.hidden')
// console.log(nonResetBtn)

const startImg = document.querySelector('.img-start');
const resetImg = document.querySelector('.img-reset');
const onStartBtn = document.querySelector('.startBtnOn');
const inputGroup = [inpSec, inpMin, inpHour];


let timer;
let time = 0;
let timeHour = 0;
let timeMin = 0;
let timeSec = 0;

// 00 할당
inpHour.textContent = String(timeHour).padStart(2,'0');
inpMin.textContent = String(timeMin).padStart(2,'0');
inpSec.textContent = String(timeSec).padStart(2,'0');

// 초기 start 버튼 비활성화하기
nonStartBtn.setAttribute('disabled', true);
nonResetBtn.setAttribute('disabled', true);

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
    // console.log(inpSec.value)
}

const activeBtn = () => {
    switch(!(inpSec.value || inpMin.value || inpHour.value)) {
        case false:
            startImg.src = './images/start-default.png';
            resetImg.src = './images/reset-default.png';
            break;
    } 
    // 값 입력하고 start 버튼 클릭한 경우 버튼 활성화
    nonStartBtn.removeAttribute('disabled');
    nonResetBtn.removeAttribute('disabled');
}
const changeBtn = () => {
    nonStartBtn.classList.add('hidden');
    pauseBtn.classList.remove('hidden');
    
}
const pauseTime = () => {
    nonStartBtn.classList.remove('hidden');
    pauseBtn.classList.add('hidden');
    clearInterval(timer);
}

const startTime = (totalTime) => {
    
    // console.log(totalTime)
    timer = setInterval(() => {
        totalTime--;
        updateTotalTime(totalTime);
        // console.log(totalTime)
        if (totalTime <= 0) {
            clearInterval(timer);
            alert('종료!!');
            inpHour.value = String(timeHour).padStart(2,'0');
            inpMin.value = String(timeMin).padStart(2,'0');
            inpSec.value = String(timeSec).padStart(2,'0');
            // console.log('finish')
        }
    }, 1000);
}
const updateTotalTime = (totalTime) => {
    const secUpd = totalTime % 60;
    const minUpd = Math.floor((totalTime / 60) % 60);
    const hourUpd = Math.floor((totalTime / 60) / 60);
    console.log(minUpd, secUpd)
    // console.log(minUpd)
    // console.log(hourUpd)

    // 초
    if (secUpd < 10) {
        inpSec.value = secUpd.toString().padStart(2, "0")
    } else {
        inpSec.value = secUpd;
    }
    // 분
    if (minUpd < 10) {
        inpMin.value = minUpd.toString().padStart(2, "0")
    } else {
        inpMin.value = minUpd;
    }
    // 시간
    if (hourUpd < 10) {
        inpHour.value = hourUpd.toString().padStart(2, "0")
    } else {
        inpHour.value = hourUpd;
    }
}
// 0미만인경우 종료시키기 추가하기
// const resetTime = () => {
//     if (totalTime <= 0) {
//         clearInterval(timer);
//     }
// 입력안된값 다 00으로 만들어주기
// }
const resetTime = () => {
    clearInterval(timer);
    inpHour.value = String(timeHour).padStart(2,'0');
    inpMin.value = String(timeMin).padStart(2,'0');
    inpSec.value = String(timeSec).padStart(2,'0');

    nonStartBtn.setAttribute('disabled', true);
    nonResetBtn.setAttribute('disabled', true);
    nonStartBtn.classList.remove('hidden');
    pauseBtn.classList.add('hidden');
    startImg.src = './images/start-disabled.png';
    resetImg.src = './images/reset-disabled.png';
}


inputGroup.map(item => item.addEventListener('input', inputLenFunc));

// 값 입력받으면 버튼 활성화
inputGroup.map(item => item.addEventListener('keyup', activeBtn));

// 값 초기화
inputGroup.map(item => item.addEventListener('click', (e) => {
    e.currentTarget.value = '';
}));

nonStartBtn.addEventListener('click', () => {
    // 값이 빈 경우 0으로 채워주기
    if (inpHour.value === '') {
        inpHour.value = String(timeHour).padStart(2,'0');
    }
    if (inpMin.value === '') {
        inpMin.value = String(timeMin).padStart(2,'0');
    }
    if (inpSec.value === '') {
        inpSec.value = String(timeSec).padStart(2,'0');
    }
    const secNum = parseInt(inpSec.value);
    const minNum = parseInt(inpMin.value);
    const houNum = parseInt(inpHour.value);
    const totalTime = secNum + minNum * 60 + houNum * 60 * 60;
    startTime(totalTime);
    changeBtn();
});
pauseBtn.addEventListener('click', pauseTime);
nonResetBtn.addEventListener('click', resetTime);