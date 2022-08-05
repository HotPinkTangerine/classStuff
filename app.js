holler.onLoad(()=>{
    holler.me((user)=>{

        console.log("my name: " + user.name)

        function makePlayer(){
            let PLAYER = document.createElement("IMG");
            PLAYER.style.position = 'absolute'
            PLAYER.style.top = '100px'
            PLAYER.style.left = '100px'
            PLAYER.setAttribute("src", "images/GRAY.png")
            PLAYER.setAttribute("height", "50px")
            PLAYER.setAttribute("width", "50px")
            document.body.appendChild(PLAYER)
            PLAYER.classList = 'person'
            return PLAYER
        }
        const userNames = []
        let players = []
        holler.onClientEvent(event=>{
            console.log('event is ' + event)
            // // console.log('yolo')
            // const project = event.split("|")
            // // console.log(project[0])
            // // console.log('stuff ' + (project[0] != user.name && project[0] != "undefined"))
            // if (project[0] != user.name && project[0] != "undefined"){
            //     // console.log('usernameindex', players[userNames.indexOf(project[0])])
            //     // console.log('userNames' + userNames)
            //     if (userNames.indexOf(project[0]) == -1){
            //         console.log('im present')
            //         userNames.push(project[0])
            //         players.push(makePlayer())
            //     }
            //     userNames.indexOf(project[0])

            //     let currentPlayer = players[userNames.indexOf(project[0])]

            //     // console.log("Valid other player: " + project[0])
            //     // console.log('currentplayer : ' , currentPlayer)
            //     // console.log('third username' + userNames[2])

            //     currentPlayer.style.top = project[1]
            //     // console.log(project[1])

            //     currentPlayer.style.left = project[2]
            //     // console.log(project[2])

            //     velocity2 = project[3]
            //     // console.log(project[3])

            //     velocity2 = project[4]
            //     // console.log(project[4])

            //     message2.textContent = username.value
            // }
        })
                
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
                userNames.push(user.name)
                const screen1 = document.querySelector(".screen1")
                screen1.style["display"] = "none"
                let screen2 = document.querySelector(".screen2")
                screen2.style["display"] = "block"
                message2.textContent = username.value
                player = makePlayer()
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

            const followplayer = ()=>{
                message2.style.top = parseInt(player.style.top) - 300
                message2.style.left = parseInt(player.style.left) - 648
                setTimeout(followplayer, 2)
            }
            followplayer()


            const sendPosition = ()=>{

                holler.appInstance.notifyClients(user.name + "|" + player.style.top + "|" + player.style.left + "|" + velocity  + "|" + velocity2 + "|" + username.value)
                setTimeout(sendPosition,10)

                // console.log('user.name is :' + user.name)
                let listOfPlayers = document.querySelectorAll('.person')
                // if (listOfPlayers.forEach)
            }
            sendPosition()
        }

    })
})