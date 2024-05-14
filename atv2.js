/*
2 – Faça um laço de repetição que contenha uma operação
aritmética qualquer , esse laço vai se repetir 10x utilizando
entrada de dados (prompt Sync), os resultados de cada operação
será armazenado em um vetor, após o termino do laço de
repetição os resultados de cada operação armazenada deve ser
exibido (com laço de repetição ou não).
nome: Ana Carolina M. Naves

*/
var teclado = require("prompt-sync")();
var operacao = new Array();
var numero = 0;
for (var x = 0; x <= 9; x++) {
    numero = parseInt(teclado("Digite o ".concat(x + 1, "\u00B0 numero : ")));
    operacao[x] = numero * 2;
}
console.log("resultado: ".concat(operacao));
