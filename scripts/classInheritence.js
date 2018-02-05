"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name) {
        console.log(name + " welcome constructor!");
    }
    Person.prototype.getId = function () {
        return 10;
    };
    return Person;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name) {
        var _this = _super.call(this, name) || this;
        console.log(name + " welcome 2nd constructor!");
        return _this;
    }
    Employee.prototype.getId = function () {
        return _super.prototype.getId.call(this);
    };
    return Employee;
}(Person));
var Human = /** @class */ (function (_super) {
    __extends(Human, _super);
    function Human(name) {
        var _this = _super.call(this, name) || this;
        _this.getName = function () {
            return _this;
        };
        console.log(name + " welcome 3rd constructor!!");
        _this.setName(name);
        return _this;
    }
    Human.prototype.getId = function () {
        return _super.prototype.getId.call(this);
    };
    Human.prototype.setName = function (name) {
        this.name2 = name;
    };
    return Human;
}(Employee));
/*let e = new Employee("Noyan");
console.log(e.getId());*/
var a = new Human("Noyan");
//a.deneme();
console.log(a.getName());
