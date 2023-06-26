/*1. Crea un programa que pregunte al usuario un número. Mostrar los números 
que son múltiplos de 5 desde 1 hasta el número introducido por el usuario.*/

let numero = parseInt(prompt("Ingresa un numero:"));
let num = 1;
while (num <= numero){
    if (num % 5 == 0){
        document.write(num + ",")
    }
    num++;
}