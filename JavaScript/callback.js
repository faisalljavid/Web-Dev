function calculateArithmetic(a, b, arithmeticFunction) {
    const ans = arithmeticFunction(a, b);
    return ans;
}

function sum(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

const value = calculateArithmetic(1, 2, sub);
console.log(value);





// one more example
function square(n) {
    return n * n;
}

function cube(n) {
    return n * n * n;
}

function sumOfSomething(a, b, callback) {
    const val1 = callback(a);
    const val2 = callback(b);

    return val1 + val2;
}

console.log(sumOfSomething(2, 2, cube));