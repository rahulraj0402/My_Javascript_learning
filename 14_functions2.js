// ********** ----------  Functions with objects and array in javascript ----------**********
function calculateCartPrice(num1){
    return num1
}
console.log(calculateCartPrice(100));   // op : 100
console.log(calculateCartPrice(100 ,200,300)); // op : 100 ( only first element is working )
// here we have given as 100 rupees [ in this case its fine ]
// but as a user it possible that i'll add lots of things in my cart so 
// i need simethingh that will bind everythingh and give me an array so it would be easy to perform any operation 

// // ********** ----------  REST OPERATOR   ( ... num) ----------********** 
function calculatePriceOfCart(...num1){

    return num1
}
console.log(calculatePriceOfCart(100,200,300,400)); // :  op [ 100, 200, 300, 400 ] | here we are getting an array 

// // // ********** ----------  REST OPERATOR   another way  ----------********** 
function calculatePrice(val1 , val2 , ...num){
    return num
}
console.log(calculatePrice(100 , 200 , 300 , 90 , 700 , 90 ));  // op : [ 300, 90, 700, 90 ] | only num is printed 



// // // ********** ----------  Passing objects in a function    ----------********** 
// here we have made a function where we are taking a object as a arguments 
const userName = {
    name : "rahul",
    phoneNumber : "87892511",
    email : "rahul@google.com"
}

function handleObject(ANYOBJECT){
    console.log(`the name of user name is ${ANYOBJECT.name} , email is ${ANYOBJECT.email} and phone number is 
    ${ANYOBJECT.phoneNumber}`)
}

handleObject(userName)  // op : the name of user name is rahul , email is rahul@google.com and phone number is 87892511

// --------- --------- --------- --------- ANOTHER WAY OF INJECTING A OBJECT  --------- --------- --------- --------- ---------

handleObject({
    userName : "sam",

})


