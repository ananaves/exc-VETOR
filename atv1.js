/*
1 – Faça dois vetores, um que contenha cada dia da semana,
o outro que contenha sete atividades/hobby. Crie uma frase
para cada dia da semana usando todos os índices dos dois vetores.
nome: Ana Carolina M. naves

*/
var semana = ["segundas-feiras, ter\u00E7as-feiras, quartas-feiras, \n quintas-feiras, sextas-feiras, s\u00E1bados, domingos"];
var hobby = ["penteados, treinar de volei, curso de ingles, \ncuidar de mim mesma, dormir e descansar, ler livors ,assistir filmes, ficar com a minha familia"];
console.log("nas ".concat(semana[0], " eu costumo fazer ").concat(hobby[0], ", nas ").concat(semana[1], " depois de chegar do SENAI, costumo\n").concat(hobby[1], ", nas ").concat(semana[2], " fa\u00E7o um ").concat(hobby[2], ", ").concat(semana[4], " gosto de ").concat(hobby[5], " e ").concat(hobby[6], ", e finalmente\nnas ").concat(semana[4], " dedico meu tempo para ").concat(hobby[3], ", agora nos ").concat(semana[5], " e nos ").concat(semana[6], " gosto de ").concat(hobby[4], "\ne ").concat(hobby[7]));
