/*2. Crea un programa que solicite al usuario 2 números entre 1 y 50. Posteriormente mostrar en consola
 los números del 1 hasta el 50, pero añadir el mensaje “¡Lotería!” solo al mostrar los números indicados por el usuario. */


let num1 = parseInt(prompt("Ingresa el primer número del 1 al 50:"));
let num2 = parseInt(prompt("Ingresa el segundo número del 1 al 50:"));
let cont = 1;

while (cont <= 50) {
    if (cont === num1 || cont === num2) {
        console.log(cont + "¡lotería!");  
    }
    else {
        console.log(cont);
    }
    cont++;
}