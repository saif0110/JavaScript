/*
Define a function that takes two variable name and role
Role can be
admin : with all access
subadmin: access to create delete courses.
testprep: access to create delete test.
user: access of user content.
function module getUserRole(name, role)
*/

// function getUserRole(name, role){
//     var key = role;
//     switch(key){
//         case "admin":
//             return `${name} is a admin having all access over the site`;
//         case "subadmin":
//             return `${name} is sub-admin having the access of creating and deleting courses on the site`;
//         case "testprep":
//                 return `${name} is test-prep having the access of creating and deleting tests on the site`;
//         default:
//             return `${name} is a user will access user content only.`;

//     }
// }


// making a function without name and keeping them  in a variable that is obviously ok;

var getUserRole = function (name, role){
    var key = role;
    switch(key){
        case "admin":
            return `${name} is a admin having all access over the site`;
        case "subadmin":
            return `${name} is sub-admin having the access of creating and deleting courses on the site`;
        case "testprep":
                return `${name} is test-prep having the access of creating and deleting tests on the site`;
        default:
            return `${name} is a user will access user content only.`;

    }
}
console.log(getUserRole("Saif","admin"));
console.log(getUserRole("Sama","subadmin"));
console.log(getUserRole("harnaj singh siddhu","testprep"));
console.log(getUserRole("karina kapoor","user"));

// console.log(getUserRole("Saif","admin"));
// console.log(getUserRole("Sama","subadmin"));
// console.log(getUserRole("harnaj singh siddhu","testprep"));
// console.log(getUserRole("karina kapoor","user"));