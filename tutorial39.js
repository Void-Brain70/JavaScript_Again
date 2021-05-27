//Spread operator
function fun(x,y,z)
{
    return x+y+z;
}
let n=[5,5,5];
//console.log(fun(n[0],n[1],n[2]));

console.log(fun(...n));

let arr=[1,2,3,...n];
console.log(arr);

let arr1=[1,2,...n,3];
console.log(arr1);

let a1=[2,2,2];
let a2=[4,4,4];

// let na = a1.concat(a2);

// console.log(na);
let na= [...a1,...a2]
console.log(na);


let obj1={
    name:"Anik das",
    dept:"CSE"
}

let obj2={
    name:"Momo saha",
    dept:"CSE"
}

let obj={ ...obj1, ...obj2};
console.log(obj);




