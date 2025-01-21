const menu = document.querySelector("#menu")?.classList
const toggleClasses =()=>{
  menu?.toggle("left-0")
  menu?.toggle("-left-[600px]")
}

document.querySelector(".menuIcon")?.addEventListener("click",toggleClasses)
document.querySelector(".close")?.addEventListener("click",toggleClasses)