/*
1 – Faça dois vetores, um que contenha cada dia da semana,
o outro que contenha sete atividades/hobby. Crie uma frase
para cada dia da semana usando todos os índices dos dois vetores.
nome: Ana Carolina M. naves

*/

let semana : string [] = [`segundas-feiras, terças-feiras, quartas-feiras, 
quintas-feiras, sextas-feiras, sábados, domingos`];

let hobby : string [] = [`penteados, treinar de volei, curso de ingles, 
cuidar de mim mesma, dormir e descansar, ler livors ,assistir filmes, ficar com a minha familia`];

console.log(`nas ${semana[0]} eu costumo fazer ${hobby[0]}, nas ${semana[1]} depois de chegar do SENAI, costumo
${hobby[1]}, nas ${semana[2]} faço um ${hobby[2]}, ${semana[4]} gosto de ${hobby[5]} e ${hobby[6]}, e finalmente
nas ${semana[4]} dedico meu tempo para ${hobby[3]}, agora nos ${semana[5]} e nos ${semana[6]} gosto de ${hobby[4]}
e ${hobby[7]}`)