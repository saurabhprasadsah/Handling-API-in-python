

// function print() {
//     var a = 10;
//     console.log(a);

// }

// print()

function count() {
    var initial = 1;
    function plus () {
            console.log(++initial);
    }
   return plus; 
}

var c = count();
c();
c();