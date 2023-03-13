/* 
Arrays

Dificultad:  🟢

1- Crear un array llamado meses y que almacene el nombre de los doce meses del año. 
Mostrar por pantalla en forma de lista  los doce nombres del arreglo.
*/

let meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];

document.write('<ul>');

for(let posicion=0; posicion<meses.length; posicion++){
    document.write(`<li>${meses[posicion]}</li>`);
}
document.write('</ul>');