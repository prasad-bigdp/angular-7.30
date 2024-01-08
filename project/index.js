var a = 55; // type annotation
var b = "raj";
var c = true;
a = "prasad";
var arr = [15, 25, 5, 6, 'raj123', 'raj'];
var fruits = ["banana", "orange", "mango"];
//Tuples
var details = ["prasa", 20000, "abc@gmail.com"];
details.push('raj');
console.log(details);
//Enums
var Colors;
(function (Colors) {
    Colors[Colors["Red"] = 0] = "Red";
    Colors[Colors["Yellow"] = 1] = "Yellow";
    Colors[Colors["Green"] = 2] = "Green";
    Colors[Colors["Blue"] = 3] = "Blue";
})(Colors || (Colors = {}));
var myColor = Colors.Green;
console.log(Colors[myColor]);
var Days;
(function (Days) {
    Days[Days["sunday"] = 0] = "sunday";
    Days[Days["monday"] = 1] = "monday";
    Days[Days["tuesday"] = 2] = "tuesday";
    Days[Days["wednesday"] = 3] = "wednesday";
    Days[Days["thursday"] = 4] = "thursday";
    Days[Days["friday"] = 5] = "friday";
    Days[Days["saturday"] = 6] = "saturday";
})(Days || (Days = {}));
var today = Days.wednesday;
console.log(today);
//transpile== transform+compile
var d = ''; //type inference
console.log(typeof (d));
//Arrays
//type assertion
var value = "helloooo";
var lengt = value.length;
var ele = document.getElementById('myelle');
var inp = ele;

//functions
//same as js but add static typing to parameters and return type
function sum(a, b) {
    console.log(a + b);
}
sum(2, 3);
function greet(name, greeting) {
    if (greeting === void 0) { greeting = "hai"; }
    console.log("".concat(greeting, ",").concat(name));
}
greet("raj", "hello");
greet("raj");
