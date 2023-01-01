/**
 here we willl learn how to make isEeven function 
 using our own method
    1.every
    2.fill
    3.filter
    4.slice
    5.splice
 */
    /*
        inroduction to aero function whwt are these?
     */
    var what = (num) =>{        // the var what is refering to the aero function 
        return num%2 === 0;     //  we can call through it by var just.
    }
    console.log(what(3));
 function isEven(num){
    if(num %2 === 0)
        return true;
    else
        return false;
    }
    var val = [2, 4, 3, 8];
    // console.log(isEven(4));
    // now have a look on every function in js.
    var ans = val.every((num) => isEven(num));
    console.log(`
        line number 16 ${ans}
    `);
    // var myname = "Tauheed Khan"
    // console.log(`
    //     hey my name is ${myname}
    // `);

     // lets check out fill method same as java.
 var filling = [1,22,3,4,4,4];
 filling.fill(0);
 console.log(filling);

 // checking out slice method.
 var name = ["rajsthan", "jaipur"," mumbai", "delhi","noida", "hyderabad"];
 console.log(name);
 // check out slice method.
 console.log(name.slice(1,3,"Lucknow"));
 console.log(name);
 // check out splice method.
 console.log(name.splice(1,3, "Lucknow"));
 console.log(name);

 // check out filter method.
 var  test = [1,2,3,4,5,6,7];
 var random = ["saif", "sama", 06, "khankhana",34, "mard","gumrah"];
 var ans = test.filter((num)=>  num !== 5);
 var res = random.filter((val)=>(val.typeof   !== String));
 console.log(ans);
 console.log(res);
 