semana 8
*/
//Punto 1
var capacidadDeLaPiscina;
var CantidadDeHoras;
capacidadDeLaPiscina = prompt("por fvor, ingrese la capacidad de litros de agua que tiene la piscina");
CantidadDeHoras = capacidadDeLaPiscina/145;
console.log( capacidadDeLaPiscina + " L equivalen a " + CantidadDeHoras + " h ");

//punto 2
var TamañoEnMetros;
var TamañoEnMilimetros;
TamañoEnMetros = prompt("por favor, indique la longitud en metros ");
TamañoEnMilimetros = TamañoEnMetros * 1000;
console.log(TamañoEnMetros + " m equivalen a " + TamañoEnMilimetros + " mm " );

//punto 3
var TamañoEnDecimetros;
TamañoEnDecimetros = TamañoEnMilimetros / 100;
console.log(TamañoEnMilimetros + " mm equivalen a " + TamañoEnDecimetros + " dm " );

//punto 4
var TamañoEnKilometros;
TamañoEnKilometros = TamañoEnDecimetros / 1000;
console.log(TamañoEnDecimetros + " dm equivalen a " + TamañoEnKilometros + " Km ");

//punto 5
var PrecioHora;
var PrecioHorasAdicionales;
var CantidadDeHoras;
var TotalAPagar;
PrecioHora = 40000;
PrecioHorasAdicionales = 25000;
CantidadDeHoras = prompt("por favor, ingrese el numero de horas de clase");
TotalAPagar = PrecioHora + PrecioHorasAdicionales*(CantidadDeHoras - 1);
console.log (" El valor de su clase es " + TotalAPagar + " pesos ");





