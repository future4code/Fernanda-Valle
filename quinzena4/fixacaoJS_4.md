```
function contaOcorrencias(arrayDeNumeros, numeroEscolhido){
  let arrayNovo = []
  for(let i=0;i<arrayDeNumeros.length;i++){
    if(arrayDeNumeros[i]===numeroEscolhido){
      arrayNovo.push(arrayDeNumeros[i])
    }
  }
  
  if (numeroEscolhido===arrayNovo[0]){
    return `O número ${numeroEscolhido} aparece ${arrayNovo.length}x`
  } else if(numeroEscolhido !== arrayNovo[0]){
    return "Número não encontrado"
  }
} 
```