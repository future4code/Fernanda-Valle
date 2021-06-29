// EXERCÍCIO 01
function inverteArray(array) {

const arrayInvertido = array.map((valor, i) => {
  return array[array.length -1 -i]
})
return arrayInvertido
} 

// EXERCÍCIO 02
function retornaNumerosParesElevadosADois(array) {
let numerosPotencia = []
for(let i = 0; i < array.length ; i++){
  if (array[i] % 2 === 0){
    numerosPotencia.push(array[i]**2)
  }
}
return numerosPotencia
}

// EXERCÍCIO 03
function retornaNumerosPares(array) {
  const pares = array.filter((inputArray) => {
    return inputArray % 2 === 0
  })
  return pares
}

// EXERCÍCIO 04
function retornaMaiorNumero(array) {
  let maior = 0
  array.forEach((element, index) => {
    if (maior < array[index]) {
      maior = element
    }
  });
  return maior
}

// EXERCÍCIO 05
function retornaQuantidadeElementos(array) {
return array.length
}

// EXERCÍCIO 06
function retornaExpressoesBooleanas() {

}

// EXERCÍCIO 07
function retornaNNumerosPares(n) {
  const nPrimeirosPares = []
  for (let i = 0; i < n * 2; i++) {
    if (i % 2 === 0) {
      nPrimeirosPares.push(i)
    }
  }
  return nPrimeirosPares
}

// EXERCÍCIO 08
function checaTriangulo(a, b, c) {
  // return 'Escaleno'
  // return 'Equilátero'
  // return 'Isósceles'

  if (a === b && b === c) {
    return "Equilátero"
  } else if (a === b || b === c || c === a) {
    return "Isósceles"
  } else {
    return ("Escaleno")
  }
}

// EXERCÍCIO 09
function comparaDoisNumeros(num1, num2) {
  // Formato do objeto a ser retornado:
  // {
  //   maiorNumero: X,
  //   maiorDivisivelPorMenor: Y,
  //   diferenca: Z
  // }
  let maior = num1
  let menor = num1
  if (num2 > maior) {
    maior = num2
  }
  if (num2 < menor) {
    menor = num2
  }
  let Y = maior % menor === 0
  let diferencaNum = Number(maior - menor)
  return { 'maiorNumero': maior, 'maiorDivisivelPorMenor': Y, 'diferenca': diferencaNum }
}

// EXERCÍCIO 10
function segundoMaiorEMenor(array) {

}

// EXERCÍCIO 11
function ordenaArray(array) {
  let verificaOrdem = true
  while (verificaOrdem === true) {
    verificaOrdem = false
    for (let i = 0; i < array.length; i++) {
      if (array[i] > array[i + 1]) {
        let tempVar = array[i]
        array[i] = array[i + 1]
        array[i + 1] = tempVar
        verificaOrdem = true
      }
    }
  }
  return array
}

// EXERCÍCIO 12
function filmeFavorito() {
  const filmeAstrodev = {
    nome: 'O Diabo Veste Prada',
    ano: 2006,
    diretor: 'David Frankel',
    atores: [`Meryl Streep`, `Anne Hathaway`, `Emily Blunt`, `Stanley Tucci`]
  }
  return filmeAstrodev
}

// EXERCÍCIO 13
function imprimeChamada() {
  // "Venha assistir ao filme NOME_DO_FILME, de ANO, dirigido por DIRECAO e estrelado por ELENCO."
}

// EXERCÍCIO 14
function criaRetangulo(lado1, lado2) {
  const retangulo = {
    largura: lado1,
    altura: lado2,
    perimetro: (2 * Number(lado1 + lado2)),
    area: Number(lado1 * lado2)
  }
  return retangulo
}

// EXERCÍCIO 15
function anonimizaPessoa(pessoa) {

}

// EXERCÍCIO 16A
function maioresDe18(arrayDePessoas) {
  const resultado = arrayDePessoas.filter((param) => {
    return param.idade >= 18
  })
  return resultado
}

// EXERCÍCIO 16B
function menoresDe18(arrayDePessoas) {
  const resultado = arrayDePessoas.filter((param) => {
    return param.idade < 18
  })
  return resultado
}

// EXERCÍCIO 17A
function multiplicaArrayPor2(array) {

}

// EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {

}

// EXERCÍCIO 17C
function verificaParidade(array) {

}

// EXERCÍCIO 18A
function retornaPessoasAutorizadas(pessoas) {
  const pessoasAutorizadas = pessoas.filter((input) => {
    if ((input.altura >= 1.5) && (input.idade > 14) && (input.idade < 60)) {
      return input
    }
  })
  return pessoasAutorizadas
}

// EXERCÍCIO 18B
function retornaPessoasNaoAutorizadas(pessoas) {
  const pessoasNaoAutorizadas = pessoas.filter((input) => {
    if (!((input.altura >= 1.5) && (input.idade > 14) && (input.idade < 60))) {
      return input
    }
  })
  return pessoasNaoAutorizadas
}

// EXERCÍCIO 19A
function ordenaPorNome(consultasNome) {
  
}

// EXERCÍCIO 19B
function ordenaPorData(consultasData) {

}

// EXERCÍCIO 20
function calculaSaldo(contas) {
  for (let i=0; i<contas.length; i++){
    let soma
    soma = 0
    for (creditos of contas[i].compras){
      soma += Number(creditos)
    }
    contas[i].saldoTotal = contas[i].saldoTotal - soma
    console.log (contas[i].saldoTotal)
  }
  return contas
}
