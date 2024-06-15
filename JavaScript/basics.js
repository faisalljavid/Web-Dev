// Primitives 

let Mname = "Faisal";
let age = 18;
let isMarried = false;

console.log("This person name is " + Mname + " and his age is " + age);





// if-else

if (isMarried == true) {
    console.log(Mname + " is married");
} else {
    console.log(Mname + " is not married");
}
// 
let ans = 0;
for (let i=0; i<100; i++) {
    ans=ans+i;
}
console.log(ans);





// Arrays

const ages = [22, 34, 45, 78, 3, 90];
for (let i=0; i<ages.length; i++) {
    if (ages[i]%2==0) {
        console.log(ages[i]);
    }
}

// Array element access

const personArray = ["Faisal", "Javid", "Lisa"];
const genderArray = ["male", "male", "female"];
const numberOfUsers = personArray.length;
for (let i=0; i<numberOfUsers; i++) {
    if (genderArray[i] == "male") {
        console.log(personArray[i]);
    }
}





// objects

const users1 = {
    firstName: "Faisal",
    gender: "male"
}

console.log(users1["firstName"]);




// object access

const allUsers = [{
    firstName: "Lewis",
    gender: "male",
    metadata: {
        age: 21,
        address: ""
    }
},  {
    firstName: "Lisa",
    gender: "female"
},  {
    firstName: "Tony",
    gender: "male"
}]

for (let i=0; i<allUsers.length; i++) {
    if (allUsers[i]["gender"]=="male") {
        console.log(allUsers[i]["firstName"]);
    }
}



// Functions

function sum(a,b) {
    return a+b;
}

const value = sum(1,3);
console.log(value);