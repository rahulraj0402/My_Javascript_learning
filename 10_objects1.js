
// ********************------------OBJECTS Literals------------********************

// Singleton : if we make a object using constructor 
// Object.create  // singleton 
// if we make a object like literals then its not a singelton object 

// Here we are talking about object literals 
const mySymbol = Symbol("myKey1")
const JsUser = {
    name : "rahul",    // key: value
    age : 19,
    address : "Pune" ,
    email: "rahul3004rt@gmail.com" ,
    isLoggedIn : false,
    lastLoggedIn : ["Sunday" , "Tuesday" , "Wednesday"],
    "fullname" : "Rahul raj" , 
    [mySymbol] : "mykey1"
}
// console.log(JsUser);
// o/p
// {
//     name: 'rahul',
//     age: 19,
//     address: 'Pune',
//     email: 'rahul3004rt@gmail.com',
//     isLoggedIn: false,
//     lastLoggedIn: [ 'Sunday', 'Tuesday', 'Wednesday' ]
//   }


// lets access the name of JsUser
// console.log(JsUser.name);  // o/p rahul
// console.log(JsUser["name"]);  // o/p rahul [ since behind the scene JS takes key as String]
// console.log(JsUser["fullname"]);   // o/p Rahul raj
// lets play with SYMBOL **********
// console.log(typeof(JsUser.mySymbol)); // HERE we are getting the symbol but as a string o/p : string not as a symbol
// console.log(JsUser[mySymbol])  // o/p : mykey1
// console.log(typeof(mySymbol)); // op : symbol [ now after giving correct syntax its coming as sybol]

JsUser.name = "Raj"  // changing the name in object Juser
// Object.freeze(JsUser)  // FREEZ : the value can't be changed 
JsUser.name = "rohan" // lets try to change 
console.log(JsUser.name); // O/P : raj [ cant be changed ] since we have freezed the object 

JsUser.greeting = function(){
    console.log("GREETING 1  ");
}
JsUser.greeting2 = function(){
    console.log(` GREETING 2 , ${this.name} `);  // here we have injected the name value using back tics ` ` and &{}
}
console.log(JsUser.greeting());
console.log(JsUser.greeting2());





