/*
2 – Faça um laço de repetição que contenha uma operação
aritmética qualquer , esse laço vai se repetir 10x utilizando
entrada de dados (prompt Sync), os resultados de cada operação
será armazenado em um vetor, após o termino do laço de
repetição os resultados de cada operação armazenada deve ser
exibido (com laço de repetição ou não).
nome: Ana Carolina M. Naves

*/
const teclado = require(`prompt-sync`)();

let operacao : number []= new Array();
let numero : number = 0 
for (let x = 0; x <= 9 ; x++){
    numero = parseInt(teclado(`Digite o ${x+1}° numero : `));
    operacao[x] = numero * 2
}

console.log(`resultados: ${operacao}`);