 // ***********  NESTED SCOPE ***********

 function one(){
    const userName = "Rahul"

    function two(){
        const website = "Youtube"
        console.log(userName);
    }
    // console.log(website);  // Can't be reached [ outside the scope]
    two()  // O/P : Rahul 

 }

 one()