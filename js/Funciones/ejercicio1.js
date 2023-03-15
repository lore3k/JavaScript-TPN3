/*
Dificultad:  🟢
1- Escribir el código de una función a la que se pasa como parámetro un número entero 
y devuelve como resultado una cadena de texto que indica si el número es par o impar.
Mostrar por pantalla el resultado devuelto por la función.
*/

const num = prompt("Ingrese un número mayor a 0");

let resultado = parImpar(num);
document.write("El número ingresado es "+resultado);
document.write("<br>");
document.write("El resultado de dividir el número ingresado en 2 es: "+(num/2));

function parImpar(num){
    if(num!=0){
        if(num%2===0){
            return "par";
        }
        else{
            return "impar";
        }
    }
    else{
        alert("El número a ingresar debe ser mayor que 0.")
    }
    
}