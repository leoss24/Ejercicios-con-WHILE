/*5. Crea un programa que solicite al usuario un día de la semana (ej: lunes, jueves,
domingo, etc). El programa mostrará un mensaje personalizado para cada día de la
semana por medio de un alert. Y seguirá pidiendo al usuario introducir otro día.
En caso de que el día introducido sea domingo mostrar al usuario el mensaje 
“Ve a descansar” y terminar la captura de información. */

let dia = prompt("Ingresa un día de la semana:");

while (dia !== "") {
  switch (dia.toLowerCase()) {
    case "lunes":
      alert("¡Con la mejor acitud!");
      break;
    case "martes":
      alert("¡clase de progamación!");
      break;
    case "miércoles":
      alert("¡Ten un buen día!");
      break;
    case "jueves":
      alert("¡Buena suerte!");
      break;
    case "viernes":
      alert("¡Viernes y el cuerpo lo sabe!");
      break;
    case "sábado":
      alert("¡Dormir todo el día!");
      break;
    case "domingo":
      alert("Ve a descansar");
      dia = "";
      break;
    default:
      alert("Día ni valido");
      break;
  }
  
  if (dia !== "") {
    dia = prompt("Ingresa otro día:");
  }
}