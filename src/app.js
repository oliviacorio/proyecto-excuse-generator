/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
// Definir las variables

let who = ["El perro", "Mi abuela", "Mi profesor", "Mi motosierra"];
let action = [" destruyo", " incinero", " pulverizo", " rompio"];
let what = [" mi tarea", " mi ropa", " mi carrito", " mi casa"];
let when = [
  " el año pasado",
  " ayer",
  " hoy en la noche",
  " durante la cuarentena"
];

function selectRandom(arr) {
  let random = ~~(Math.random() * arr.length);
  return arr[random];
}

window.onload = function() {
  //write your code here

  let result = `${selectRandom(who)} ${selectRandom(action)}${selectRandom(
    what
  )}${selectRandom(when)}`;

  let element = document.getElementById("excuse");
  element.innerHTML = result;
};
