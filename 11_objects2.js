// ********************------------OBJECTS Singleton------------********************
// or how we can declare the objects using constructor 

// const tinderUser = new Object()   // this is singleton object
// console.log(tinderUser); // o/p : {} 


// const tinderUser = {}   // this is non singleton objects 
// // console.log(tinderUser); // o/p : {}

// tinderUser.id = "123abc"  // declaring the values inside the object 
// tinderUser.name = "ram"
// tinderUser.isLoggedIn = false

// console.log(tinderUser); // o/p { id: '123abc', name: 'ram', isLoggedIn: false }

// ********************------------NESTED OBJECTS------------********************

// lets declare objects inside objects 
// const regularUser = {
//     email : "rahul@google.com",
//     fullname :  {
//         userFullname : {
//             firstName : "rahul",
//             lastName : "raj"
//         }
//     }
// }

// console.log(regularUser);    //NESTED OBJECTS 
// // o/p : {
// //     email: 'rahul@google.com',
// //     fullname: { userFullname: { firstName: 'rahul', lastName: 'raj' } }
// //   }


// // accessing the values inside objects 
// console.log(regularUser.fullname); // o/p : { userFullname: { firstName: 'rahul', lastName: 'raj' } }
// console.log(regularUser.fullname.userFullname);  // o/p : { firstName: 'rahul', lastName: 'raj' }

// ********************------------COMBINING OBJECTS------------********************
// const obj1 = {1 : 'a' , 2 : 'b'}
// const obj2 = {3 : 'a' , 4 : 'b'}

// const obj3 = {obj1 , obj2}
// console.log(obj3);  // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } } // Objects inside objects | WRONG IDEA 
// SYNTAX FOR COMBINING OBJECTS
// const obj3 = Object.assign(obj1 , obj2)
// console.log(obj3); // o/p :  { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
// // SYNTAX FOR COMBINING OBJECTS { taking a extra {} or empty object }
// const obj3 = Object.assign({},obj1 , obj2)
// console.log(obj3); // o/p : { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
// SPREAD OPERATOT 
// const obj1 = {1 : 'a' , 2 : 'b'}
// const obj2 = {3 : 'a' , 4 : 'b'}

// const obj3 = {...obj1 , ...obj2}
// console.log(obj3); // op : { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

// ARRAY OF OBJECTS
const users = [
    {
        name: "rahul",
        age : 25
    },
    {
        address : "Pune,Maharastra",
        pin:9862
    }
]
// console.log(users); 
// [
//     { name: 'rahul', age: 25 },
//     { address: 'Pune,Maharastra', pin: 9862 }
//   ]
// console.log(users[1]);  // op : { address: 'Pune,Maharastra', pin: 9862 }


// ACCESSING BY KEY AND VALUE 
const tinderUser = {}   // this is non singleton objects 
// console.log(tinderUser); // o/p : {}

tinderUser.id = "123abc"  // declaring the values inside the object 
tinderUser.name = "ram"
tinderUser.isLoggedIn = false

console.log(tinderUser); // { id: '123abc', name: 'ram', isLoggedIn: false }
console.log(Object.keys(tinderUser));
// o/p [ 'id', 'name', 'isLoggedIn' ] (got all the keys in the form of array )
console.log(Object.values(tinderUser));
// o/p : [ '123abc', 'ram', false ] ( got all the values in the form of array )

