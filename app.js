let play = document.querySelector(".playButton")
let message = document.querySelector(".message")
let Intro = document.querySelector(".username-input")
//var int = setInterval("doSomething()", 5000 );

play.onclick = function(){
    message.textContent = "Welcome " + Intro.value + "!!!!"
    //(function(){

        //doSomething();
     
        //setTimeout(arguments.callee, 5000);
     
     //})()
    //message.textContent = "sup"
}