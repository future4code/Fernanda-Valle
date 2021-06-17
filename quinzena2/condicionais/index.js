//exercicio 1 da aula

// function compararNumeros(num1, num2) {
//     if (num1 === num2) {
//         return "Sucesso! São iguais."
//     }
// }


// const escolha1 = Number(prompt("Insira primeiro número:"))
// const escolha2 = Number(prompt("Insira segundo número:"))

// console.log(compararNumeros(escolha1, escolha2))


// exercicio 2 da aula

// function compararNumeros(num1, num2) {
//     if (num1 === num2) {
//         return "Sucesso! São iguais."
//     } else {
//         console.log("Vish, são diferentes!")
//     }
// }


// const escolha1 = Number(prompt("Insira primeiro número:"))
// const escolha2 = Number(prompt("Insira segundo número:"))

// console.log(compararNumeros(escolha1, escolha2))


// const idadeMae = 57
// const idadePai = 55

// if(idadePai === idadeMae){
//     console.log("Ambos tem a mesma idade")
// } else if(idadePai > idadeMae){
//   console.log("O pai é mais velho")
// } else {
// console.log("A mãe é mais velha")
// }


// function compararDoisNumeros(num1, num2) {
//     if(escolha1 > escolha2) {
//         return `Número 1: ${escolha1} é maior que número 2: ${escolha2}`
//     } else if(escolha1 < escolha2) {
//         return `Número 1: ${escolha1} é menor que número 2: ${escolha2}`
//     } else {
//         return `Número 1: ${escolha1} é igual ao número 2: ${escolha2}`
//     }
// }

// const escolha1 = Number(prompt("Insira primeiro número:"))
// const escolha2 = Number(prompt("Insira segundo número:"))

// console.log(compararDoisNumeros(escolha1, escolha2))

// Switch Case

// const paisDeOrigem = prompt("Onde você nasceu?")

// switch (paisDeOrigem){
//     case "Brasil":
//         console.log("brasileiro")
//         break
//     case "EUA":
//         console.log("norte americano")
//         break
//     case "Inglaterra":
//         console.log("inglês")
//         break
//     default:
//         console.log("Cidadania não identificada")
//         break
// }

// Exercicio 4 da aula

// const pokemon = prompt("Escolha seu Pokemon: Bulbassauro, Charmander, Squirtle")

// switch (pokemon){
//     case "Bulbassauro":
//         console.log("Tipo Planta e Veneno")
//         break
//     case "Charmander":
//         console.log("Tipo Fogo")
//         break
//     case "Squirtle":
//         console.log("Tipo Água")
//         break
//     default:
//         console.log("Por favor, escolha um Pokemon dentre os três.")
//         break
// }


// Exercício 5 da aula

// const ensinoMedio = prompt("Concluiu o ensino médio? sim ou não") === "sim"
// const maiorIdade = prompt("Tem 18 anos ou mais? sim ou não") === "sim"
// const naoCursandoOutraFacul = prompt("Está cursando outra faculdade? sim ou não") === "não"

// function validarSePodeEntrar(passouEnsinoMedio, ehMaiorIdade, naoEstaCursandoFacul) {
//     if (passouEnsinoMedio && ehMaiorIdade && naoEstaCursandoFacul) {
//         return "Pode se matricular"
//     } else {
//         return "Não pode se matricular"
//     }
// }

// console.log(validarSePodeEntrar(ensinoMedio, maiorIdade, naoCursandoOutraFacul))



// Exercícios de interpretação de código

// Exercício 1

// a. O código verifica se o número inserido pelo usuário possui resto igual a zero quando dividido por 2.
// Se tiver resto zero, retorna a mensagem que passou no teste. Se tiver resto diferente de zero, retorna
// a mensagem de que não passou no teste. Ou seja, testa se o número inserido é par.

// b. Para números pares.

// c. Para números ímpares.


// Exercício 2

// a. O código serve para simplificar os códigos de else if que seriam utilizados a cada condição e vai
// mostrar qual o preço de cada fruta que o usuário inserir.

// b. "O preço da fruta Maçã é R$ 2.25"

// c. "O preço da fruta Pêra é R$ 5" (o que deveria vir na verdade 5.5)


// Exercício 3

// a. Pegou o número inserido pelo usuário e deixou salvo na variável "número" como tipo "Number"

// b. se for 10 vai imprimir "Esse número passou no teste" e um erro embaixo. Se for -10 vai dar só um erro.

// c. Vai ter erro porque o último console.log está retornando a variável "mensagem" que foi criada dentro
// do bloco "if" e assim não tem como ser acessada pelo escopo pai.


// Exercícios de escrita de código

// Exercício 1

// const idade = Number(prompt("Quantos anos você tem?"))

// if (idade >= 18) {
//     console.log("Você pode dirigir")
// } else {
//     console.log("Você não pode dirigir")
// }

// Exercício 2

// const turno = prompt("Qual turno do dia você estuda? Insira M para matutino, V para vespertino ou N para noturno")

// if (turno === "M"){
//     console.log("Bom dia!")
// } else if (turno === "V"){
//     console.log("Boa tarde!")
// } else {
//     console.log("Boa noite!")
// }


// Exercício 3

// const turno = prompt("Qual turno do dia você estuda? Insira M para matutino, V para vespertino ou N para noturno")

// switch(turno){
//     case "M":
//         console.log("Bom dia!")
//         break
//     case "V":
//         console.log("Boa tarde!")
//         break
//     case "N":
//         console.log("Boa noite!")
//         break
//     default:
//         console.log("Insira uma das opções fornecidas.")
//         break
// }


// Exercício 4

// const genero = prompt("Qual o gênero do filme que vamos assistir?")
// const preco = prompt("Qual o valor do ingresso do filme?")

// if (genero === "fantasia" && preco < 15) {
//     console.log("Bom filme!")
// } else {
//     console.log("Escolha outro filme :(")
// }