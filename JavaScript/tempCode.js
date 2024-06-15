// basic clock

function displayClock() {
    const now = new Date();
    const hours = String(now.getHours());
    const minutes = String(now.getMinutes());
    const seconds = String(now.getSeconds());
    console.log(hours + ":" + minutes + ":"  + seconds);
}

displayClock();