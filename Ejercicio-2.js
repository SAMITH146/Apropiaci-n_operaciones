//Las tres notas del estudiante 
//Un aprendiz obtuvo tres notas en sus evaluaciones. Necesita calcular el promedio 
//para saber cómo le fue en la asignatura. Crea un programa que, a partir de tres 
//valores numéricos, muestre el promedio en pantalla.

// Declaración de variables
let nota1, nota2, nota3, promedio;
// Datos de entrada
nota1 = prompt("Ingrese la primera nota:");
nota2 = prompt("Ingrese la segunda nota:");
nota3 = prompt("Ingrese la tercera nota:");
// Parseo de datos
nota1 = parseFloat(nota1);
nota2 = parseFloat(nota2);
nota3 = parseFloat(nota3);
// Proceso
promedio = (nota1 + nota2 + nota3) / 3;
// Datos de salida
console.log("El promedio de las notas es: " + promedio);
