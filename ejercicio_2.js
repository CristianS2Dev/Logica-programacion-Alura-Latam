/*1: Pregunta al usuario qué día de la semana es. Si la respuesta es "Sábado" o "Domingo", muestra "¡Buen fin de semana!". De lo contrario, muestra "¡Buena semana!".
Variables
/* let diaSemana = prompt(`Qué día de la semana es: `)
let sabado = "sabado".toLowerCase
let domingo = "domingo".toUpperCase
if (diaSemana == sabado , domingo) {
    alert(`¡Buen fin de semana!`);
}else{ 
alert(`¡Buena Semana`)
}; */

//2: Verifica si un número ingresado por el usuario es positivo o negativo. Muestra una alerta informativa.

/* let numero = prompt(`Ingresa un nùmero`)

if (numero != 0){
    alert(`Su numero ${numero} es positivo`);
    
}if(numero < 0 ){
0
    alert(`Su numero es ${numero} negativo`);

}else(numero == 0)
    alert(`Su numero es: 0`) */

//3: Crea un sistema de puntuación para un juego. Si la puntuación es mayor o igual a 100, muestra "¡Felicidades, has ganado!". En caso contrario, muestra "Intentalo nuevamente para ganar.".

/* let puntaje = prompt(`Ingresa tu puntaje`)

if (puntaje >= 100){
    alert(`¡Felicidades, has ganado!`)
    
}else{
    alert(`¡Intentalo de nuevo!`)
} */

//4: Crea un mensaje que informe al usuario sobre el saldo de su cuenta, utilizando un template string para incluir el valor del saldo.

/* let consultaSaldo = prompt(`Ingrese 1 para conocer su saldo`)

let saldo = "50.000"

if (consultaSaldo == 1){
    alert(`Su saldo es ${saldo} `)

} */

//5: Pide al usuario que ingrese su nombre mediante un prompt. Luego, muestra una alerta de bienvenida usando ese nombre.

let nombreUsuario = prompt(`Ingrese su nombre:`);

alert(`¡Bienvenid@ ${nombreUsuario} !`);