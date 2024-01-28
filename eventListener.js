let btn=document.querySelector("#btn");
let count=1;
btn.addEventListener("click",()=>{
    document.querySelector("#para").innerText=`button has clicked ${count} time`;
    if(count>1)
    {
        document.querySelector("#para").innerText=`button has clicked ${count} times`;
    }
    count++;
})