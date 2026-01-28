let hrhandle=document.querySelector(".hour-handle");
let minhandle=document.querySelector(".min-handle");
let sechandle=document.querySelector(".sec-handle");
function updateclk(){
    let dat=new Date();
    let hours=dat.getHours();
    console.log(hours);
    let mins=dat.getMinutes();
    let sec=dat.getSeconds();
    let ms=dat.getMilliseconds();
    const hourDeg=(hours%12)*30+ (mins/60)*30+ sec*(0.5/60)-90;
    const minDeg=(mins*6+sec*0.1)-90;
    const secDeg=(sec*6+ms/1000)-90;
    hrhandle.style.transform=`rotate(${hourDeg}deg)`;
    minhandle.style.transform=`rotate(${minDeg}deg)`;
    sechandle.style.transform=`rotate(${secDeg}deg)`;
}
updateclk();
setInterval(updateclk,50);