//Week1

1- // this is a comment!

2- /*
this
is
a
multi-line
comment
*/

//3-
 console.log("Hello, World");

//4-
 console.log("%cHello, World", "color: blue; font-size: 40px");

//5-
 console.log("Hello " + "there, " + "World") //The output of this command will be: Hello there, World

//6- 
var petCat = 'Pepper'; // Task 2 solution
console.log("My pet cat's name is: " + petCat);

//7-
 var petCat = 'Pepper'; // Task 2 solution
var catSound = "meow"; // Task 11 solution
console.log(petCat, "now says", catSound);

/*
8- Operators in Javascript:
Logical AND operator: && 
Logical OR operator: || 
Logical NOT operator: ! 
The modulus operator: %  It returns the remainder of division.
console.log(22 % 5); // 2
The equality operator: == even if one of the compared values is of the number type, and the other is of the string type, the returned value is still true: 5 == "5"
The strict equality operator: === The strict equality operator compares for both the values and the data types
The inequality operator: !=
The strict inequality operator: !==
The addition assignment operator: += 
The concatenation assignment operator: += (it's the same as the previous one - more on that later)
*/

//9-
 var longString = "";
longString += "Once";
longString += " upon";
longString += " a";
longString += " time";
longString += "...";
console.log(longString); // "Once upon a time..."


//10- if else vs. Switch statements
/*
- Generally, if else is better suited if there is a binary choice in the condition.
- When there are a smaller number of possible outcomes of truthy checks, it is still possible to use an if else statement
*/
if(light == "green") {
    console.log("Drive")
} else if (light == "orange") {
    console.log("Get ready")
} else if (light == "red") {
    console.log("Dont' drive")
} else {
    //this block will run if no condition matches
    console.log("The light is not green, orange, or red");
}

/*
However, if there are a lot of possible outcomes, it is best practice to use a switch statement because it is easier less verbose.
Being easier to read,it is easier to follow the logic, and thus reduce cognitive load of reading multiple conditions.
*/
//converting the previous if-else example with switch-case
switch(light) {
    case 'green':
        console.log("Drive");
        break;
    case 'orange':
        console.log("Get ready");
        break;
    case 'red':
        console.log("Don't drive");
        break;
    default:
        //this block will run if no condition matches
        console.log('The light is not green, orange, or red');
        break;
 }


 var day = `Sunday`;
switch(day) {
   case 'Monday':
       console.log('Read a book');
       break;
   case 'Tuesday':
       console.log('Watch a movie');
       break;
   case 'Wednesday':
       console.log('Read a book');
       break;
   case 'Thursday':
       console.log('Play basketball');
       break;
   case 'Friday':
       console.log('Socialize');
       break;
   case 'Saturday':
       console.log('Chill');
       break;
   case 'Sunday':
       console.log('Have barbecue');
       break;
   default:
       //this block will run if no condition matches
       console.log('There is no such day');
}



//11- For and While loop:

for (var i = 1; i <= 5; i++) {
    console.log(i);
};
console.log('Counting completed!');

for( var i=1 ; i<=10 ; i++){
    if (i==1){console.log("Gold Medal");}
    else if (i==2){console.log("Silver Medal");}
    else if (i==3){console.log("Bronze  Medal");}
    else {console.log(i);}
}


var i = 1;
while (i < 6) {
    console.log(i);
    i++;
};
console.log('Counting completed!');


var year = 2018;
while (year < 2023) {
    console.log(year);
    year++;
};


//12- Nested Loops
//nested loops - one inside another
for (var firstNum = 0; firstNum < 2; firstNum++) {
    for (var secondNum = 0; secondNum < 10; secondNum++) {
        console.log(firstNum + " times " + secondNum + " equals " + firstNum * secondNum);
    }
}


var cubes = 'ABCDEFG';
//styling console output using CSS with a %c format specifier
for (var i = 0; i < cubes.length; i++) {
    var styles = "font-size: 40px; border-radius: 10px; border: 1px solid blue; background: pink; color: purple";
    console.log("%c" + cubes[i], styles)
}


/* 13-  The functional programming paradigm
/ the two predominant programming paradigms: 
1- functional programming  
2- object-oriented programming
*/

//*In functional programming, we use a lot of functions and variables.
function getTotal(a,b) {
    return a + b
}
var num1 = 2;
var num2 = 3;

var total = getTotal(num1, num2);

//** When writing FP code, we keep data and functionality separate and pass data into functions only when we want something computed.
//*** In functional programming, functions return new values and then use those values somewhere else in the code. */
function getDistance(mph, h) {
    return mph * h
}
var mph = 60;
var h = 2;
var distance = getDistance(mph, h);
console.log(distance); // <====== THIS HERE!
