/* 
Dificultad:  🟢🟡
4- Escriba un script que muestre la tabla de multiplicar de un 
número ingresado por pantalla, la creación de la tabla debe ser 
realizada con una función y mostrar solo los resultados del 1 al 10 
del número elegido por el usuario.
 */

let numero = prompt("Ingrese un número");

tablas(numero);

function tablas(numero){
    document.write('<h2> Tabla de multiplicar del número '+numero+'</h2>')
    document.write('<ul>');
    for(let i=1; i<=10;i++){
        document.write(`<li>`);
        document.write(numero+"*"+i+" = "+(numero*i));
        document.write(`</li>`);
    }
    document.write('</ul>');
}