const button = document.getElementById("button")
const button2 = document.getElementById("button2")
const main_text = document.getElementById("main_text")
const surprise = document.getElementById("surprise")
const codebrave_image = document.getElementById("codebrave_image")
const surprise_text = document.getElementById("text_in_surprise")
const repeat = document.getElementById("repeat")
let clickCount = 0
let reach30 = false
function expandHeart() {
    if(reach30 === false){
    var heart = document.getElementById("heart_div");
    var currentWidth = parseInt(heart.style.width) || 0; 
    heart.style.width = (currentWidth + 10) + "px"; 
    clickCount += 1
    if (clickCount === 1){
        main_text.innerHTML = `<h1>Something appeared, I wonder what is that</h1><p>Let us keep clicking</p>`
    }
    if (clickCount === 3){
        main_text.innerHTML = `<h1>Seems like a heart</h1><p>-</p>`
    }
    if (clickCount === 6){
        main_text.innerHTML = `<h1>Must be some sort of magic</h1><p>-</p>`
    }
    if (clickCount === 10){
        main_text.innerHTML = `<h1>Haven't had a hand workout in a while, have you?</h1><p>-</p>`
    }
    if (clickCount === 15){
        main_text.innerHTML = `<h1>Almost there!</h1><p>just a few more clicks, keep it up</p>`
    }
    if (clickCount >= 20 && clickCount<30){
        main_text.innerHTML = `<h1>${30 - clickCount} clicks to finish</h1><p>-</p>`
    }
    if (clickCount === 30){
        main_text.innerHTML = `<h1>Wait a moment, something is happening</h1><p>-</p>`
        button2.style.display = "block"
        button2.classList.add("animation_button")
        reach30 = true
    }
    }
}
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
function showSurprise(){
   surprise.style.display = "block"
   surprise.classList.add("surprise_text")
   setTimeout(function(){codebrave_image.style.display="inline"},1500)
   setTimeout(function(){surprise_text.style.display="inline"},1500)
}
function repeatCard(){
    surprise.classList.remove("surprise_text")
    codebrave_image.style.display="none"
    surprise_text.style.display="none"
    clickCount = 0
    heart_div.style.width = 1 + "px"
    button2.classList.remove("animation_button")
    button2.style.display = "none"
    reach30 = false
    main_text.innerHTML = `<h1>I wonder what does this button do? Give it a try.</h1><p>-</p>`
}