let btn=document.querySelector("#btn");
let count=1;
btn.onclick=()=>{
    document.querySelector("#para").innerHTML=`button has clicked ${count} time`;
    if(count>1)
    {
        document.querySelector("#para").innerHTML=`button has clicked ${count} times`;
        
    }
    count++;
   
}