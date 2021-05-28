//Array destructure

let arr = [1,2,3,4,5];

let [a1,a2,a3,a4,a5]=arr;

console.log(a1);
console.log(a2);

//swap variables using Array destructure

let a=70 , b=80;

[a,b]=[b,a];

console.log(a);

console.log(b);

//object destructure

const info={
    name:"Anik",
    dept:"CSE",
    id:"70",
    cgpa:3.67,
    address:{
        city:"Dhaka",
        hometown:"chandpur"
    }
}

const {name ,address} = info

console.log(name);
console.log(address);

//destructuring function parameters

const info1=({name,id})=>
{
    console.log(`${name},${id}`);

}

const stu=
{
    name:"Anik",
    id:"70"
}

info1(stu);




