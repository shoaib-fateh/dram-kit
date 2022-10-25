// Detecting button  press
var num_keys = document.querySelectorAll(".dram").length;
for (var i = 0; i < num_keys; i++){
    document.querySelectorAll(".dram") [i].addEventListener("click" , function(){
        var key_innerHTML = this.innerHTML;
        makeSound(key_innerHTML);

        makeAnimatin(key_innerHTML);
    });
};

// Detecting keybord press
document.addEventListener("keypress" , function(event){
    makeSound(event.key);
    makeAnimatin(event.key);
})

function makeSound(key){
    switch (key){
        case "g":
            var audio = new Audio('sounds/daw.wav');
            audio.play();
        break;

        case "h":
            var audio = new Audio('sounds/da.wav');
            audio.play();
        break;

        case "d":
            var audio = new Audio('sounds/fag.wav');
            audio.play();
        break;

        case "f":
            var audio = new Audio('sounds/foag.wav');
            audio.play();
        break;

        case "j":
            var audio = new Audio('sounds/tak.wav');
            audio.play();
        break;

        case "k":
            var audio = new Audio('sounds/dang.wav');
            audio.play();
        break;
    }
}

function makeAnimatin(CurenKey){
    var active = document.querySelector("." + CurenKey)
    active.classList.add("active");

    setTimeout(function (){
        active.classList.remove("active");
    },100)
}

function lafing(event){
    new Audio('sounds/Sleep Away.mp3').play();
}