
/*--------
  ELEMENTS
---------- */
const bulbElm = document.getElementById("bulb"); 
const switchBtnElm = document.querySelector(".btn-on-off");
const bodyElm = document.querySelector("body");
const alertElm = document.querySelector(".night-alert")

/* ----------
  FUNCTIONS
------------*/
// Imposto una variable per tenere conto dello stato della lampadina
let isBulbOn = false;

switchBtnElm.addEventListener('click', function () { 
    //Al click, se la lampadina è accesa, cambio la foto e l'alt con quella spenta
    if (isBulbOn) {
        bulbElm.src = "img/white_lamp.png"; 
        bulbElm.alt = "Bulb Off";
        switchBtnElm.innerHTML = "Accendi"
    } 
    //Altrimenti al click, se la lampadina è spenta, cambio la foto e l'alt con quella accessa
    else {
        bulbElm.src = "img/yellow_lamp.png";
        bulbElm.alt = "Bulb On";
        switchBtnElm.innerHTML = "Spegni"
    }
    isBulbOn = !isBulbOn; //Cambio di volta in volta lo stato della lampadina
});

/// BONUS PER ESERCITARMI

// Dalle 19 alle 24, lo sfondo diventa buio e appare un messaggio che ti consiglia di accendere la luce
const backgroundTimeChange = () => {
    const time = new Date().getHours(); 
    if(time >= 19 &&  time <= 24){
        bodyElm.style.backgroundColor ="#000";
        alertElm.classList.remove("hidden");
    } else {
        bodyElm.style.backgroundColor ="";
    }
}
backgroundTimeChange();