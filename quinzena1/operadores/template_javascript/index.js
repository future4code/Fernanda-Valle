//Exercícios de interpretação

/*
Exercício 1:
a. false
b. false
c. true
d. boolean

Exercício 2:
Nenhum operador aritmético pode ser usado com uma string,
portanto precisa indicar que é um variável do tipo Number.
A mensagem que o console vai imprimir serão os dois números indicados,
um do lado do outro.

Exercício 3:

let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = ((Number)primeiroNumero + Number(segundoNumero))

console.log(soma)

*/

//Exercícios de escrita

//Exercício 1:

let suaIdade = prompt ("Qual a sua idade?")
let idadeMelhorAmige = prompt ("Qual a idade do seu melhor amigo ou da sua melhor amiga?")

const comparar = (Number(suaIdade) > Number(idadeMelhorAmige))

console.log("Sua idade é maior do que a do seu melhor amigo ou da sua melhor amiga?", comparar)

const diferenca = (Number(suaIdade) - Number(idadeMelhorAmige))

console.log(diferenca)


//Exercício 2:

//a)
let numeroPar = prompt("Insira um número par:")
//b)
const restoDaDivisao=(Number(numeroPar) % 2)
console.log(Number(restoDaDivisao))
//c) O resultado vai ser sempre 0 pois qualquer número par dividido por 2, tem resto igual a 0.
//d) Se o usuário inserir um número ímpar, o console irá imprimir o valor que restar da divisão por 2.


//Exercício 3:

let idadeAnos = prompt("Quantos anos você tem?")
console.log("Sua idade em anos é:", Number(idadeAnos))

const idadeMeses=(Number(idadeAnos) * 12)
console.log("Sua idade em meses é:", idadeMeses)

const idadeDias=(Number(idadeMeses) * 30)
console.log("Sua idade em dias é:", idadeDias)

const idadeHoras=(Number(idadeDias) * 24)
console.log("Sua idade em horas é:", idadeHoras)



//Exercício 4:

let num1 = prompt("Insira um número")
let num2 = prompt("Insira outro número")

const maior=(Number(num1) > Number(num2))
console.log("O primeiro numero é maior que o segundo?", maior)

const igual=(Number(num1) === Number(num2))
console.log("O primeiro numero é igual ao segundo?", igual)

const divisivelResto1=(Number(num1) % Number(num2))
const resto1=(Number(divisivelResto1) === 0)
console.log("O primeiro numero é divisível pelo segundo?", resto1)

const divisivelResto2=(Number(num2) % Number(num1))
const resto2=(Number(divisivelResto2) === 0)
console.log("O segundo numero é divisível pelo primeiro?", resto2)
