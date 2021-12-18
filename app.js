console.log("Welcome to ByAirlines");

//valores, STRING son cadenas de texto y entre ""
//Valor: NUMBER son numeros
//valor: Booleanos que son de True or False

//valor variable
var Ciudad1 = "madrid";

let nombre = prompt("hola, cual es tu nombre?");
let respuesta = alert(`hola ${nombre} vamos a ayudarte a conseguir tu vuelo`);

let destino1 = prompt(
  "a donde quieres viajar?, ingresa tu destino en minuscula"
);

if (destino1 == Ciudad1) {
  alert(`tienes suerte, hay asientos para ti en los vuelos a ${Ciudad1}`);
} else if (destino1 !== Ciudad1) {
  alert("tienes pocos asientos disponibles!");
}
