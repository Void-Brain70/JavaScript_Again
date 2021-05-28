//Arrow Function

function dis()
{
    console.log("Hi JavaScript");
}

dis();


const dis2 = () =>
{
    console.log("Hi Python");
}

dis2();

//for return

function fun1()
{
    return "Hi java";
}
console.log(fun1());

// const fun2=()=>
// {
//     return "Hi C++";
// }
// console.log(fun2());

const fun2=()=> "Hi C++";
console.log(fun2());

//passing parameter

function add1(x,y)
{
    return x+y;
}

console.log(add1(10,20));

const add2 =(a,b)=>
  a+b;
console.log(add2(10,20));