//Array

// //Simple array 
var arr= new Array(5);
arr[0]="70";
arr[1]="71";
arr[2]="72";
arr[3]="73";
arr[4]="74";

document.write(arr);
document.write(arr.length);
document.write(arr[3]);

// //push() method in array
var arr=["CSE","EEE","ME","BBA","CE"]
arr.push("IPE");
document.write(arr);
document.write(arr.length);

// //pop() method in array
var arr=["CSE","EEE","ME","BBA","CE"]
arr.pop();
document.write(arr);
document.write(arr.length);

// //array concatenation
var arr1=["70","71"];
var arr2=["80","81"];

var a=arr1.concat(arr2);

document.write(a);

//loop in Array
var arr=[1,2,3,4,5];
for(var i=0;i<5;i++)
{
    document.write(arr[i]);
}

// sum of array element 
var s=0;
var arr=[1,2,3,4,5];
for(var i=0;i<5;i++)
{
    document.write(arr[i]);
    s=s+arr[i];
}
document.write(s);

//array element input from user

var arr=new Array();

for(var i=0;i<5;i++)
{
    arr[i]=parseInt(prompt("Enter a number:"));
}

var s=0;
for(var i=0;i<5;i++)
{
    document.write(arr[i]);
    s=s+arr[i];
}
document.write(s);


//shift() method It removes and returns the first element of an array.
var arr=[1,2,3,4,5];
arr.shift();
document.write(arr);

//unshift() method It adds one or more elements in the beginning of the given array.
var arr=[1,2,3,4,5];
arr.unshift(0);
document.write(arr);

//splice() method It add/remove elements to/from the given array.
var arr=[1,2,3,4,5];
arr.splice(2,0,"CSE","EEE");
document.write(arr);
arr.splice(2,1,"CSE","EEE");
document.write(arr);

//sort() method It returns the element of the given array in a sorted order.
var arr=["CSE","EEE","ME","BBA","CE"]
var a=arr.sort()
document.write(a);

//reverse() method It reverses the elements of given array.
var arr=["CSE","EEE","ME","BBA","CE"]
var a=arr.sort()
a.reverse();
document.write(a);

//number sort using annynomus function
var arr=[1,9,8,6,5];
arr.sort(function(a,b)
{
    return a-b;
})
document.write(arr);
//
var arr=[1,9,8,6,5];
arr.sort(function(a,b)
{
    return b-a;
})
document.write(arr);





