//Using the following variables:

var goodDrivingRecord = true;
var age = 24;

//Write a program that evaluates the status of the variables above, and uses logic to print one of three possible messages:
//- If the driving record is good and user is over 25 years old, they should get a discount on the car rental
//- If the user either has a good record or is over 25 years old, they should pay full price
//- If the user is not over 25 and has a bad driving record, they need to have someone else sign for the rental

goodDrivingRecord = false;
age = 23;

if (goodDrivingRecord === true && age > 25) {
    console.log("If the driving record is good and the user is over 25 years old, they should get a discount on the car rental")
}   else if (goodDrivingRecord === true || age > 25) {
    console.log("If the user either has a good record or is over 25 years old, they should pay full price")
}   else {
    console.log("If the user is not over 25 and has a bad driving record, they need to have someone else sign for the rental")
}