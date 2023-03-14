/*Dificultad:  🟢🟡🔴

3- Escribir un script que simule el lanzamiento de dos dados. 
Hacer uso de la función Math.random para obtener números aleatorios 
entre 1 y 6 para cada uno de los lanzamientos de los dados. 
Sumar el resultado de lanzar dos dados y anotar en un array el 
número de apariciones de dicha suma, repitiendo 50 veces esta operación.
 */

let dado1,dado2,suma;
let array=[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

for(let i=1; i<=50; i++){
    dado1=parseInt(6*Math.random()+1);
    dado2=parseInt(6*Math.random()+1);
    suma=dado1+dado2;
    array[suma-2]++;
    }

document.write("Número de apariciones de las sumas:");
for(let i=0; i<=10 ; i++){
    document.write("Apariciones de " + (i+2) + ": " + array[i]);
    document.write(`<br>`);
 }

   
