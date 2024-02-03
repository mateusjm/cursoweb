// Solicitar ao usuário dois números separados por um espaço
let inputString = prompt("Digite dois números separados por um espaço:");

// Dividir a string usando o espaço como delimitador
let numeros = inputString.split(' ');

// Converter os números de string para números inteiros (ou ponto flutuante, se necessário)
let numero1 = parseInt(numeros[0]);
let numero2 = parseInt(numeros[1]);

// Verificar se a conversão foi bem-sucedida
if (!isNaN(numero1) && !isNaN(numero2)) {
    console.log("Número 1:", numero1);
    console.log("Número 2:", numero2);
} else {
    console.log("Entrada inválida. Certifique-se de digitar dois números separados por um espaço.");
}
    







