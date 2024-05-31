// * * * * * * * * * * * * *  --------  PUSH meathod -------- * * * * * * * * * * * * *

const marvel_heroes = ["thor" ,"ironman" , "spiderman" ]
const dc_heroes = ["superman" , "flasman" , "spiderman"]

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


// * * * * * * * * * * * * *  --------  spread Operator -------- * * * * * * * * * * * * *
// this ... spreads the array in single items 
const all_new_heroes = [...marvel_heroes , ...dc_heroes] 
console.log(all_new_heroes);
