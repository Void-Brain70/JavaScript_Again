//find(callback,value)
// let n=[1,33,44,7,55];


const fun=(value,index,array)=>
{
    if(value%2==0)
    {
        return value;
    }
}

let m=n.find(fun)

// let m=n.find(i=> i%2==0)

console.log(m);


//findIndex(callback,value)

let n=[1,33,44,7,55];


const fun=(value,index,array)=>
{
    if(value%2==0)
    {
        return value;
    }
}

let m=n.findIndex(fun)

// let m=n.find(i=> i%2==0)

console.log(m);
