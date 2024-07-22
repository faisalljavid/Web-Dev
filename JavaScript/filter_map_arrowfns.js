// ARROW Functions

// Both are "almost" same
function sum(a, b) {
    return a + b;
}

const sum1 = (a, b) => {
    return a + b;
}


// ----------------------------------

// MAP

// given an array, give me back a new array in  which 
// every value is multiplied by 2

const input = [1, 2, 3, 4, 5];

function transform(i) {
    return i * 2;
}

const ans = input.map(transform);

// or 
// const ans = input.map(function(i) {
//     return i*2;
// });

console.log(ans);



// -----------------------------------

// FILTERING

// giveen an array, give me back all the even values from it

const arr = [1, 2, 3, 4, 5, 6];

const answer = arr.filter(function (n) {
    // const answer = arr.filter(n) => {    another way
    if (n % 2 == 0) {
        return true;
    } else {
        return false;
    }
});

console.log(answer);