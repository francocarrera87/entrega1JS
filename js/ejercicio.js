let num1;
let resultado;
let Opcion;


Opcion = prompt('Bienvenido, ¿qué opción desea operar?\n' +
      'Opción 1: Verificar si tu número ingresado es Par o Impar\n' +
      'Opción 2: Tabla de multiplicar');


let opcionNumero = parseInt(Opcion);

switch (opcionNumero) {
  case 1:
    alert('Usted ingresó la opción Verificar numero pares!');
    while (true) {
        numero = parseInt(prompt("Por favor, ingrese un número (o ingrese 0 para salir):"));
      
        if (numero === 0) {
            alert('Nos vemos pronto!')
          break;
        }
      
        if (numero % 2 === 0) {
          alert("El número ingresado es PAR.");
        } else {
          alert("El número ingresado es IMPAR.");
        }
      }
    break;


  case 2:
    alert('Usted ingresó la opción número 2');
    numero =prompt('Ingrese el numero del cual quiera ver su tabla de multiplicar! : ')
    if (!isNaN(numero)) {
        for (let i = 1; i <= 10; i++) {
          let resultado = numero * i;
          console.log(numero + " x " + i + " = " + resultado);
        }
      } else {
        console.log("Por favor, ingrese un número válido.");
      }
    break;
  default:
    alert('Opción no válida');
}