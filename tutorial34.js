//Error Handling try,catch,finally,throw

// try{
//     alert("CSE");
//     alert(x);
//     alert("UAP");

// }catch(err){
//     //alert("GOVT");
//     console.log(err);
//     console.log(err.name);
//     console.log(err.message);

// }finally{
//     alert("GOVT");
// }

document.querySelector("#check").addEventListener("click",function()
{
    var a=document.querySelector("#numTextfield").value;
    console.log(a);
    try{
        if(a<5)
        {
            throw "input is too low";
        }
        else if(a>10)
        {
            throw "input is too high";
        }


    }catch(err){
        console.log(err);
    }
}); 


