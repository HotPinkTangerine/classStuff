holler.onLoad(()=>{

    holler.me((user)=>{
        console.log(user.name)
        //receive
        holler.onClientEvent(event=>{
            const project = event.split("|")
            if (project[0] != user.name ){
                const player2 = document.querySelector('.player2')
                player2.style.top = project[1]
            }
            console.log("recived: | hello world")
        })
        //send
        holler.appInstance.notifyClients(user.name + "|" + player.y)
            console.log('testing')
    })

    const play = document.querySelector(".playButton")
    const message = document.querySelector(".message")
    const username = document.querySelector(".username-input")
    let player = document.querySelector('.player')
    const message2 = document.querySelector('.message2')
    const NEXT = document.querySelector('.NEXT')
    const sendMessageResponseArea = document.querySelector('.response-to-send-message')
    const sendMessageResponseArea2 = document.querySelector('.response-to-send-message2')
    const skinButton = document.querySelector('.skinButton')
    const backButton = document.querySelector('.backButton')



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
        if (position<window.innerWidth - 88 && position>0){
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
        setTimeout(doNextFrame2)
        if (position2<window.innerHeight - 64 && position2>0){
            player.style.top = position2 + "px"
        }else {
            velocity2 = 0
        }
    }
    doNextFrame2()
    }

})