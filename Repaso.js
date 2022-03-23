/*22/3/2022
Francisco David Torres
*/

//1 punto
//creacion de variable
var milimetros;
var kilometros;
//solicitar datos al usuario
metros = prompt ("por favor ingrese el valor en metros");
//realizar la operacion
kilometros = metros/1000;
//mostrar mensaje con resultado
console.log(metros + " equivalen a " + kilometros + " km");

//punto 2
//creacion de variables
var distanciaviaje;
var litroscombustible;
//solicitar datos al usuario
distanciaviaje = prompt ("por favor ingrese la distancia del viaje");
//realizar operacion
litroscombustible = (distanciaviaje/100) * 290;
//mostrar el resultado
console.log(distanciaviaje + " km equivalen a " + litroscombustible + " L de combustible ");

//punto 3
//realizar operacion
var kilolitroscombustible = litroscombustible / 1000;
console.log (litroscombustible + " L equivalen a " + kilolitroscombustible + " Kl de combustible ");








