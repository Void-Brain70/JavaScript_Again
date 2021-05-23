//create image slider

var pic = ["image/c.jpg","image/python.jpg","image/js.png"];
var i = document.querySelector("img");

var cnt=0;

function next()
{
    cnt++;
    if(cnt>=pic.length)
    {
        cnt=0;
        i.src=pic[cnt];
    }
    else
    {
        i.src= pic[cnt];
    }
}

function pre()
{
    cnt--;
    if(cnt<0)
    {
        cnt=pic.length-1;
        i.src=pic[cnt];
    }
    else
    {
        i.src= pic[cnt];
    }
}