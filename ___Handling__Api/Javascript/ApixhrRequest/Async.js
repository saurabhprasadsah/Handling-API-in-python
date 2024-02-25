const requesturl = 'https://api.github.com/users/saurabhprasadsah';

const xhr = new XMLHttpRequest();
console.log("UNSENT", xhr.readyState); // readyState will be 0

xhr.open("GET", requesturl, true);
console.log("OPENED", xhr.readyState); // readyState will be 1

// xhr.onprogress = () => {
//   console.log("LOADING", xhr.readyState); // readyState will be 3
// };

// xhr.onload = () => {
//   console.log("DONE", xhr.readyState); // readyState will be 4
// };

// xhr.send(null);
