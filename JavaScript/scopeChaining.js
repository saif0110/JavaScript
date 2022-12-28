/*
before understanding scope chainning try to have  a look on to context
there are few context in js
global context: 
execution context: 
for browser there is a global cotext named window.
        if(name == window.name) says true;
and there are some other kind of context in js. 
*/
/*
Remember:
    1. functions are scanned and made available.
    2. variable are scanned and made undefined.
*/
// scopeChaining.js
var name =  "Tauheed Khan";

console.log("Line number 16", name);


sayName();
function sayName(){
    // var name = "Mr. Saif";
    console.log("Line number 20",name);
    sayMe();
    function sayMe(){                       // function inside a function.
        // var name = "Mrs Sama";
        console.log("Line number̥ 23", name);
    }
}
0
// variable are scanned and made undefined.
//prooving this point 

var name = "Mrs. Universe of my heart";
console.log(name);


/*
in java script {
    // the braces known as scope as general => {}
}
 */