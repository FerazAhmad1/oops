"use-strict";

const Person = function (firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
};

const studentA = new Person("feraz", "ahmad");
console.log(studentA);
