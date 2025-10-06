//El terreno rectangular 
//Un agricultor tiene un terreno rectangular y conoce su base y su altura en metros. 
//Quiere calcular tanto el área como el perímetro del terreno para cercarlo y sembrar. 
//Diseña un programa en el que él pueda obtener ambos valores.

// Declaración de variables
let base, altura, area, perimetro;

// Datos de entrada
base = prompt("Ingrese la base del terreno en metros:");
altura = prompt("Ingrese la altura del terreno en metros:");

// Parseo de datos
base = parseFloat(base);
altura = parseFloat(altura);

// Proceso
area = base * altura;
perimetro = 2 * (base + altura);

// Datos de salida
console.log("El área del terreno es: " + area + " m²");
console.log("El perímetro del terreno es: " + perimetro + " metros");
