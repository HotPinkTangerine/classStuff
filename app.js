const play = document.querySelector(".playButton")
const message = document.querySelector(".message")
const username = document.querySelector(".username-input")
const player = document.querySelector('.player')
const message2 = document.querySelector('.message2')
const NEXT = document.querySelector('.NEXT')
const sendMessageResponseArea = document.querySelector('.response-to-send-message')
const sendMessageResponseArea2 = document.querySelector('.response-to-send-message2')

play.onclick = function(){
    message.textContent = "Welcome " + username.value + "!!!!"
    const NEXT = document.querySelector(".NEXT")
    NEXT.style["display"] = "inline"

    NEXT.onclick = function(){
        const screen1 = document.querySelector(".screen1")
        screen1.style["display"] = "none"
        const screen2 = document.querySelector(".screen2")
        screen2.style["display"] = "block"
        message2.textContent = username.value

//left and right

        let position = window.visualViewport.width / 2
let velocity = 0


let showVelocityWarnings = ()=>{
    let velocityMessage
    let velocityMessageColor

    if(velocity>5 || velocity < -5){
        velocityMessage = ""
    }else if(velocity>2 || velocity < -2){
        velocityMessage = ""
    }else{
        velocityMessage = ""
        velocityMessageColor = "none"
    }
    sendMessageResponseArea.textContent = velocityMessage
    sendMessageResponseArea.style["background"] = velocityMessageColor
}

document.onkeydown = (keyEvent)=>{
    console.log("Keypressed: " + keyEvent.key)
    switch(keyEvent.key){
        case "a": 
        case "ArrowLeft":
            velocity = velocity -1
            break;
        case "d": 
        case "ArrowRight":
            velocity = velocity +1
            break;
            case "w": 
            velocity2 = velocity2 -1
            break;
        case "s": 
            velocity2 = velocity2 +1
            break;
    }
    console.log("Current velocity is", velocity)

    showVelocityWarnings()
}


const doNextFrame = ()=>{
    position = position + velocity
    player.style.left = position + "px"
    setTimeout(doNextFrame)
}

doNextFrame()

//up and down

let position2 = window.visualViewport.height / 2
let velocity2 = 0


let showVelocityWarnings2 = ()=>{
    let velocityMessage2
    let velocityMessageColor2

    if(velocity2>5 || velocity2 < -5){
        velocityMessage2 = ""
    }else if(velocity2>2 || velocity2 < -2){
        velocityMessage2 = ""
    }else{
        velocityMessage2 = ""
        velocityMessageColor2 = "none"
    }
    sendMessageResponseArea2.textContent = velocityMessage2
    sendMessageResponseArea2.style["background"] = velocityMessageColor2
}


    showVelocityWarnings2()



const doNextFrame2 = ()=>{
    position2 = position2 + velocity2
    player.style.top = position2 + "px"
    setTimeout(doNextFrame2)
}

 

doNextFrame2()


    }}
