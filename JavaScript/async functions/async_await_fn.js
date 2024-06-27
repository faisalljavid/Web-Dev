function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function asyncFunction() {
    console.log("Start");

    // Using await to pause execution until delay(2000) finishes
    await delay(2000);

    console.log("After 2 seconds");

    // Execution continues after delay(2000) finishes
    console.log("End");
}

asyncFunction();
console.log("Outside asyncFunction");

// output: Start->Outside asyncFunction->After 2 seconds->End