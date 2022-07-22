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
        // console.log(alert(player.style.bottom))

//         let position = window.visualViewport.width / 2
// let velocity = 0


// let showVelocityWarnings = ()=>{
//     let velocityMessage
//     let velocityMessageColor

//     if(velocity>5 || velocity < -5){
//         velocityMessage = "Hyper speed!"
//         velocityMessageColor = "red"
//     }else if(velocity>2 || velocity < -2){
//         velocityMessage = "Speed demon!"
//         velocityMessageColor = "yellow"
//     }else{
//         velocityMessage = ""
//         velocityMessageColor = "none"
//     }
//     sendMessageResponseArea.textContent = velocityMessage
//     sendMessageResponseArea.style["background"] = velocityMessageColor
// }

// document.onkeydown = (keyEvent)=>{
//     console.log("Keypressed: " + keyEvent.key)
//     switch(keyEvent.key){
//         case "a": 
//         case "ArrowLeft":
//             velocity = velocity -1
//             break;
//         case "d": 
//         case "ArrowRight":
//             velocity = velocity +1
//             break;
//     }
//     console.log("Current velocity is", velocity)

//     showVelocityWarnings()
// }


// const doNextFrame = ()=>{
//     position = position + velocity
//     player.style.left = position + "px"
//     setTimeout(doNextFrame)
// }
// const doNextFrameUP = ()=>{
//     position = position + velocity
//     player.style.top = position + "px"
//     setTimeout(doNextFrame)
// }
 

// doNextFrame()
// doNextFrameUP()


let position = window.visualViewport.width / 2
let velocity = 0


let showVelocityWarnings = ()=>{
    let velocityMessage
    let velocityMessageColor

    if(velocity>5 || velocity < -5){
        velocityMessage = "Hyper speed!"
        velocityMessageColor = "red"
    }else if(velocity>2 || velocity < -2){
        velocityMessage = "Speed demon!"
        velocityMessageColor = "yellow"
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
        case "s": 
        case "ArrowLeft":
            velocity = velocity -1
            break;
        case "w": 
        case "ArrowRight":
            velocity = velocity +1
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
    }}
