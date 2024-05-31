
// in JS Array is resizable
// Shallow copy : share the same reference point 
// Deep copy : share the diffrent referene point 

// A deep copy means that all of the values of the new variable are copied and disconnected
//  from the original variable. A shallow copy means that certain (sub-)values are still connected 
//  to the original variable.

// in JS Array can be of minxed type [ string , boolean , char , etc ]

// const myArr = [0 ,1 ,2 ,3 ,4 ,5 ] // 
// const places = ["delhi" , "pune" , "Mumbai"]

// const myArr2 = new Array(1 , 2 , 3  , 4 , 5)
// console.log(myArr2[1]); // accesing by index number


// * * * * * * * * * * * * *  -------- meathods in Array -------- * * * * * * * * * * * * * 

// const myArr = []
// myArr.push("hey")
// myArr.push(1)
// myArr.push('A')

// O/P : [ 'hey', 1, 'A' ] 
// myArr.pop()
 // o/p : [ 'hey', 1 ]
// myArr.unshift(10)
// o/p : [ 10, 'hey', 1 ] // added in the front of the array at 0th index and array is shifted towards right
// myArr.shift()
// o/p : [ 'hey', 1 ] // 10 is removed from the 0th index and array is shifted towards left
// console.log(myArr);

// * * * * * * * * * * * * *  --------  more meathods in Array -------- * * * * * * * * * * * * * 

// const myArr = [0 , 1 , 2 , 3 , 4 , 5 , 6 ]
// console.log(myArr.includes(3));     // O/P : TRUE
// console.log(myArr.indexOf(9));      // -1 [ since its not in the array ]

// const newArray = myArr.join()
// console.log(myArr);
// console.log("type of my Array is " + typeof(myArr));     //  o/p :  Object 
// console.log("type of new Array is " + typeof(newArray));   //   o/p : String 
// means after joining two array in JS the new one wil be of type STRING
// console.log(newArray);

// * * * * * * * * * * * * *  --------  slice and splice meathods in JS -------- * * * * * * * * * * * * *
// SLICE  
// const myArr = [1 , 2 , 3 , 4 , 5]
// console.log("A" ,  myArr);
// console.log(myArr.slice(1,3));
// o/p :    this will slice from index number 1 to 2 | exclude the last range 
// A [ 1, 2, 3, 4, 5 ]
// [ 2, 3 ]

// SPLICE
// console.log("B" , myArr);
// console.log(myArr.splice(1,3));
// console.log(myArr);

// o/ p   : this will work till the range 
// B [ 1, 2, 3, 4, 5 ]  | this will modify the actual array 
// [ 2, 3, 4 ]
// [ 1, 5 ]



