/*
Dificultad:  🟢🟡
3- Solicitar por pantalla al usuario ingresar el valor de los
lados de un rectángulo, luego crear una función para calcular 
su perímetro y mostrarlo por pantalla.

La fórmula del perímetro  es p = 2*(a +b)
 */

const ladoA = prompt("Ingrese el valor del lado A del rectángulo:");
const ladoB = prompt("Ingrese el valor del lado B del rectángulo:");

perimetro(ladoA,ladoB);

function perimetro(ladoA,ladoB){
    document.write("El perímetro del rectángulo es: "+(2*ladoA+2*ladoB));
}