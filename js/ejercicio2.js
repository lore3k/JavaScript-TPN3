/*
Dificultad:  🟢🟡
2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades 
y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se debe mostrar el 
arreglo generado, luego realizar las siguientes acciones:

Mostrar la longitud del arreglo.
Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
Añade en última posición la ciudad de París.
Escribe por pantalla el elemento que ocupa la segunda posición.
Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.
*/

let ciudades = [];
let ciudad

do{
    ciudad = prompt("Introducir nombre de una ciudad");
    if(ciudad!=null){
        ciudades.push(ciudad);
    }
        
}while(ciudad!=null);

document.write('<ul>');
for(let posicion=0; posicion<ciudades.length; posicion++){
    document.write(`<li>${ciudades[posicion]}</li>`);
}
document.write('</ul>');
document.write("<br>");

//Mostrar la longitud del arreglo.
document.write("Cantidad de ciudades ingresadas: "+ciudades.length);
document.write("<br>");

// Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
document.write('<ul>');
document.write(`<li>Primera Posición: ${ciudades[0]}</li>`);
document.write(`<li>Tercera Posición: ${ciudades[2]}</li>`);
document.write(`<li>Última Posición: ${ciudades[ciudades.length-1]}</li>`);
document.write('</ul>');
document.write("<br>");

//Añade en última posición la ciudad de París.
ciudades.push("París");
document.write('<ul>');
for(let posicion=0; posicion<ciudades.length; posicion++){
    document.write(`<li>${ciudades[posicion]}</li>`);
}
document.write('</ul>');
document.write("<br>");

//Escribe por pantalla el elemento que ocupa la segunda posición.
document.write("Ciudad en la segunda posición: "+ciudades[1]);
document.write("<br>");
document.write("<br>");

//Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.
ciudades[1]='Barcelona';
document.write('<ul>');
for(let posicion=0; posicion<ciudades.length; posicion++){
    document.write(`<li>${ciudades[posicion]}</li>`);
}
document.write('</ul>');
document.write("<br>");
