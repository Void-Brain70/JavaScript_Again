//Changing CSS style dynamically

function add()
{
    var p=document.querySelector("#para");
    p.classList.add("para-style");
}

function remove()
{
    var p=document.querySelector("#para");
    p.classList.remove("para-style");
}