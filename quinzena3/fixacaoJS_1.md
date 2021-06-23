```
function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
salarioFixo = 2000
  if(qtdeCarrosVendidos !== 0){
    let precoCarro = valorTotalVendas / qtdeCarrosVendidos
    let comissaoTotal = qtdeCarrosVendidos * (100+ precoCarro *0.05)
    let salarioTotal = salarioFixo + comissaoTotal
    return salarioTotal
  } else {
    return salarioFixo
  }
}
```