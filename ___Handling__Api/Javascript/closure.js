
// function print() {
//     var a = 10;
//     console.log(a);

// }

// print()

// function count() {
//     var initial = 1;
//     function plus () {
//             console.log(++initial);
//     }
//    return plus; 
// }
// var c = count();
// c();
// c();




message = "Good global"
function hello(){
    let message = "Good morning";
    {
        let message ="Good afternoon";  //In this code let will be use in block scope not in the funciton scope.
        console.log("Hello " + message);
    }

    let c  = function hello2(){
        console.log(" i am  c "  + message); // A function with his lexical scoping in knows as the closure.
    }
    return c;
}

c = hello();
c();