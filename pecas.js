//console.log("Boa tarde pessoal")
//pesoPeca - camel case
//peso_peca - snake case
//PesoPeca - Pascal case
let pesoPeca = 101

if(pesoPeca > 100) {
    console.log("Peso da Peça maior que 100g, logo, podemos cadastrar a peça.")
    let numeroPecas = 5

    if(numeroPecas < 10){
        console.log("Ainda há espaço na caixa, podemos cadastrar a peça.")
    }
    else{
        console.log("Não há espaço disponivel na caixa.")
    }
    let nomePeca = "Di"

console.log("O comprimento do nome da peça é:", nomePeca.length)

if(nomePeca.length < 3){
    console.warn("Nome da peça muito curto, não é possível cadastrar")
}
else{
    consolem.log("Nome de peça adequado, podemos cadastrar")
}
}
else{
    console.log("Peso insuficiente, não é possível cadastrar.")
}
