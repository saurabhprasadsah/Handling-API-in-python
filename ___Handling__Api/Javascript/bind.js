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


function init() {
    var name = "Mozilla"; // name is a local variable created by init
    function displayName() {
                         // displayName() is the inner function, that forms the closure
      console.log(name); // use variable declared in the parent function
    }
    displayName();
  }
  init();
  
  