//Ex01
let age = 20;
if(age < 18)
{
    console.log("The minimum age for vote is 18 !");
}

//Ex02
let score = 85;
if(score => 90)
    console.log("A: 90-100");
else if(score => 80)
    console.log("B: 80-89");
else if(score => 70)
    console.log("C: 70-79");
else if(score => 60)
    console.log("D: 60-69");
else
    console.log("F: Below 60");


//Ex 03

let temperature = 20;
let weather = "sunny";
if(weather === "sunny" && temperature > 24)
    console.log("Go to the beach");
else if(weather === "sunny" && (temperature => 15 && temperature <= 24))
    console.log("Go for a walk");
else if(weather == "sunny" && temperature < 15)
    console.log("Stay inside and read");
else if(weather == "rainy")
    console.log("watch a movice indoors");
else if(weather == "cloudy" && temperature > 21)
    console.log("Go hiking");
else if(weather == "cloudy" && temperature <=21)
    console.log("Visit a museum");

//Ex 04

let usernameLength = 6;
let passwordLength = 8;
let userAge = 15;
let pass = true;
if(usernameLength < 5)
{
    console.log("Username must be at least 5 characters");
    pass = false;
}
if(passwordLength < 8)
{
    console.log("Password must be at least 8 characters");
    pass = false;
}
if(userAge < 13)
{
    console.log("User must be 13 or older");
    pass = false;
}
if(pass === true)
    console.log("Pass!");

//Ex 05

let customerType = "premium";
let purchaseAmount = 150;
let dayOfWeek = 6;

let discount =
  customerType === "vip" ? 0.20 :
  customerType === "premium"
    ? (dayOfWeek === 6 || dayOfWeek === 0 ? 0.15 : 0.10)
    : customerType === "regular"
      ? (purchaseAmount > 100 ? 0.10 : purchaseAmount > 50 ? 0.05 : 0)
      : 0;


console.log(`The total discount is: ${discount}%`);

//Ex 06

let year = 2024;

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log(`${year} is a leap year`);
} else {
  console.log(`${year} is not a leap year`);
}