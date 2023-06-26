/* 3. Crea un programa que solicite al usuario números, si lo que este introduce es
 un número guardarlo en un arreglo. Para terminar el capturar el usuario debe ingresar
  el número 0. Finalmente mostrar la lista de números capturados en pantalla o en la consola.*/

const numero = [];

let num = parseInt(prompt("Ingresa números al azar:"));

while (num !== 0) {
    if (!isNaN(num)){
        numero.push(num);
    }
    num = parseInt(prompt("Ingresa otro número (o ingresa 0 para finalizar)"))
}

console.log(numero);