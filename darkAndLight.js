let mode=document.querySelector("#mode");
let count=0;
mode.addEventListener("click",()=>{
    if(count%2==0)
    {
        document.querySelector("#mode").style.color="white";
        document.querySelector("body").style.backgroundColor="black";  
    }
    if(count%2==1)
    {
        document.querySelector("#mode").style.color="black";
        document.querySelector("body").style.backgroundColor="white"
    }
    count++;

})