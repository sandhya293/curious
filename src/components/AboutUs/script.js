let counts=setInterval(updated);
let upto=0;
let counts1=setInterval(up1);
let upto1=0;
let counts2=setInterval(up2);
let upto2=0;
let counts3=setInterval(up3);
let upto3=0;
function updated()
{
    var count = document.getElementById("counter");
    count.innerHTML=++upto;
    if(upto===1000)
    {
        clearInterval(counts);
    }
}

function up1()
{
    var count1 = document.getElementById("counter1");
    count1.innerHTML=++upto1;
    if(upto1===500)
    {
        clearInterval(counts1);
    }    
}

function up2(){
    
    var count2 = document.getElementById("counter2");
    count2.innerHTML=++upto2;
    if(upto2===259)
    {
        clearInterval(counts2);
    }

}

function up3(){
    var count3 = document.getElementById("counter3");
    count3.innerHTML=++upto3;
    if(upto3===11)
    {
        clearInterval(counts3);
    }
}
