//forEach,map,filter

//forEach
var a1=[1,2,3,4,5];

var a2 = [];

a1.forEach(function(i)
{
    a2.push(i*i);
});

console.log(a2);

//map
var ar1=[1,2,3,4,5];

var ar2 = a1.map(function(i)
{
    return i*i;
});

console.log(ar2);

//filter

var arr1=[5,10,15,20];

var arr2 = arr1.filter(function(i)
{
    return i>10;
});

console.log(arr2);
