const play = document.querySelector(".playButton")
const message = document.querySelector(".message")
const username = document.querySelector(".username-input")
const player = document.querySelector('.player')
const message2 = document.querySelector('.message2')
const NEXT = document.querySelector('.NEXT')
// console.log('i am your father')

play.onclick = function(){
    message.textContent = "Welcome " + username.value + "!!!!"
    const NEXT = document.querySelector(".NEXT")
    NEXT.style["display"] = "inline"
    // console.log('next button shows up')

    NEXT.onclick = function(){
        const screen1 = document.querySelector(".screen1")
        screen1.style["display"] = "none"
        const screen2 = document.querySelector(".screen2")
        screen2.style["display"] = "block"
        // console.log(username.value)
        message2.textContent = username.value
        // player.style.bottom = 'auto'
        message2.style.top = player.style.top//yyyyyyyy won't it workkkkk!!!!!!!!!!!!!!!!!!!!! :-(
        // console.log(alert(player.style.bottom))
    }}