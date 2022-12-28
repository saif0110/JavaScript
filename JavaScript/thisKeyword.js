 /*
 TODO:  part 1
 this keywod in js
 */

 console.log(this);
 //on console output => {}
//  on browser output => window
// that simply means it is refering to a context window that is global.


 function sayHi(){
    var name = "The king is back."
    console.log(this);
 }
// output => no output.