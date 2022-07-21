const play = document.querySelector(".playButton")
const message = document.querySelector(".message")
const Intro = document.querySelector(".username-input")
const player = document.querySelector('.player')

play.onclick = function(){
    function startGame() {
        myGamePiece = new component(30, 30, "cracked.png", 10, 120, "image");
        myGameArea.start();
      }
    message.textContent = "Welcome " + Intro.value + "!!!!"
    const NEXT = document.querySelector(".NEXT")
    NEXT.style["display"] = "inline"
    NEXT.onclick = function(){
        const screen1 = document.querySelector(".screen1")
        screen1.style["display"] = "none"
        const screen2 = document.querySelector(".screen2")
        screen2.style["display"] = "block"
        Intro.style['display'] = "block"
        Intro.style.top = player.style.top
    }}