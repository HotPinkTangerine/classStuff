let play = document.querySelector(".playButton")
let message = document.querySelector(".message")
let Intro = document.querySelector(".username-input")

play.onclick = function(){
    message.textContent = "Welcome " + Intro.value + "!!!!"
    const NEXT = document.querySelector(".NEXT")
    NEXT.style["display"] = "inline"
    NEXT.onclick = function(){
        window.location.href = "nextPage.html";
    }
}

// input.addEventListener("keypress", function(event) {

// if (event.key === "Enter") {

// }}