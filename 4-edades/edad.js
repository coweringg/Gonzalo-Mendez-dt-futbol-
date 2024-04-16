/*
Siguen su camino hacia la sala administrativa y son recibidos con mucha alegría.
Les preguntan si han conocido algún jugador hasta el momento y recuerdan a quien se encontraron en la entrada.

El secretario les comenta que es el jugador más joven que tiene la selección en plantilla (después del golero suplente).
Abre el cajón y busca rápidamente los datos del equipo y señala una fecha: 16/07/2003

Rápidamente intentan sacar la cuenta de cuantos años puede tener.

Escriba un programa que:
- declare una función llamada "edad"
  - que acepte una fecha de nacimiento en formato string
  - y que devuelva la cantidad de años cumplidos
- imprima en consola un mensaje en el formato: {nombre} "{apodo}" {apellido} (edad).

Tip: consulten los métodos de la clase Date
https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Date
*/

// Función para calcular la edad
function edad(fechaNacimientoStr) {
  var fechaNacimiento = new Date(fechaNacimientoStr);
  var fechaActual = new Date();
  var edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear();
  
  // Ajustar la edad si todavía no ha pasado su cumpleaños este año
  if (fechaActual.getMonth() < fechaNacimiento.getMonth() || 
      (fechaActual.getMonth() === fechaNacimiento.getMonth() && fechaActual.getDate() < fechaNacimiento.getDate())) {
      edad--;
  }
  
  return edad;
}

// Información del jugador más joven
var jugadorMasJoven = {
  nombre: "Luciano",
  apellido: "Rodriguez",
  apodo: "Lucho",
  fechaNacimiento: "2003-07-16"
};

// Calcular la edad del jugador más joven
var edadJugadorMasJoven = edad(jugadorMasJoven.fechaNacimiento);

// Imprimir mensaje de presentación con la edad del jugador
console.log(jugadorMasJoven.nombre + ' "' + jugadorMasJoven.apodo + '" ' + jugadorMasJoven.apellido + " (" + edadJugadorMasJoven + " años)");
