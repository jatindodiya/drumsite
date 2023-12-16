for(let i=0; i< document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function (){
        // console.log(this.innerHTML)
        playSound(this.innerHTML)   
        btmAnimation(this.innerHTML)     
    })
}

document.addEventListener("keypress", function (event) {
    // console.log(event)
    playSound(event.key)
    btmAnimation(event.key)
})

function playSound( key ){
    if(key == "w"){
        var audio = new Audio('./sounds/tom-1.mp3');
        audio.play();
    }
    else if(key == "a"){ 
        var audio = new Audio('./sounds/tom-2.mp3');
        audio.play();
    }
    else if(key == "s"){ 
        var audio = new Audio('./sounds/tom-3.mp3');
        audio.play();
    }
    else if(key == "d"){ 
        var audio = new Audio('./sounds/tom-4.mp3');
        audio.play();
    }
    else if(key == "j"){ 
        var audio = new Audio('./sounds/kick-bass.mp3');
        audio.play();
    }
    else if(key == "k"){ 
        var audio = new Audio('./sounds/snare.mp3');
        audio.play();
    }
    else if(key == "l"){ 
        var audio = new Audio('./sounds/crash.mp3');
        audio.play();
    }
}

function btmAnimation(key){
    document.querySelector("." + key).classList.add("pressed")
    setTimeout(function(){
        document.querySelector("." + key).classList.remove("pressed")
    }, 100)
}