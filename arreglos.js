/*Es una estructura que almacena cualquier tipo de dato y en cualquier cantidad, es decir, string, int, double,
 array, objetos, entre otros. Tienen operaciones como, eliminar, insertar, modificar y consultar.
 
 La declaracion de un arreglo se hacen con corchetes, este atajo [] y los elementos se separan con comas
  (alt + 91). Tambien se crean o se separan con las palabras VAR o Let, seguidas del nombre de la regla*/

  var MiPrimerArreglo = ["jose", 14];
  console.log(MiPrimerArreglo);
  
//arreglo de arreglos
var notaEst = [["Sofia", 4.5], ["mari", 4.2]];
console.log(notaEst);

//consultar segun la posicion 
//recordar que las posiciones de un vector o arreglo comienzan desde 0
console.log(MiPrimerArreglo [0]);

//consultar posiciones de arreglos dentro de arreglos
//primero se accede a la posicion del arreglo mas grande y luego a las posiciones de los arreglos internos
console.log(notaEst[0][0]);


console.log(notaEst[1][0]);
console.log(notaEst[0][1]);
 
//Modificar elementos
//se debe indicar la posicion del elemento y luego se le asigna el nuevo valor

MiPrimerArreglo[0]="mario";
console.log(MiPrimerArreglo);

notaEst[1][0] = "laura";
console.log(notaEst[1]);

MiPrimerArreglo[1] = 18;
console.log(MiPrimerArreglo [1]);

notaEst[0][1]= 4.8;
console.log(notaEst[0][1]);

//agregar elemento al arreglo
MiPrimerArreglo.push("10B");
console.log(MiPrimerArreglo);

MiPrimerArreglo.unshift("Uribe");
console.log(MiPrimerArreglo);

//Eliminar elemento del arreglo

MiPrimerArreglo.pop();
console.log(MiPrimerArreglo);

MiPrimerArreglo.shift();
console.log(MiPrimerArreglo);


//Tallercito de Francisco
var Materias = ["Analisis", "Tecnologia", "Desarrollo"];
console.log(Materias);

Materias [2] = "BBDD";
console.log(Materias);

Materias.unshift ("Introduccion");
console.log(Materias);

Materias.pop("BBDD");
console.log(Materias);








