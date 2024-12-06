
/*--------
  ELEMENTS
---------- */
const bulbElm = document.getElementById("bulb"); 
const switchBtnElm = document.querySelector(".btn-on-off");
const bodyElm = document.querySelector("body");

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
