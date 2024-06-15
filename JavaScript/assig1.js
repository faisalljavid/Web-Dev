// Counter: starting from 30 till 0

function counter() {
    for(let i=30; i>=0; i--) {
        console.log(i);
    }
}
counter();




// Calculating the time it takes between setTimeout call and inner function actually running

function measureTimeoutDelay(delay) {
    const startTime = Date.now(); // Recording the start time

    setTimeout(() => {
        const endTime = Date.now(); // Recording the end time
        const elapsedTime = endTime - startTime; // Calculating the elapsed time
        console.log("Time between setTimeout call and execution: " + elapsedTime + "ms");
    }, 0);
}

measureTimeoutDelay();



// Clock: updating every second

function displayClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    process.stdout.write(`\r${hours}:${minutes}:${seconds}`);
}

setInterval(displayClock, 1000);

