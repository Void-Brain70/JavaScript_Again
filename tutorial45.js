//Arrow function(map,filter)

var info=
[
   {
    name:"Anik",
    dept:"CSE",
    id:"70",
    gpa:3.50
   },
   {
    name:"Momo",
    dept:"CSE",
    id:"71",
    gpa:3.77
   },
   {
    name:"Nitu",
    dept:"CSE",
    id:"72",
    gpa:3.85
   }         
]

//traditional function
// function show()
// {
//     return info.filter(function(i)
//     {
//         return i.gpa>3.51;
//     }).map(function(j)
//     {
//         return j.name;
//     });
// }

// console.log(show());

//arrow function

const show1 = () =>
{
    return info.filter((x)=> x.gpa>3.53).map((y)=> y.name);
}
console.log(show1());




