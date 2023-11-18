"use-strict";

const Person = function (firstName, lastName, birthyear) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthyear = birthyear;
  this.calcAge = () => {
    return new Date().getFullYear() - this.birthyear;
  };
};

const studentA = new Person("feraz", "ahmad", 1995);
console.log(studentA.calcAge());
console.log(studentA);
