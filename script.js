let timer;
let isRunning = false;
let [hours, minutes, seconds, milliseconds] = [0, 0, 0, 0];

const display = document.getElementById('display');
const startStopBtn = document.getElementById('startStopBtn');
const resetBtn = document.getElementById('resetBtn');

function updateDisplay() {
    const format = (unit) => (unit < 10 ? '0' + unit : unit);
    display.innerHTML = `${format(hours)} : ${format(minutes)} : ${format(seconds)} : ${format(milliseconds)}`;
}

function startStopwatch() {
    if (!isRunning) {
        timer = setInterval(() => {
            milliseconds++;
            if (milliseconds === 100) {
                milliseconds = 0;
                seconds++;
            }
            if (seconds === 60) {
                seconds = 0;
                minutes++;
            }
            if (minutes === 60) {
                minutes = 0;
                hours++;
            }
            updateDisplay();
        }, 10);
        startStopBtn.innerHTML = 'STOP';
    } else {
        clearInterval(timer);
        startStopBtn.innerHTML = 'START';
    }
    isRunning = !isRunning;
}

function resetStopwatch() {
    clearInterval(timer);
    [hours, minutes, seconds, milliseconds] = [0, 0, 0, 0];
    updateDisplay();
    startStopBtn.innerHTML = 'START';
    isRunning = false;
}

startStopBtn.addEventListener('click', startStopwatch);
resetBtn.addEventListener('click', resetStopwatch);

updateDisplay();
