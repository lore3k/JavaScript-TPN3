/*
Dificultad:  🟢🟡
2- Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. 
A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, 
sólo por minúsculas o por una mezcla de ambas.
 */

let cadena=prompt("Ingrese una cadena de texto");

let resultado = mayMin(cadena);
document.write("La cadena está formada "+resultado);

function mayMin(cadena){
    if(cadena===cadena.toUpperCase()){
        return "sólo por mayúsculas.";
    }
    else{
        if(cadena===cadena.toLowerCase()){
            return "sólo por minúsculas.";
        }
        else{
            return "por mayúsculas y minúsculas.";
        }
    }
}