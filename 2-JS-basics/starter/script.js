// // console.log("Hello World!!!!")
// // js will dynamically take the datatypes assigned to variable.
// // Number has everything float, double and decimal
// /*
// var firstName = 'John';
// console.log(firstName);

// var lastName = 'Smith';
// var age = 28;

// var fullAge = true;
// console.log(fullAge);
// */

// // variable mutation and type corecion

// var lastName = 'Smith';
// var age = 28;

// var job, isMarried;
// job = 'teacher';
// isMarried = false;
// console.log(lastName + ' is a ' + age + ' year old ' + job + ' . Is he married '+ isMarried );

// console.log( lastName + ' ' + age);

// // Variable Mutation

// age = 'twenty eight';
// job = 'driver';

// // alert(lastName + ' is a ' + age + ' year old ' + job + ' . Is he married? '+ isMarried );

// // var firstName = prompt("enter first name");

// /************
//  *  Basic operators
// */
// var year, yearJohn, yearMark;
// now = 2018;
// ageJohn = 28;
// ageMark = 33;

// // Math Operators
// yearJohn = now - ageJohn;
// yearMark = now - ageMark;

// console.log(yearJohn);

// console.log(now + 2);
// console.log(now * 2);
// console.log(now / 2);

// // Logical Operators

// var johnOlder = ageJohn < ageMark
// console.log(johnOlder);

// // typeof operator

// console.log(typeof johnOlder);
// console.log(typeof ageJohn);
// console.log(typeof 'Hello');
// var x;
// console.log(typeof x);

// /************
//  *  Operators precedence
// */

// var now = 2018;
// var yearJohn = 1989;
// var fullAge = 18;

// var isFullage = now - yearJohn >= fullAge;
// console.log(isFullage);

// var ageJohn = now - yearJohn;
// var ageMark = 34;
// var average = (ageJohn + ageMark) / 2;
// console.log(average);

/* **************
 * Coding cahllange 1
 */

//  var massMark = 34;
//  var massJohn = 78;
//  var heightMark, heightJohn;
//  heightJohn = 2.4;
//  heightMark = 2.9;

//  var markBMI = massMark / (heightMark * heightMark);
//  var johnBMI = massJohn / (heightJohn * heightJohn);
//  var ishigher = markBMI > johnBMI;
//  console.log(markBMI, johnBMI)

// //  if (markBMI > johnBMI){
// //      ishigher = true
// //     //  console.log(' Is Mark BMI ' + markBMI + ' higher than John`s BMI ? ' + johnBMI + ishigher)
// //  } else {
// //     ishigher = false
// // }
// console.log(' Is Mark\'s BMI ' + markBMI + ' higher than John\'s BMI ' + johnBMI + ' ? ' + ishigher)


/*
* If / else statememts
*/

// refer to the top commented code .

/*
* Boolean Logic
*/

// var firstName = 'John';
// var age = 13;

// if (age < 13) {
    //     console.log(firstName + ' is a boy.');
    // } else if (age >= 13 && age < 20) {
        //     console.log(firstName + ' is a teenager');
        // } else if (age >= 20 && age < 30) {
            //     console.log(firstName + ' is a young man.');
            // }
            // else {
                //     console.log(firstName + ' is a man.')
                // }

/*
* Ternary Operator and Switch Statements.
*/

// var firstName = 'John';
// var age = 13;
// //  Ternary Operator
// // condition ? exprIfTrue : exprIfFalse
// age >= 18 ? console.log(firstName + ' drinks beer') : console.log (firstName + ' drinks juice');

// var drink = age >=18 ? 'beer' : 'juice';
// console.log(drink);

// Switch statement

// var firstName = 'John';
// var job = 'teacher';

// switch (job){
//     case 'teacher':
//         console.log( firstName + ' teaches ');
//         break;
//         case 'young':
//             console.log( firstName + ' go on a date ');
//             case 'hell':
//                 console.log( firstName + ' goes to hell');
//                 default:
//                     console.log('No switch statement in satisfied');

// }

/*
* Truthy and falsy values and equality operators
*/

// Falsy values: undefined, null, 0, '', NaN
// truthy values: NOT Falsy values.


// var height;
// height = 0;

// // if(height \\ height === 0){ // this prints the if condition equal operators.
// if(height){
//     console.log('Variables is defined');
// } else {
//     console.log('Variables is Not been defined'); // prints this coz var is undfined and it is false.
// }

/*  Equality operators
'==' will check for data types and '===' will do strict check on the values.
*/

// problem 2

// var teamJohn1 = 89;
// var teamJohn2 = 102;
// var teamJohn3 = 199;

// var teamMark1 = 113;
// var teamMark2 = 89;
// var teamMark3 = 150;

// var teamMary1 = 113;
// var teamMary2 = 129;
// var teamMary3 = 150;


// var teamJohnAverage = (teamJohn1 + teamJohn2 + teamJohn3) / 3;
// var teamMarkAverage = (teamMark1 + teamMark2 + teamMark3) / 3;
// var teamMaryAverage = (teamMary1 + teamMary2 + teamMary3) / 3;
// console.log( 'john = ' + teamJohnAverage + ', mark = ' + teamMarkAverage + ' , mary ' + teamMaryAverage )

// switch (true){
//     case teamJohnAverage > teamMarkAverage && teamJohnAverage > teamMaryAverage:
//         console.log(teamJohnAverage.toFixed(2) + ' Johns team wins the game.');
//         break;
//         case teamMarkAverage > teamJohnAverage && teamMarkAverage > teamMaryAverage:
//             console.log( teamMarkAverage.toFixed(2) + ' Mark Team wins the game.');
//             break;
//             case teamMaryAverage > teamJohnAverage && teamMaryAverage > teamMarkAverage:
//                 console.log(teamMaryAverage + ' Mary\'s team won the game')
//                 break;
//             default:
//                 console.log("It's a draw match")

// }

/*
* Functions
*/

// function calculateAge(birthyear){
//     return 2020 - birthyear
// }

// var ageJohn = calculateAge(1992);
// var ageJay = calculateAge(1954);
// var ageMay = calculateAge(1978);
// console.log(ageJohn, ageMay, ageJay)


// function retireAge (year, firstName) {
//     var age = calculateAge(year);
//     var retirement = 65 - age;
//     if (retirement > 0){
//     console.log (firstName + ' retires in ' + retirement + ' years')
// } else {
//     console.log (firstName + ' is already retired')

//     }
// }
// retireAge(1990, 'John')
// retireAge(1954, 'Jay')
// retireAge(1978, 'May')

/*
* Functions Statements and Expressions
*/

