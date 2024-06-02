

// function sayMyName() {
//     console.log('R')
//     console.log('A');
//     console.log('H');
//     console.log('U');
//     console.log('L');
// }
// // sayMyName()
// // sayMyName()

// // create a function for printing in range start and end 
// 
// function addTwoNumber(num1 , num2){
    
//         console.log(num1 + num2);
    
    
// }
// // addTwoNumber(2,9)  // op : 11
// // addTwoNumber(1,"90")   // op : 190  [ TYPE CHECKING IS IMPORTANT]
// // addTwoNumber(1 , 'a')   // OP: 1a  [ TYPE CHECKING IS IMPORTANT] 
// const result = addTwoNumber(2,9)
// console.log(result);   // op : undefined [ SINCE WE HAVE NOT RETURNED ANY VALUE FROM OUR FUNCTION ]


// ************ -------- Returning a value from a function 

// function addTwoNumber(n1 , n2){
//     let res = n1 + n2
//     return res                        // [ Here we are rrturning a number]
// }
// const ans = addTwoNumber(2,2)
// console.log(ans);  // ans = 4 

// ************ --------  just returning without declaring
// function addTwoNumber(n1 , n2){
//     return n1 + n2
// } 
// let res = addTwoNumber(2,2)
// console.log(res);    // op :  4

// ************ -------- Another way of declaring functions

// function loginUserMessage(username){
//     if(username != undefined){
//         return `${username} just logged in`
//     }else{
//         return "please enter some value "
//     }
    
// }
// // console.log(loginUserMessage("rahul"))   // op : rahul just logged in
// console.log(loginUserMessage("Rahul")); // Rahul just logged in 
// console.log(loginUserMessage()); // op : please enter some value  [ since if we pass no arguments it will be undefinded ]

// ************ -------- Another way of declaring functions

// function loginUserMessage(username){
//     if(username === undefined){
//         console.log("please enter a valid value ");
//         return
//     }else{
//         return `${username} is logged in `
//     }
// }
// console.log(loginUserMessage());

// ************ -------- Another way of declaring functions

function loginUserMessage(username){
    if(!username){
        console.log("please enter a valid value ");
        return
    }else{
        return `${username} is logged in `
    }
}
console.log(loginUserMessage()); // please enter a valid value  
console.log(loginUserMessage("rahul")); // rahul is logged in 




 


