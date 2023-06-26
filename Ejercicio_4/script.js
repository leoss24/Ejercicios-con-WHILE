/*4. Crea un programa que solicite al usuario letras o palabras, si es así guardar el resultado.
 Para terminar de capturar el usuario no debe escribir valor alguno. Al terminar de capturar,
 mostrar en pantalla la concatenación de todas las palabras capturadas.*/

 const array = [];

 let usuario = prompt("Ingresa letras o palabras:");

 while (usuario !== ""){
    array.push(usuario);
    usuario = prompt("Ingresa otra palabra (o dejas vacio para finalizar)")
 }

 console.log(array.join(""));