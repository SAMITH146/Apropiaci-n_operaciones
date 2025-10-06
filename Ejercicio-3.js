//El contador de visitas 
//Un sitio web comienza con un contador de visitas en 100. En un día recibe 25 
//visitas adicionales, luego pierde 10 por un error de registro, y finalmente se 
//duplican las visitas. Representa esta situación y determina cuál es el valor final del 
//contador. 

// Declaración de variables
let contador, visitasAdicionales, visitasPerdidas;
let visitasDuplicadas;

// Datos de entrada
contador = 100;
visitasAdicionales = 25;
visitasPerdidas = 10;
visitasDuplicadas = (contador + visitasAdicionales - visitasPerdidas) * 2;

// Proceso
contador = contador + visitasAdicionales; // Sumar visitas adicionales
contador = contador - visitasPerdidas;    // Restar visitas perdidas
contador = contador * 2;                   // Duplicar las visitas

// Datos de salida
console.log("El valor final del contador de visitas es: " + contador);
console.log("El valor final del contador de visitas (usando variable intermedia) es: " + visitasDuplicadas);
