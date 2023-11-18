"use-strict";

const Person = function (firstName, lastName, birthyear) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthyear = birthyear;
};

Person.prototype.calcAge = function () {
  console.log(this, "this");
  return new Date().getFullYear() - this.birthyear;
};
const studentA = new Person("feraz", "ahmad", 1995);
console.log(studentA.calcAge());
console.log(studentA.__proto__); //  studentA.__proto__ is prototype of studentA,  Person.prototype is prototype property  of Person
console.log(Person.prototype.isPrototypeOf(studentA), "check");
