//Exercício de interpretação

//Exercício 1:
//a- 10 ; 50
//b- não apareceria nada no console

//Exercício 2:
//a-
//b-




//Exercícios de escrita de código

//Exercício 1:
//a-

const nome = "a Fernanda"
const idade = "28 anos"
const cidade = "Belo Horizonte"
const estudante = "sou estudante"

function falarSobreMim() {
    console.log("Eu sou " + nome + ", tenho " + idade + ", moro em " + cidade + " e " + estudante + ".")
}
falarSobreMim()

//b-

function falarSobreAlguem(nome, idade, cidade, profissao){
    const dados = "Eu sou " + nome + ", tenho " + idade + " anos, moro em " + cidade + " e sou " + profissao + "."
    console.log(dados)
}
console.log(falarSobreAlguem("o Eduardo", 29, "Belo Horizonte", "Engenheiro"))



//Exercício 2:
//a-
function somarDoisNumeros(num1,num2){
    const resultado = num1 + num2
    console.log(resultado)
}

somarDoisNumeros(2,5)


//b-
function compararNumeros(num1,num2){
    const booleano = num1 >= num2
    console.log(booleano)
}

compararNumeros(2,3)


//c-
function numeroPar(num1){
    const par = num1 % 2 === 0
    console.log(par)
}
numeroPar(10)

//d-
function receberMensagem(mensagem){
    console.log("Total de caracteres: " + mensagem.length + ". Frase em capslock: " + mensagem.toUpperCase() + ".")
}
const mensagem = prompt("Escreva alguma frase aqui")
receberMensagem(mensagem)

//Exercício 3:

//incompleto
/*
const numero1 = prompt("Insira um número")
const numero2 = prompt("Insira outro número")

function somar(num1, num2){
    const soma = numero1 + numero2
    console.log(soma)
    
}
somar()


function subtrair(num1, num2){
    const subitracao = numero1 - numero2
}

function multiplicar(num1, num2){
    const multiplicacao = numero1 * numero2
}

function dividir(num1, num2){
    const divisao = numero1 / numero2
}

const numero1 = prompt("Insira um número")
const numero2 = prompt("Insira outro número")*/
