function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function promiseFunction() {
    console.log("Start");

    // Using .then() to handle delayed execution
    delay(2000).then(() => {
        console.log("After 2 seconds");
    });

    // Execution continues immediately
    console.log("End");
}

promiseFunction();
console.log("Outside promiseFunction");


// output: Start->End->Outside promiseFunction->After 2 seconds