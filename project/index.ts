let a: number | string= 55// type annotation
let b: string = "raj"
let c: boolean = true
a = "prasad"
let arr: (string | number)[] = [ 15, 25, 5, 6, 'raj123', 'raj' ];
//Tuples
const details: [ string, number, string ] = [ "prasa", 20000, "abc@gmail.com" ]
details.push('raj')
console.log(details)
//Enums
enum Colors {
	Red=5,
	Yellow,
	Green,
	Blue,
}
let myColor: Colors = Colors.Green;
console.log(Colors[ myColor ])
enum Days{
    sunday,
    monday,
    tuesday,
    wednesday,
    thursday,
    friday,
    saturday
}
let today: Days = Days.wednesday;
console.log(today)
//transpile== transform+compile
let d = ''; //type inference
console.log(typeof (d))
//Arrays
//type assertion
let value: any = "helloooo"
let lengt: number = (value as string).length
const ele = document.getElementById('myelle')
const inp = ele as HTMLInputElement;
inp.value=""

//functions
//same as js but add static typing to parameters and return type
// function sum(a:number, b:number):never {
// throw err }
// sum(2, "raj")
//optional parameters/default parameters
function greet(name:string, greeting?:string)
{
    console.log(`${greeting},${name}`);
}

greet("raj", "hello")//hello ,raj
greet("raj")//hai,raj
//rest parameters
function sum(...numbers:number[])
{
    return numbers.reduce((total,num)=>total+num,0)
}
sum(2, 3)
sum(2, 3, 5)
sum(2, 3, 5, 7, 9)
//function expressions/arrow functions
const multiply = (a: number, b: number): number => a * b;
function sub(a: number, b: number):never {
    throw Error;
}
//interfaces
//interfaces define the structure of objects and primary used for describing theshape of data structure.
interface Car{
    model: string,
    year: number,
    manufacturer:string
}
const myCar: Car = { model: "camry", manufacturer: "toyato", year: 2022 }
interface Employee{
    name:string,
    salary:number,
    id: number,
    phno?:number
}
interface Manager extends Employee{
    team:number
}
const employee1:Employee={name:"raj",salary:20000,id:1526}
const m1: Manager = { team: 5, name: "", salary: 0, id: 0 }
//class with interface
interface Shape{
    area(): number
}
class Circle implements Shape{
  constructor(public radius: number) { }
    area() {
        return Math.PI*this.radius*this.radius
    }
}
const myCircle= new Circle(5)
console.log(myCircle.area())
interface Student {
	name: string
	rno: number
	phno: number
}
interface Topper extends Student{
    marks?:number
}
let obj: Student = { name: "raj", rno: 25, phno: 252525 }
// everything is one object
//class is collection of objects.class will have some data and methods
//let obj= new Classname()
class School implements Topper{
    name = "";
    rno = 25;
    phno = 555555;
   
    test():void {
        console.log("hello");
    }
}
let obj2 = new School()
/* prasad alias raj*/
type nrs = number|string;
let num:nrs = 25;
type myObj2 = {
    name: string,
    phno:number
}

interface myObj3{
    name: string,
    phnio:number
}
let student2: myObj2 = { name: "", phno: 2525 }


/* type alias */
/*Type aliases allow you to create a custom name for any data type includes primitive,objects,functions and unions */
type prasad = number
let k: prasad = 25
type MyObj = {
	name: string,
	rno: number,
	phno: number
}
let obj5: MyObj = { name: "", rno: 50, phno: 52 }

type Result = "sucess" | "failure"
let value5: Result = "sucess"

function fun(a: number):number {
    return a*5
}
type fun=(a:number)=>number
const fun2:fun = (a) => a*5
const fun3:fun = (b) => b*10

type mul2 = (a: number, b: number) => number
const m: mul2 = (p, q) => p * q






// type Persons = "raj" | "geetha" | "jessi" | "john";
// type work = "teacher" | "plumber" | "student" | "writer"
// const note:Record<Persons,work>={raj:"plumber"}






