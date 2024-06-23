const str = "Hello World World world WOrLd"

// length
console.log(str.length);


// index
console.log(str.indexOf("world")); 


// last index
console.log(str.lastIndexOf("World"));


// slice 
console.log(str.slice(0, 4)); // doesn't include last index


// replace
console.log(str.replace("World", "Home"));
console.log(str.replace("llo", "Billo"));


// splitString 
console.log(str.split(" "));
console.log(str.split("W"));


// trim  (only trims space at the beginning and end)
const value = "         Hello     World     ";
console.log(value.trim());


// toUpper and toLower
const val = "HELLo, mY nAME is FAiSaL";
console.log(val.toUpperCase());
console.log(val.toLowerCase());


// parseInt (global function)
console.log(parseInt("42")) // 42
console.log(parseInt("42pxxwqa")) // 42
console.log(parseInt("ajf432")) // NaN, only 'after text' is removed
console.log(parseInt("3fwwe2")); // 3, stops after encountering a non-valid numeral in base 10
console.log(parseInt("3.9")); // 3








// ARRAYS:
const initialArray = [1, 2, 3, 4];
const secondArray = [5, 6, 7, 8];

initialArray.push(2);
console.log(initialArray);

initialArray.pop(2);
console.log(initialArray);

initialArray.shift(); // removes initial element
console.log(initialArray);

initialArray.unshift(88); // add it at initial position
console.log(initialArray);


// concatination (2nd argument here is an Array compared to a number in push)
const finalArray = initialArray.concat(secondArray);
console.log(finalArray);


// for-each (expects a function as an argument)
finalArray.forEach(display);

function display(element) {
    console.log(element);
}






// CLASSES:

// legCount, speak, name
class Animal {
    constructor(name, legCount, speaks) {
        this.name = name;
        this.legCount = legCount;
        this.speaks = speaks;
    }

    static myType() {
        console.log("Animal");
    }

    speak() {
        console.log("Hi there, " + this.speaks);
    }
}

console.log(Animal.myType());
let dog = new Animal("doggie", 4, "bhow bhow"); // create object
let cat = new Animal("cattie", 4, "meow meow");
dog.speak(); // call function on object
cat.speak();








// Date Class
const currentDate = new Date();
// console.log(currentDate);
// console.log(currentDate.getDate());

// console.log(currentDate.getMonth());
// console.log(currentDate.getHours());
// console.log(currentDate.getMinutes());
// console.log(currentDate.getSeconds());

// console.log(currentDate.getFullYear());


// important one (epoch time)
console.log("Time in milliseconds since 1970: " + currentDate.getTime());



// checking execution difference
function calSum(n) {
    let a = 0;
    for(let i=0; i<n; i++) {
        a += i;
    }
    return a;
}


// time difference
const beforeDate = new Date();
const beforeTimeInMs = beforeDate.getTime();
console.log(calSum(400000));

const afterDate = new Date();
const afterTimeInMs = afterDate.getTime();

console.log(afterTimeInMs - beforeTimeInMs);





// JSON:

// JSON.parse (string to JSON) when we get data
// JSON.stringify (JSON to string) when we send data
const user = {
    name: "Faisal",
    age: 18,
    gender: "male"
}

console.log(user["name"]);
const finalString = JSON.stringify(user);
console.log(finalString);
// console.log(finalString["name"])  "wrong", as it is now a string







// MATH:
console.log(Math.random());
console.log(Math.floor(2.9));
console.log(Math.ceil(2.9));
console.log(Math.pow(2,3));
console.log(Math.sqrt(144));







// OBJECTS: 

function objectMethods(obj) {
    console.log("Original Object: " + obj);

    // Object.keys is an array which every object is a string
    let keys = Object.keys(obj);
    console.log("After Object.keys(): " + keys);

    // Object.values() is an array which has all the values in the original object
    let values = Object.values(obj);
    console.log("After Object.values(): " + values);

    // this has both
    let entries = Object.entries(obj);
    console.log("After Object.entries(): " + entries);

    let hasProp = obj.hasOwnProperty("property"); // checking if it has the said property
    console.log("After hasOwnProperty(): " + hasProp); // true or false

    let newObj = Object.assign({}, obj, { newProperty: "newValue" });
    console.log("After Object.assign(): " + newObj);
}

const sampleObject = {
    key1: "value1",
    key2: "value2",
    key3: "value3",
};

objectMethods(sampleObject);