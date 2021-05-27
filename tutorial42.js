//for vs foreach

// var n = [1,2,3,4];
 
// for(var i=0;i<n.length; i++)
// {
//     console.log(n[i]);
// }


var n=[1,2,3,4];

n.forEach(fun);

function fun(i)
{
    console.log(i);
}
//another way
n.forEach(function(i)
{
    console.log(i);
});

//
var a1=[1,2,3,4];
var a2=[];
a1.forEach(function(x)
{
    a2.push(x*x);
});
console.log(a2);

//
var arr=[10,20,30];

arr.forEach(function(i,index,arr){
    arr[index]=i+ 5;
});
console.log(arr);

