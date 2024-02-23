// function resolveAfter2Seconds() {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve('resolved');
//       }, 5000);
//     });
//   }
  
//   async function asyncCall() {
//     console.log('calling');
//     const result = await resolveAfter2Seconds(); //Promise { <pending> } if you are not using the await function then it will be await function will be call you.
//     console.log(result);
//     // Expected output: "resolved"
//   }
  
//   asyncCall();

// myPromise
//   .then((value) => `${value} and bar`)
//   .then((value) => `${value} and bar again`)
//   .then((value) => `${value} and again`)
//   .then((value) => `${value} and again`)
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

//   myPromise()



// const promiseA = new Promise((resolve, reject) => {
//     resolve(777);
//   });
//   // At this point, "promiseA" is already settled.
//   promiseA.then((val) => console.log("asynchronous logging has val:", val));
//   console.log("immediate logging");
  
  // produces output in this order:
  // immediate logging
  // asynchronous logging has val: 777
  
  

// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('foo');
//     }, 300);
//   });
  
//   promise1.then((value) => {
//     console.log(value);
//     // Expected output: "foo"
//   });
  
//   console.log(promise1);
//   // Expected output: [object Promise]


// setInterval(function () {element.innerHTML += "Hello"}, 1000);
// setInterval(displayHello, 1000);

// setInterval(myTimer, 1000);
// function myTimer() {
//   const date = new Date();
//   document.getElementById("demo").innerHTML = date.toLocaleTimeString();
// }