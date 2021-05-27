//for...of, for...in

//for..of
const names = ["Anik","Momo","Das"];

for(let name of names)
{
    console.log(name);
}

//for..in

let obj={
    name: "Anik das",
    dept:"CSE",
    id:"70"
}

for(let x in obj)
{
    console.log(`${x} : ${obj[x]}`);
}