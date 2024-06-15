function calculateArithmetic(a, b, arithmeticFunction) {
    const ans = arithmeticFunction(a, b);
    return ans;
}

function sum(a, b) {
    return a+b;
}

function sub(a, b) {
    return a-b;
}

const value = calculateArithmetic(1, 2, sub);
console.log(value);