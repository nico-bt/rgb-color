//Color al azar entre 0 y 255 para rgb color
let alea = function() {
  return Math.floor((Math.random() * 255) + 1);
  }

//Seleccionar squares
squares = document.querySelectorAll(".square");

//Funcion que resetea msg-fondo y asigna a todos los squares un color aleatorio
/******************************************************************************/
let colorToPick=null;

const start = function() {
  
  document.querySelector("#displayMsg").textContent="";
  document.querySelector("body").style.backgroundColor="black";

  for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor= `rgb(${alea()}, ${alea()}, ${alea()}`;
    squares[i].addEventListener("click", evaluar);
  }
  //Eligiendo un color al azar entre los 6 squares para poner de objetivo
  colorToPick = squares[Math.floor((Math.random() * 5) + 1)].style.backgroundColor;
  document.querySelector("#randomColor").textContent=colorToPick;
}
/******************************************************************************/
  

//Evaluar al clickear en squares
/******************************************************************************/
function evaluar() {
  if (this.style.backgroundColor==colorToPick) {
    document.querySelector("#displayMsg").textContent="Correct! ";
    for (let i = 0; i < squares.length; i++) {
      squares[i].style.backgroundColor= "black";
      squares[i].removeEventListener("click",evaluar);
    }
    this.style.backgroundColor=colorToPick;
    document.querySelector("body").style.backgroundColor=colorToPick;
  } else {
    this.style.backgroundColor="black";
    document.querySelector("#displayMsg").textContent="Nope, Click another one ";
  }
}
/******************************************************************************/

//First start y AddEvent button restart para reiniciar
/******************************************************************************/
start();
document.querySelector("#restart").addEventListener("click", start);