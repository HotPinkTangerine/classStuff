let play = document.querySelector(".playButton")
let message = document.querySelector(".message")
let Intro = document.querySelector(".username-input")

play.onclick = function(){
    message.textContent = "Welcome " + Intro.value + "!!!!"
    const NEXT = document.querySelector(".NEXT")
    NEXT.style["display"] = "inline"
    NEXT.onclick = function(){
        const screen1 = document.querySelector(".screen1")
        screen1.style["display"] = "none"
        const screen2 = document.querySelector(".screen2")
        screen2.style["display"] = "block"
    }
}
