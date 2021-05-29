//Synchronous Programming

const fun1=()=>
{
    console.log("JavaScript");
}

const fun2=()=>
{
    console.log("Java");
}

const fun3=()=>
{
    console.log("Python");
}

const fun4=()=>
{
    console.log("C++");
}

fun1();
fun2();
fun3();
fun4();

// console.log("JavaScript");
// console.log("Java");
// console.log("Python");
// console.log("C++");


//Asynchronous Programming
const fun1=()=>
{
    console.log("JavaScript");
}

const data=()=>
{
    console.log("Data loading")
}

const fun2=()=>
{
    setTimeout(data,2000);
    console.log("Java");
}

const fun3=()=>
{
    console.log("Python");
}

const fun4=()=>
{
    console.log("C++");
}

fun1();
fun2();
fun3();
fun4();


