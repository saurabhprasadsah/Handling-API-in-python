// const binding = {
//     x: 42,
//     getX: function () {
//       return this.x;
//     },
//   };
  
//   const unboundGetX = binding.getX;
//   console.log(unboundGetX()); // The function gets invoked at the global scope
//   // Expected output: undefined
  
//   const boundGetX = unboundGetX.bind(binding);
//   console.log(boundGetX());
//   // Expected output: 42

// function getThis() {
//     return this;
//   }
  
//   const obj1 = { name: "obj1" };
//   const obj2 = { name: "obj2" };
  
//   obj1.getThis = getThis;
//   obj2.getThis = getThis;
  
//   console.log(obj1.getThis()); // { name: 'obj1', getThis: [Function: getThis] }
//   console.log(obj2.getThis()); // { name: 'obj2', getThis: [Function: getThis] }



//lexical scoping
// function init() {
//     var name = "Mozilla"; // name is a local variable created by init
//     function displayName() {
//                          // displayName() is the inner function, that forms the closure
//       console.log(name); // use variable declared in the parent function
//     }
//     displayName();
//   }
//   init();



//   if (Math.random() > 5) {
//     var x = 1;
//   } else {
//     var x = 2;
//   }
//   console.log(x);



// function makeFunc() {
//     const name = "Mozilla";
//     function displayName() {
//       console.log(name);
//     }
//     return displayName;
//   }
  
//   const myFunc = makeFunc();
//   myFunc();
  
// const name = 'Will Robinson';
// console.warn(`Danger ${name}! Danger!`);


// const e = 10;
// function sum(a) {
//   return function (b) {
//     return function (c) {
//       // outer functions scope
//       return function (d) {
//         // local scope
//         return a + b + c + d + e;
//       };
//     };
//   };
// }

// console.log(sum(1)(2)(3)(4)); 


// global scope
// var count = 20;

// function sum(count){
//     return function(b){
//         return function(c){
//             return function(d){
//                 return count+b+c+d
//             }
//         }
//     }
// }

// console.log(sum(count)(5)(6)(2))
