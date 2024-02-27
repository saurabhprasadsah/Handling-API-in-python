
/* const myObject = {
    city: "Madrid",
    greet() {
      console.log(`Greetings from ${this.city}`);
    },
  };
  
myObject.greet(); // Greetings from Madrid
  
const myDate = new Date();
let object = myDate;

do {
  object = Object.getPrototypeOf(object);
  console.log(object);
} while (object);

Date.prototype
Object { }
null

const myDate = new Date(1995, 11, 17);
console.log(myDate.getMonth()); // 11
console.log(myDate.getDate()); // 17

console.log(myDate.getFullYear()); //1995

myDate.getYear = function () {
  console.log("something else!");
};

myDate.getYear(); // 'something else!'

const personPrototype = {
    greet() {
      console.log(`hello, my name is ${this.name}!`);
    },
  };
  
function Person(name) {
    this.name = name;
  }

Object.assign(Person.prototype, personPrototype);
or
Person.prototype.greet = personPrototype.greet;

*/


