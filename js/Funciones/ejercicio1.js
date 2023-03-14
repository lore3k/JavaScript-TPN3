/*
Dificultad:  🟢
1- Escribir el código de una función a la que se pasa como parámetro un número entero 
y devuelve como resultado una cadena de texto que indica si el número es par o impar.
Mostrar por pantalla el resultado devuelto por la función.
*/

const num;

function parImpar(num){
    if(num%2===0){
        document.write("El número ingresado es par");
        document.write("El resultado de dividir el número ingresado en 2 es: "+(num/2));
    }
    else{
        document.write("El número ingresado es impar");
        document.write("El resultado de dividir el número ingresado en 2 es: "+(num/2));
    }
}