//Pede ao usuario que digite dois numeros
let numeroA = prompt("Digite um número:");
let numeroB = prompt("Digite outro número:");
numeroA = Number(numeroA);
numeroB = Number(numeroB);

//Imprimir mensagens
console.log("O primeiro numero é maior que segundo?", numeroA > numeroB);
console.log("O primeiro numero é igual ao segundo?", numeroA == numeroB);
console.log("O primeiro numero é divisível pelo segundo?", numeroA % numeroB == 0);
console.log("O segundo numero é divisível pelo primeiro?", numeroB % numeroA == 0);



