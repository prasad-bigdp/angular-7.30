//Object oriented programming
//classes in ts are same as other oop languages. they will allow you to define object blueprints with its properties/data and methods
export class Person{
    firstName: string
    lastName: string
    constructor(firstName:string,lastName:string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`
    }
}
let obj1 = new Person("john", "doe")
obj1.getFullName()//john doe
export class SuperPerson extends Person{
    //public,private nd protected
  power: string
    constructor(p: string, f: string, l: string) {
        super(f,l)
         this.power = p;
    }
   
}//by default public, but if you declare something as private then it cannot be passed
export let abc = 55;
let obj4 = new SuperPerson("fly","raj", "shekhar")
console.log(obj4.getFullName())

//can i access class variables directly without object
//Access modifiers
//default is public, can be accessed anywhere means within class and outside class
//private  ... cannot be accesses outside of class
//protected -- can be accessed only by class and its subclasses
class Rectangle
{
  width: number;
    height: number;
    constructor(private w: number, h: number) {
        this.width = w;
        this.height= h;
    }
    getArea() {
        this.width = 25;
        return this.width*this.height
    }
}
let shape1 = new Rectangle(40, 30)
console.log(shape1.getArea())
//Abstract class
abstract class Shape{
    abstract calculateArea():void
}
class Circle2 extends Shape{
    r: number;
    constructor(r: number) {
        super()
        this.r = r;
    }
   
    calculateArea(): void {
        console.log(Math.PI * this.r * this.r);
    }
}
let obj7 = new Circle2(5);
obj7.calculateArea()



//function
function add2(a: number, b: number): number
{
    return a + b;
}
function jhghdgjfjgjgfjghjdfgjdhgfj(a: string, b: string): string {
	return a + b
}
export default add2








