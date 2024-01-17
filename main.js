let scoreH=12
let scoreG=5
let homeEl = document.getElementById("home-el")
let guestEl = document.getElementById("guest-el")
let resetEl = document.getElementById("reset-el")

function increase1(){
   homeEl.textContent = scoreH +=1
}
function increase4(){
    guestEl.textContent = scoreG +=1
 }
function increase2(){
    homeEl.textContent = scoreH +=2
 }
 function increase5(){
    guestEl.textContent = scoreG +=2
 }
 function increase3(){
    homeEl.textContent = scoreH +=3
 }
 function increase6(){
    guestEl.textContent = scoreG +=3
 }
increase()

function reset(){
    scoreG = 5
    scoreH = 12
    guestEl.textContent = scoreG
    homeEl.textContent = scoreH
    
}

reset()