"use strict";
let a = 55; // type annotation
let b = "raj";
let c = true;
a = "prasad";
let arr = [15, 25, 5, 6, 'raj123', 'raj'];
let fruits = ["banana", "orange", "mango"];
//Tuples
const details = ["prasa", 20000, "abc@gmail.com"];
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
let myColor = Colors.Green;
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
let today = Days.wednesday;
console.log(today);
//transpile== transform+compile
let d = ''; //type inference
console.log(typeof (d));
//Arrays
//type assertion
let value = "helloooo";
let lengt = value.length;
const ele = document.getElementById('myelle');
const inp = ele;
inp.value = "";
//functions
//same as js but add static typing to parameters and return type
// function sum(a:number, b:number):void {
//   console.log(a + b);
// }
// sum(2, "raj")
//optional parameters/default parameters
function greet(name, greeting = "hai") {
    console.log(`${greeting},${name}`);
}
greet("raj", "hello"); //hello ,raj
greet("raj"); //hai,raj
//rest parameters
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
sum(2, 3);
sum(2, 3, 5);
sum(2, 3, 5, 7, 9);
//function expressions/arrow functions
const multiply = (a, b) => a * b;
function sub(a, b) {
    throw Error;
}
const myCar = { model: "camry", manufacturer: "toyato", year: 2022 };
const employee1 = { name: "raj", salary: 20000, id: 1526 };
const m1 = { team: 5, name: "", salary: 0, id: 0 };
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    area() {
        return Math.PI * this.radius * this.radius;
    }
}
const myCircle = new Circle(5);
console.log(myCircle.area());
let obj = { name: "raj", rno: 25, phno: 252525 };
// everything is one object
//class is collection of objects.class will have some data and methods
//let obj= new Classname()
class School {
    constructor() {
        this.name = "";
        this.rno = 25;
        this.phno = 555555;
    }
    test() {
        console.log("hello");
    }
}
let obj2 = new School();
let num = 25;
let student2 = { name: "", phno: 2525 };
let k = 25;
let obj5 = { name: "", rno: 50, phno: 52 };
let value5 = "sucess";
function fun(a) {
    return a * 5;
}
const fun2 = (a) => a * 5;
const fun3 = (b) => b * 10;
const m = (p, q) => p * q;
