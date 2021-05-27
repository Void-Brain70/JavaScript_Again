//objects literals

function info1(name,dept)
{
    return{
        name : name,
        dept : dept
    };
}

console.log(info1("Anik das","CSE"));

function info1(name,dept)
{
    return{
        name,
        dept
    };
}

console.log(info1("Momo saha","CSE"));

//consise method

// let obj={
//     body:function()
//     {
//         return `Hi`;
//     }
// }
// console.log(obj.body());

let obj={
    body()
    {
        return `Hi`;
    }
}
console.log(obj.body());

let obj1={
    'body name'()
    {
        return `Hi`;
    }
}
console.log(obj1['body name']());


