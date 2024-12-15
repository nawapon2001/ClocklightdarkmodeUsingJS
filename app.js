const timeEL = document.querySelector(".time")
const btnToggle = document.querySelector(".toggle")

function settime() {
    const time = new Date()
    const hours = time.getHours()
    const minutes = time.getMinutes()
    const seconds = time.getSeconds()
    timeEL.innerHTML = `${hours<10 ? `0${hours}`: hours}:${minutes<10 ? `0${minutes}`: minutes}:${seconds<10 ? `0${seconds}`: seconds}`
}
btnToggle.addEventListener("click",(e)=>{

const html=document.querySelector('html')
if(html.classList.contains("dark")){
    html.classList.remove("dark")
    e.target.innerHTML="โหมดกลางคืน"
}else{
    html.classList.add("dark")
    e.target.innerHTML="โหมดกลางวัน"
}

})

settime()
setInterval(settime, 1000)