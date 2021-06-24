```
function calculaPrecoTotal(quantidade) {
  const precoMaca = 1.30
  const precoDuziaMaca = 1.00
  
  if(quantidade >= 12){
    return precoDuziaMaca * quantidade
  } else{
    return precoMaca * quantidade
  }
}
```