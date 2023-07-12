//the first Question

// console.log(window.prompt("Enter Number"));

//the secand Question

// var number = Number(window.prompt("Enter a number:"));
// if (number % 3===0 && number % 4===0) {
//     console.log("yes");
// } else {
//     console.log("no");

//the three Question

// var num1 = Number(window.prompt("Enter the First Number: "));
// var num2 = Number(window.prompt("Enter the Second Number: "));
// if( num1 > num2 ){
//   console.log("the maxnumber is: " + num1);
// }
// else{
//   console.log("the maxnumber is: " + num2);
// }

//the Four Question
/*
var number =Number(window.prompt("Enter a number"));
if( number > 0 ){
  console.log("positive")
}
else{
  console.log("negative")
}
*/

//the Five Question
/*
var num1 =Number(window.prompt("Enter the First Number: "));
var num2 =Number(window.prompt("Enter the Second Number: "));
var num3 =Number(window.prompt("Enter the Three Number: "));

if ( num1 >= num2 && num1 >= num3){
  console.log("The maxelement is: " + num1);
}
else if( num2 >= num1 && num2 >= num3){
  console.log("The maxelement is: " + num2);
}
else{
  console.log("The maxelement is: " + num3);
}
minelement
if ( num1 <= num2 && num1 <= num3){
  console.log("The minelement is: " + num1);
}
else if( num2 <= num1 && num2 <= num3){
  console.log("The minelement is: " + num2);
}
else{
  console.log("The minelement is: " + num3);
}
*/

//the six Question
/*
var number = Number(window.prompt("Enter a Number"));
if(number % 2 ===0){
  console.log(" The number is even");
}
else{
  console.log(" The Number is add");
}
*/

//the eight Question
/*
var characte = window.prompt("Enter a characte");
if(characte === 'a'||characte ==='e'||characte ==='l'||characte ==='o'||characte ==='u'){
  console.log("vowel");
}
else{
  console.log("Consonant");
}
*/

//the nine Question
/*
var number = Number(window.prompt("Enter a insert integer: "));
for(var i =1; i <= number ; i++){
  console.log(i);
}
*/
//the tine Question
/*
var number =Number(window.prompt("Enter an insert integer: "));
for (var i = 1; i <= 12; i++) {
  console.log(number + " x " + i + " = " + number * i);
}
*/
// The eleven Question
/*
var number = window.prompt("Enter a Number: ");
for(var i= 1; i <= number ; i++){
  if( i % 2 ===0){
    console.log("The number even: " + i);
  }
}
*/

// The twelve Question
/*
var num1 = Number(window.prompt("Enter a num1"));
var num2 = Number(window.prompt("Enter a num2"));
var res= Math.pow(num1,num2);
console.log(num1 + "^" + num2 + " = " + res);
*/

// The thirteen Question
/*
// take input marks of five subjects
var subject1 = parseInt(prompt("Enter marks of subject 1: "));
var subject2 = parseInt(prompt("Enter marks of subject 2: "));
var subject3 = parseInt(prompt("Enter marks of subject 3: "));
var subject4 = parseInt(prompt("Enter marks of subject 4: "));
var subject5 = parseInt(prompt("Enter marks of subject 5: "));

//calculate total marks
var totalMarks = subject1 + subject2 + subject3 + subject4 + subject5;

//calculate average marks
var averageMarks = totalMarks / 5;

//calculate percentage
var percentageMarks = (totalMarks / 500) * 100;

//print the results
console.log(`Total marks: ${totalMarks}`);
console.log(`Average marks: ${averageMarks}`);
console.log(`Percentage marks: ${percentageMarks}%`);

*/
// The Fourteen Question
/*
var month =Number( window.prompt("Enter a month number (1-12)"));
switch(month){
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    console.log("Days in Month: 31");
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    console.log("Days in Month: 30");
    break;
  case 2:
    console.log("Days in Month: 29");
    break;
}
 */
// The fifteen Question
/*
var physicsMarks = Number(window.prompt("Enter marks of Physics: "));
var chemistryMarks = Number(window.prompt("Enter marks of chemistry: "));
var biologyMarks = Number(window.prompt("Enter marks of biology: "));
var mathematicsMarks = Number(window.prompt("Enter marks of mathematics: "));
var computerMarks = Number(window.prompt("Enter marks of computer: "));

var totalMarks = physicsMarks + chemistryMarks + biologyMarks + mathematicsMarks + computerMarks;
var percentageMarks = (totalMarks / 500) * 100;

var grade;
if (percentageMarks >= 90) {
  grade = "A";
} else if (percentageMarks >= 80) {
  grade = "B";
} else if (percentageMarks >= 70) {
  grade = "C";
} else if (percentageMarks >= 60) {
  grade = "D";
} else if (percentageMarks >= 40) {
  grade = "E";
} else if(percentageMarks < 40){
  grade = "F";
}
console.log(`Total marks: ${totalMarks}`);
console.log(`Percentage marks: ${percentageMarks}%`);
console.log(`Grade: ${grade}`);
*/
// switch case Question one
/*
var month =window.prompt("Enter a month");
switch(month){
  case "March":
    console.log("31 days");
    break;
    case "january":
      console.log("31 days");
      break;
      case "May":
        console.log("31 days");
        break;
        case "July":
          console.log("31 days");
          break;
          case "October":
            console.log("31 days");
            break;
            case "November":
              console.log("31 days");
              break;
              case "December":
                console.log("31 days")
                break;
                case "February":
                  console.log("28 days");
                  break;
                  case "April":
                    console.log("30 days");
                    break;
                    case "June":
                      console.log("30 days");
                      break;
                      case "August":
                        console.log("30 days");
                        break;
                        case "September":
                          console.log("30 days");
                          break;
}
*/
// Question two
/*
var alphabet = window.prompt("Enter a single alphabet:");
switch (alphabet) {
  case "a":
  case "e":
  case "i":
  case "o":
  case "u":
    console.log(alphabet +" is a vowel.");
    break;
  default:
    console.log(alphabet +" is a consonant.");
}
*/
//Question three
/*
var num1 = Number(window.prompt("Enter First Number: "));
var num2 = Number(window.prompt("Enter Second Number: "));
if( num1 > num2 )(
  console.log("maxnumber " + num1)
)
else{
  console.log("maxnumber: " + num2)
}
 */

// Question Four
/*
var number =Number(window.prompt("Enter a Number"));
  switch(number % 2) {
    case 0:
        console.log(number + " is even.");
        break;
    case 1:
        console.log(number + " is odd.");
        break;
}
 */
//Question Five
/*
var number = Number(window.prompt("Enter a Number"));
switch(Math.sign(number)){
  case 1:
    console.log("The number positive");
    break;
    case -1:
      console.log(" The number  negative");
      break;
      case 0:
        console.log(" The number Zero");
        break;
}
*/
//Question six

/*
var num1 = Number(window.prompt("Enter a number1"));
var operator = window.prompt("Enter operator (+, -, *, /):");
var num2 = Number(window.prompt("Enter a number2"));
var res;
switch(operator){
  case "+":
    res = num1 + num2;
    console.log(res);
    break;
    case "-":
      res = num1 - num2;
      console.log(res)
      break;
      case "*":
        res = num1 * num2;
        console.log(res)
        break;
        case " / ":
          res = num1 / num2;
          console.log(res);
          break;
          default:
            console.log("Invalid operator");
}
*/



