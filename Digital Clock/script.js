let hrs=document.getElementById("hrs");
let min=document.getElementById("min");
let sec=document.getElementById("sec");

setInterval(()=>{
    let currtime=new Date();

    hrs.innerHTML=currtime.getHours();
    min.innerHTML=currtime.getMinutes();
    sec.innerHTML=currtime.getSeconds();
},1000)
