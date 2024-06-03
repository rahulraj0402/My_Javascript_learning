// let a = 10
// const b = 20
// var c = 30


// console.log(a)
// console.log(b)
// console.log(c)
// op : 10 , 20 , 30  Till here every thigs is working fine 

// **************** ----------------- Lets see scope  ----------------- ****************
let a = 300 // GLOBAL scope
if(true){

    let a = 10
    const b = 20
    console.log("Inner : " , a);  // Inner :  10  // BLOCK scope
    
}

// console.log(a);
// console.log(b);

console.log(a); // 300