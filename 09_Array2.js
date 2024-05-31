// * * * * * * * * * * * * *  --------  PUSH meathod -------- * * * * * * * * * * * * *

// const marvel_heroes = ["thor" ,"ironman" , "spiderman" ]
// const dc_heroes = ["superman" , "flasman" , "spiderman"]

// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes);
// [
//     'thor',
//     'ironman',
//     'spiderman',
//     [ 'superman', 'flasman', 'spiderman' ]
//   ] 
// here we have got array inside array 

// console.log(marvel_heroes[3]);  // O/P : [ 'superman', 'flasman', 'spiderman' ] 
// console.log(marvel_heroes[3][0]);   // o/p :  superman ( got the 0thindex of 3 index of marvel heroes)


// * * * * * * * * * * * * *  --------  Concat meathod -------- * * * * * * * * * * * * *
// const all_heroes = marvel_heroes.concat(dc_heroes)
 
// console.log(all_heroes); //  o/p : [ 'thor', 'ironman', 'spiderman', 'superman', 'flasman', 'spiderman' ]
// HERE WE HAVE ADDED BOTH THE ARRAY AND EACH ELEMENT IS SEPERATDE 

// * * * * * * * * * * * * *  --------  spread Operator -------- * * * * * * * * * * * * *
// this ... spreads the array in single items 
// const all_new_heroes = [...marvel_heroes , ...dc_heroes] 
// console.log(all_new_heroes);
//  o/p : [ 'thor', 'ironman', 'spiderman', 'superman', 'flasman', 'spiderman' ]


// * * * * * * * * * * * * *  --------  flat function  -------- * * * * * * * * * * * * *

// const another_array = [1 , 2 , 3 , [4 , 5 , 6 ] , [7 ] , [6 , 7 , [ 4 , 5]] ]
// here we have array -> array -> array 
// flat functions returns a new array containing all the subarray 
// const my_usable_array = another_array.flat(Infinity); 
// console.log(my_usable_array);
// o/p  : 
// [
//     1, 2, 3, 4, 5,
//     6, 7, 6, 7, 4,
//     5
//   ]

// * * * * * * * * * * * * *  --------  converting a string to array   -------- * * * * * * * * * * * * *
// console.log(Array.isArray("Rahul")); // o/p : false

// console.log(Array.from("Rahul"));
// o/p : [ 'R', 'a', 'h', 'u', 'l' ]  // from() is changing a string to array 

// console.log(Array.from({name : "rahul"}))   // special case , making a arrya from 
// // o/p : [] empty array , we have to tell specifically that we have to change the name to array 
// console.log(Array.from({name : "rahul"})) 

// * * * * * * * * * * * * *  --------  of meathod   -------- * * * * * * * * * * * * *


// let score = 100
// let score1 = 100
// let score2 = 100

// console.log(Array.of(score , score1 , score2));
// [ 100, 100, 100 ]