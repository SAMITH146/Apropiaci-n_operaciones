//La operación misteriosa 
//Se tiene la expresión matemática siguiente: 
//(20+10)/5+3∗2−4*(20 + 10) / 5 + 3 * 2 - 4*(20+10)/5+3∗2−4  
//Tu reto es implementarla en JavaScript y analizar paso a paso en qué orden se 
//ejecutan las operaciones hasta llegar al resultado final.

// Declaración de variables
let resultado, paso1, paso2, paso3, paso4;
// No hay datos de entrada en este caso, ya que los valores son constantes
// Proceso  
paso1 = 20 + 10;          // Suma dentro del paréntesis
paso2 = paso1 / 5;        // División
paso3 = 3 * 2;            // Multiplicación
paso4 = 4 * paso2;        // Multiplicación
resultado = paso2 + paso3 - paso4; // Suma y resta final
// Datos de salida
console.log("El resultado final de la operación es: " + resultado);
console.log("Desglose de pasos:");