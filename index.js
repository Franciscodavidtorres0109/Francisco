console.log("hola mundo");//imprimir por consola
// comentario en linea
// comentario
// en
// varias
/*lineas
o
multilineas
*/

//variables
/*son espacios de memoria que almacenan datos o informacion
existen varios tipos de variables en js, pero generalmentese utilizan los siguientes:
String: almacena cadenas de texto. Se debe declarar o asignar el valor entre comillas
Int: almacena numeros enteros
Double: almacena numeros reales
Otro tipo de datos
Boolean: almacena valores de verdad (true o false)
*/
/*declarar variables
declarar una variable es crearla, decirle al lenguaje como se llama la variable e indicarle que ya existe
Para declarar una variable se puede utilizar ya sea la palabra reservada Var o Let
*/
var nombre;
console.log(nombre);
/*inicializar variables
para inicializar variables es necesario asignar un valor cuando se crea esta variable
*/
var apellido=" Torres";
console.log(apellido);
/*asignar un valor:
asignar un valor se hace mediante el signo igual, se debe hacer sobre una variable que ya fue declarada
*/
nombre="Francisco David"
console.log(nombre + "" + apellido)
//Desde otra variable
var edad = 15;
var edadEstudiante = edad;
//Desde el teclado
var gradoEstudiante= prompt("ingrese el grado: ");
console.log("el grado es: "+ gradoEstudiante);
/*constantes:
son valores que una vez inicializados no pueden cambiar lo que almacenan. Se crean con la palabra reservada const, el nombre de las constantes se escribe todo en mayuscula para diferenciarlo de las variables 
*/
const PI=3.1416
//PI=5;
//imprimir por consola
//simple 
console.log("mensaje") 
console.log(nombre)
//concatenado
console.log("la edad es "+edad+" años");
//Operadores
//suma
var suma; 
suma= 5+3;
console.log(suma);
let a = 10;         
let b = 20;
suma = a+b;
 console.log(suma);
//resta
var resultado;
resultado= a-b
console.log(resultado)
//multiplicacion 
var producto;
producto = a*b;
console.log(producto);
//division
var division;
division = a/b;
console.log(division)
//orden de operaciones
var res;
res = a*2
console.log(res);
res = a*2-1;
console.log(res);
res= a*(2-1);
console.log(res);
//residuo
var residuo;
residuo = 12/2;//0
console.log(residuo);
//contadores
//incremento
var incre = 1;
console.log(incre);
incre = incre + 1;
console.log(incre);
incre += 1;
console.log(incre);
incre ++;
console.log(incre);

//decremento
var decre = 1;
console.log(decre);
decre = decre - 1;
console.log(decre);
decre -=  1;
console.log(decre);
decre --;
console.log(decre);
//operaciones aumentadas
//son operaciones que se le realizan a una variable y el resultado se guarda en si misma
var sumaAumento
sumaAumento += 1;
sumaAumento += 48;//La variable debe tener un valor antes de hacer la operacion
console.log(sumaAumento);
var restaAumento
restaAumento -= 20;
restaAumento -= 1;
restaAumento -= 8;
console.log(restaAumento);



var cocienteAumento
cocienteAumento -= 20;
cocienteAumento -= 1;
cocienteAumento -= 8;
console.log(cocienteAumento)

//potencia
var exp;
exp = 3**2;
console.log(exp);
exp = 3**3;
console.log(exp);

//cadenas o texto 
//suma de cadenas
var nombre = "Franco"
var apellido ="viva España ¡Ostia!"
var nomCompleto = nombre + " " +apellido;
console.log(nomCompleto);
var cadenita1 ="3";
var cadenita2 ="5";
var cadenatotal = cadenita1 + cadenita2;
console.log(cadenatotal);
//.length
//permite conocer la longitud de una cadena o el tamaño de un vector
//length
console.log(nomCompleto,length);
console.log(nombre[3]);
//para encontrar el caracter en la proxima posicion de una cadena o un vectort, se debe buscar la longitud - 1

//(.legth - 1)











