"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.jhghdgjfjgjgfjghjdfgjdhgfj = exports.abc = exports.SuperPerson = exports.Person = void 0;
//Object oriented programming
//classes in ts are same as other oop languages. they will allow you to define object blueprints with its properties/data and methods
var Person = /** @class */ (function () {
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person.prototype.getFullName = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    return Person;
}());
exports.Person = Person;
var obj1 = new Person("john", "doe");
obj1.getFullName(); //john doe
var SuperPerson = /** @class */ (function (_super) {
    __extends(SuperPerson, _super);
    function SuperPerson(p, f, l) {
        var _this = _super.call(this, f, l) || this;
        _this.power = p;
        return _this;
    }
    return SuperPerson;
}(Person)); //by default public, but if you declare something as private then it cannot be passed
exports.SuperPerson = SuperPerson;
exports.abc = 55;
var obj4 = new SuperPerson("fly", "raj", "shekhar");
console.log(obj4.getFullName());
//can i access class variables directly without object
//Access modifiers
//default is public, can be accessed anywhere means within class and outside class
//private  ... cannot be accesses outside of class
//protected -- can be accessed only by class and its subclasses
var Rectangle = /** @class */ (function () {
    function Rectangle(w, h) {
        this.w = w;
        this.width = w;
        this.height = h;
    }
    Rectangle.prototype.getArea = function () {
        this.width = 25;
        return this.width * this.height;
    };
    return Rectangle;
}());
var shape1 = new Rectangle(40, 30);
console.log(shape1.getArea());
//Abstract class
var Shape = /** @class */ (function () {
    function Shape() {
    }
    return Shape;
}());
var Circle2 = /** @class */ (function (_super) {
    __extends(Circle2, _super);
    function Circle2(r) {
        var _this = _super.call(this) || this;
        _this.r = r;
        return _this;
    }
    Circle2.prototype.calculateArea = function () {
        console.log(Math.PI * this.r * this.r);
    };
    return Circle2;
}(Shape));
var obj7 = new Circle2(5);
obj7.calculateArea();
//function
function add2(a, b) {
    return a + b;
}
function jhghdgjfjgjgfjghjdfgjdhgfj(a, b) {
    return a + b;
}
exports.jhghdgjfjgjgfjghjdfgjdhgfj = jhghdgjfjgjgfjghjdfgjdhgfj;
exports.default = add2;
