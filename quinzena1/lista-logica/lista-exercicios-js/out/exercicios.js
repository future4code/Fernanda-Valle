// Exemplos

// Exercício 0A
function soma() {
  // escreva seu código aqui
  const num1 = prompt('Digite o primeiro número')
  const num2 = prompt('Digite o segundo número')

  console.log(Number(num1) + Number(num2))
}

// Exercício 0B
function imprimeMensagem() {
  // escreva seu código aqui
  const mensagem = prompt('Digite sua mensagem')

  console.log(mensagem)
}

// ---------------------------------------------------
// Exercícios

// Exercício 1
function calculaAreaRetangulo() {
  // escreva seu código aqui
  const altura = prompt('Digite a altura de um retângulo')
  const largura = prompt('Digite a largura de um retângulo')

  console.log(Number(altura) * Number(largura))
}

// Exercício 2
function imprimeIdade() {
  // escreva seu código aqui
  const anoAtual = prompt('Digite o ano atual')
  const anoNasc = prompt('Digite o ano do seu nascimento')

  console.log(Number(anoAtual) - Number(anoNasc))
}

// Exercício 3
function calculaIMC() {
  // escreva seu código aqui
  const peso = prompt('Digite seu peso em kg')
  const altura = prompt('Digite sua altura em metros')

  console.log(Number(peso) / Number(altura * altura))
}

// Exercício 4
function imprimeInformacoesUsuario() {
  // escreva seu código aqui
  const nome = prompt('Digite seu nome')
  const idade = prompt(Number('Digite sua idade'))
  const email = prompt('Digite seu email')

  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

// Exercício 5
function imprimeTresCoresFavoritas() {
  // escreva seu código aqui
  const cor1 = prompt('Insira sua primeira cor favorita')
  const cor2 = prompt('Insira sua segunda cor favorita')
  const cor3 = prompt('Insira sua terceira cor favorita')
  const cores = [cor1, cor2, cor3]

  console.log(cores)
}

// Exercício 6
function retornaStringEmMaiuscula() {
  // escreva seu código aqui
  const frase = prompt('Digite uma frase')

  console.log(frase.toUpperCase())
}

// Exercício 7
function calculaIngressosEspetaculo() {
  // escreva seu código aqui
  const custo = prompt('Insira o custo total do espetáculo de teatro')
  const ingresso = prompt('Insira o valor do ingresso')

  console.log(Number(custo) / Number(ingresso))
}

// Exercício 8
function checaStringsMesmoTamanho() {
  // escreva seu código aqui
  const frase1 = prompt('Insira uma frase')
  const frase2 = prompt('Insira outra frase')

  console.log(frase1.length === frase2.length)
}

// Exercício 9
function checaIgualdadeDesconsiderandoCase() {
  // escreva seu código aqui
  const frase1 = prompt('Insira uma frase')
  const frase2 = prompt('Insira outra frase')

  const frase1Maiuscula = frase1.toUpperCase()
  const frase2Maiuscula = frase2.toUpperCase()

  console.log(frase1Maiuscula === frase2Maiuscula)
}

// Exercício 10
function checaRenovacaoRG() {
  // escreva seu código aqui
  const anoAtual = prompt('Insira o ano atual')
  const anoNasc = prompt('Insira o ano do seu nascimento')
  const id = prompt('Insira o ano em que sua carteira de identitidade foi emitida')

  const idade = anoAtual - anoNasc
  const emissao = anoAtual - id

  console.log((idade<=20&&emissao>=5)||(idade>20&&idade<=50&&emissao>=10)||(idade>50&&emissao>=15))
}

// Exercício 11
function checaAnoBissexto() {
  // escreva seu código aqui
  const anoQualquer = prompt(Number('Insira um ano qualquer'))

  const quatrocentos = (anoQualquer%400==0)
  const quatro = (anoQualquer%4==0)
  const cem = (anoQualquer%100!=0)

  console.log(quatro && cem || quatrocentos)

  //bissexto é multiplo de 400; bissexto é multiplo de 4; bissexto não pode ser múltiplo de 100

 }

// Exercício 12
function checaValidadeInscricaoLabenu() {
  // escreva seu código aqui
  const idade =  prompt(Number('Você tem mais de 18 anos?'))
  const ensino = prompt('Você tem ensino médio completo?')
  const dispo = prompt('Você possui disponibilidade exclusiva durante os horários do curso?')

  const idade18 = idade === "sim"
  const ensinoMedio = ensino === "sim"
  const dispoSim = dispo === "sim"

  console.log(idade18&&ensinoMedio&&dispoSim)

//usuário deve responder sim ou não. A função deve imprimir true ou false. Só é válida a inscrição se todas as respostas forem sim.

}