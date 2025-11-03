let cron
let hour = 0
let minute = 0
let second = 0
let millisecond = 0




function start() {
    pause()
    cron = setInterval(function () {
        if ((millisecond += 10) == 1000) {
            millisecond = 0;
            second++;
        }
        if (second == 60) {
            second = 0;
            minute++;
        }
        if (minute == 60) {
            minute = 0;
            hour++;
        }
        document.getElementById("hour").innerText = hour < 10 ? "0" + hour : hour
        document.getElementById("minute").innerText = minute < 10 ? "0" + minute : minute
        document.getElementById("second").innerText = second < 10 ? "0" + second : second
        document.getElementById("millisecond").innerText = millisecond < 10 ? "0" + millisecond : millisecond
    }, 10)
}

function pause() {
    clearInterval(cron)
}

function reset() {
    hour = 0
    minute = 0
    second = 0
    millisecond = 0
    document.getElementById("hour").innerText = "00"
    document.getElementById("minute").innerText = "00"
    document.getElementById("second").innerText = "00"
    document.getElementById("millisecond").innerText = "00"

}

