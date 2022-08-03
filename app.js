holler.onLoad(()=>{
    holler.me((user)=>{

let p2p = window.visualViewport.height / 2
let p2p2 = window.visualViewport.height / 2
let p2v = 0
let p2v2 = 0

                const player2 = document.querySelector('.player2')
        console.log("my name: " + user.name)

        holler.onClientEvent(event=>{
            const project = event.split("|")
            console.log(project[0])
            if (project[0] != user.name && project[0] != "undefined"){
                console.log("Valid other player: " + project[0])
                player2.style.top = project[1]
                console.log(project[1])
                player2.style.left = project[2]
                console.log(project[2])
                player2.p2v = project[3]
                console.log(project[3])
                player2.p2v2 = project[4]
                console.log(project[4])
            }
        })
        
        // holler.appInstance.notifyClients(user.name + "|" + player.style.top + "|" + player.style.left) 


    const play = document.querySelector(".playButton")
    const message = document.querySelector(".message")
    const username = document.querySelector(".username-input")
    let player = document.querySelector('.player')
    const message2 = document.querySelector('.message2')
    const NEXT = document.querySelector('.NEXT')
    const sendMessageResponseArea = document.querySelector('.response-to-send-message')
    const sendMessageResponseArea2 = document.querySelector('.response-to-send-message2')


    play.onclick = function(){
        message.textContent = "Welcome " + username.value + "!!!!"
        const NEXT = document.querySelector(".NEXT")
        NEXT.style["display"] = "block"

        NEXT.onclick = function(){
            const screen1 = document.querySelector(".screen1")
            screen1.style["display"] = "none"
            let screen2 = document.querySelector(".screen2")
            screen2.style["display"] = "block"
            message2.textContent = username.value
        }

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
            case "ArrowUp":
                velocity2 = velocity2 -1
                break;
            case "s":
            case "ArrowDown":
                velocity2 = velocity2 +1
                break;
        }
        console.log("Current velocity is", velocity)

        showVelocityWarnings()
    }

    const doNextFrame = ()=>{
        position = position + velocity
        setTimeout(doNextFrame)
        if (position<1282 - 88 && position>0){
            player.style.left = position + "px"
        }else {
            velocity = 0
        }
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
        if (position2<542 && position2>0){
            player.style.top = position2 + "px"
        }else {
            velocity2 = 0
        }
        
        setTimeout(doNextFrame2)
    }
    doNextFrame2()


    
    const sendPosition = ()=>{
        holler.appInstance.notifyClients(user.name + "|" + player.style.top + "|" + player.style.left + "|" + player.velocity  + "|" + player.velocity2)
        setTimeout(sendPosition)
    }
    sendPosition()

    }

    //p2v
    

    const doNextFrame2 = ()=>{
        p2p2 = p2p2 + p2v2
        if (p2p2<542 && p2p2>0){
            player2.style.top = p2p2 + "px"
        }else {
            p2v2 = 0
        }
        
        setTimeout(doNextFrame2)
    }
    doNextFrame2()

    const doNextFrame = ()=>{
        p2p = p2p + p2v
        setTimeout(doNextFrame)
        if (p2p<1282 - 88 && p2p>0){
            player2.style.left = p2p + "px"
        }else {
            p2v = 0
        }
    }

    doNextFrame()

    })
})