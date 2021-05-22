//object
var obj={
    name:"Anik das",
    id:"18101070",
    dept:"CSE",
    age:23,
    skills:["C++","C","Python","JavaScript","Java"]
}
document.write(obj.skills);

// //multiple object
var obj1={
    name:"Anik das",
    id:"18101070",
    dept:"CSE",
    age:23,
    skills:["C++","C","Python","JavaScript","Java"]
}
var obj2={
    name:"Abir das",
    id:"18101071",
    dept:"CSE",
    age:23,
    skills:["C++","C","Python","JavaScript"]
}
document.write(obj1.skills);

//Constructor

function Student(name,id,dept,age,skills)
{
    this.name=name;
    this.id=id;
    this.dept=dept;
    this.age=age;
    this.skills=skills;

    this.display=function()
    {
        document.write(this.name);
        document.write(this.id);
        document.write(this.dept);
        document.write(this.age);
        document.write(this.skills);

    }
}
var obj1 = new Student("Anik Das","18101070","CSE",23,["C++","C","Python","JavaScript"]);
var obj2 = new Student("Abir Saha","18101071","CSE",23,["C++","C","Python","JavaScript"]);
var obj3 = new Student("Momo Saha","18101072","CSE",22,["C++","C","Python","JavaScript"]);
var obj4 = new Student("Nitu Saha","18101073","CSE",22,["C++","C","Python","JavaScript"]);

obj1.display();

//Math object
var r=Math.abs(-5.33);
document.write(r);

var r=Math.sin(2);
document.write(r);

var r=Math.pow(2,4);
document.write(r);

var r=Math.round(5.333);
document.write(r);

var r=Math.sqrt(4);
document.write(r);

var r=Math.log(2);
document.write(r);

var r=Math.floor(5.33);
document.write(r);

var r=Math.ceil(5.33);
document.write(r);

var arr=new Array();

for(var i=0;i<5;i++)
{
    arr[i]=parseInt(prompt("Enter a number:"));
}
var m;
for(var i=0;i<5;i++)
{
    m = Math.max(arr[i]);
}
document.write(m);

var r=Math.floor(Math.random()*6)+1;
document.write(r);


