//Default and Rest parameter

//default
function fun(text="Default parameter")
{
    console.log(`Anik ${text}`);
}
fun("uap student");
fun();

//rest

function add(x,y, ...z)
{
    console.log(`X = ${x},Y = ${y}, Z=${z}`);
}
add(10,20,49,69,6789);

//
function add(x,y, ...z)
{
    let s=x+y+z
    console.log(`Sum= ${s}`);
    console.log(`X = ${x},Y = ${y}, Z=${z}`);
}
add(10,20,10,20);