/* set timeout and setInterval */


function sayhello(){
    console.log("Hello  ");
    
}

console.log("And the wait will be start here" );


var intervalid =setInterval(sayhello,1000) // continious interval time of setInterval will be running in this code.

clearInterval(intervalid) // exit the setinterval the intervalId

// setTimeout(sayhello, 5000)
// setTimeout(sayhello, 3000)


