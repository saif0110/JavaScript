var object = {
    name: "Tauheed Khan",
    qualification: "Engineering",
    stream: "Computer Science and engineering",
    anyGovtId : true,
    clickBio: function (){
        console.log(`
            Hi myself ${this.name} 
            i have done my graduation in ${this.qualification}, stream is ${this.stream}.
            i am legal person  in indian origin: ${this.anyGovtId}

        `);
    }
}
console.log(object.clickBio());
// let us see for in loop
for(const data in object){
    console.log(object[data]);
}