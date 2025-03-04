let username = 'breakout6';
console.log(username);

// number 2
if (age >= 65 && isMember) {
  console.log("Eligible for discount");
} else {
  console.log("Not eligible for discount");
}

//number 3
let city = "";

if (!city) {
  console.log("City is not set");
}

// number 4
let age = 25; 
let isStudent = true; 

if ((age >= 18 && age <= 30) || isStudent) {
  console.log("Eligible for youth program");
} else {
  console.log("Not eligible for youth program");
}
//number 5
let isRaining = false;

if (!isRaining) {
  console.log("Let's go outside!");
}

//number 6
let temperature = 28; 

let weatherMessage = temperature > 30 ? "Hot day" : "Comfortable day";
console.log(weatherMessage);

//number 7
let isLoggedIn = false;
let guestAccess = true; 

if (isLoggedIn || guestAccess) {
  console.log("Access granted");
} else {
  console.log("Access denied");
}

//number 8
let score = 100;

if (typeof score === 'number') {
  console.log("Valid score");
} else {
  console.log("Invalid score");
}

//number 9
let hasTickets = true; 
let isVIP = false;

if (hasTickets || isVIP) {
  console.log("Access granted");
} else {
  console.log("Access denied");
}

//number 10
function canDrive(age, hasLicense) {
  return age >= 18 && hasLicense;
}

