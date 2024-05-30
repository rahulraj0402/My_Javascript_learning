// let myDate = new Date() // creating a date object
// console.log(myDate); // 2024-05-30T15:32:11.777Z  | cant understand 

// // after converting to toString
// console.log(myDate.toString()); // Thu May 30 2024 21:03:16 GMT+0530 (India Standard Time)
// console.log(myDate.toDateString()); // Thu May 30 2024
// console.log(myDate.toLocaleString()); //  5/30/2024, 9:05:09 PM
// console.log(typeof(myDate));

// let myCreatedDate = new Date(2023 , 0 , 23 )  // Months starts from 0 in javascript 
//                          Mon Jan 23 2023
// let myCreatedDate = new Date(2023 , 0 , 23 , 4 , 9)   // 1/23/2023, 4:09:00 AM
//
// YYYY-MM-DD
// let myCreatedDate = new Date("2023-01-14")   // 1/14/2023, 5:30:00 AM
// MM-DD-YYYY
// let myCreatedDate = new Date("01-10-2023")     // 1/10/2023, 12:00:00 AM

// Time stamps
// let timeStamps =  Date.now()

// console.log(timeStamps);
// console.log(myCreatedDate.getTime());  // we got both the dates now we can compare both 
// let currentDate = Date.now();
// console.log(Math.round(currentDate/1000)); // converet it to milli secionds | 1717084577 [ we can compare this milli seonds ]

let newDate = new Date()
// console.log(newDate.getMonth()+1);
newDate.toLocaleString('default' , {
    weekday:"long"
})




