// Exercício de interpretação de código

// Exercício 1

/* a.
Matheus Nachtergaele
Virgínia Cavendish
canal: "Globo", horário: "14h"
*/

// Exercício 2

/* a.
nome: Juca
idade: 3
raca: "SRD"

nome: Juba
idade: 3
raca: "SRD"

nome: Jubo
idade: 3
raca: "SRD"
*/

/* b.
A sintaxe dos três pontos faz uma cópia inteira do objeto informado
e permite mudar ou adicionar uma ou outra propriedade.
*/

// Exercício 3

/* a. false / undefined */
/* b. Pois o primeiro console.log chamou uma propriedade que existe e a função retornou o valor dela. Já o segundo console.log chamou uma propriedade que não existe,
portanto a função retornou undefined. */



// Exercícios de escritas de código

// Exercício 1

/*
const pessoa = {
    nome: "Fernanda",
    apelidos: ["Fê", "Fefê", "Nanda"]
}

function chamarPessoa(objeto){
    console.log(`Eu sou ${objeto.nome}, mas pode me chamar de: ${objeto.apelidos[0]}, ${objeto.apelidos[1]}, ou ${objeto.apelidos[2]}.`)
}

chamarPessoa(pessoa)

const novaPessoa = {
    ...pessoa,
    apelidos: ["Fefet","Fer","Ferdinanda"]
}

chamarPessoa(novaPessoa)
*/


// Exercicio 2

/*
const alguem1 = {
    nome: "Fernanda",
    idade: 28,
    profissao: "Administradora"
}
const alguem2 = {
    nome: "Eduardo",
    idade: 29,
    profissao: "Engenheiro"
}

function receberInfos(pessoas){
    return [pessoas.nome, pessoas.nome.length, pessoas.idade, pessoas.profissão, pessoas.profissao.length]
}

console.log(receberInfos(alguem1))
console.log(receberInfos(alguem2))
*/


// Exercício 3

/*
const carrinho = []

const fruta1 = {
    nome: "Mamão",
    disponibilidade: true
}

const fruta2 = {
    nome: "Banana",
    disponibilidade: true
}

const fruta3 = {
    nome: "Maça",
    disponibilidade: true
}

function colocarFrutaCarrinho(fruta){
    carrinho.push(fruta)
}

colocarFrutaCarrinho(fruta1)
colocarFrutaCarrinho(fruta2)
colocarFrutaCarrinho(fruta3)

console.log(carrinho)
*/
