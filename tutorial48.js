import {t,setText} from './module48.js';

console.log(t);

console.log(setText("Hi i am function"));

console.log(t);

//class

class Info{
    constructor(name,id)
    {
        this.name=name;
        this.id=id;
    }
    set InfoDept(dept)
    {
        this.dept=dept;
    }
    get stInfo()
    {
        return this.name +" "+ this.dept; 
    }
}

//object

let Obj = new Info("Anik",70);

console.log(Obj);

Obj.InfoDept="CSE";

console.log(Obj);

console.log(Obj.stInfo);

//set and get

