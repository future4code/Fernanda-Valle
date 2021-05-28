//Exercícios de interpretação de texto

//Exercício 1:
/*
a. undefined
b. null
c. 11
d. 3
e. (11) [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
f. 9
*/



//Exercício 2:

// SUBI NUM ÔNIBUS EM MIRROCOS, 27



//Exercício de escrita de códigos

//Exercício 1:

const nome = prompt("Qual seu nome?")
const email = prompt("Qual seu email?")

console.log(`O e-mail ${email} foi cadastrado com sucesso. Seja bem-vinda(o), ${nome}`)



//EXercício 2:

const comidas = ['japonesa','churrasco','tropeiro','massa','pizza']

console.log(comidas)
console.log("Essas são as minhas comidas preferidas:")
console.log(comidas[0])
console.log(comidas[1])
console.log(comidas[2])
console.log(comidas[3])
console.log(comidas[4])

const comidaPreferida = prompt("Qual sua comida preferida?")
console.log('Comida do usuário:')
console.log(comidas[0])
console.log(comidaPreferida)
console.log(comidas[2])
console.log(comidas[3])
console.log(comidas[4])



//EXercício 3:

const listaDeTarefas = []
const tarefa1 = prompt("Primeira tarefa que precisa realizar hoje")
const tarefa2 = prompt("Segunda tarefa que precisa realizar hoje")
const tarefa3 = prompt("Terceira tarefa que precisa realizar hoje")

listaDeTarefas.push(tarefa1, tarefa2, tarefa3)
console.log(listaDeTarefas)

let indice = Number(prompt("Digite o indice da tarefa que ja concluiu(0,1,2)"))
listaDeTarefas.splice(indice,1)

console.log(listaDeTarefas)
