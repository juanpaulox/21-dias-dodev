
/*let nota = 0
let sexo = ""

let mediaGeral = 0
let homensEnviaramNt = 0
let mulheresNtAcima7 = 0
let homensMaiorNt = 0

let contador = 1

while(contador <= 10){
    nota = Number(prompt("Insira sua nota"))
    sexo = prompt("Insira seu sexo: m/f")

    if(sexo == "m"){
        if(nota > homensMaiorNt){
            homensMaiorNt = nota
        }
        homensEnviaramNt++
    }

    if(sexo == "f" && nota > 7){
        mulheresNtAcima7 ++

    }

    mediaGeral += nota
    contador++
}

mediaGeral = mediaGeral / 10

console.log("A média geral dos alunos são: " + mediaGeral)
console.log("Quantidade de homens que enviaram notas: " + homensEnviaramNt)
console.log("Quantidade de mulheres que tiveram as notas acima que 7: " + mulheresNtAcima7)
console.log("A maior nota entre os homens: " + homensMaiorNt)*/




let saldoTotal = 1000;
let maiorValor = 0;
let valoresInseridos = 0;
let totalTrasacoes = 0;
let condicao = false

do {
    const nome = prompt("Digite seu nome:")
    const cpf = prompt("Digite seu cpf:")
    const valor = Number(prompt("Digite o valor da transação: "))
    const operacao = prompt("O que você deseja fazer: S / D ?")

    if (valor < 0){
        console.log("Valor invalido. Não foi possível ser feita")
    }
    else if (operacao == "S" && valor > saldoTotal){
        console.log("Saldo insuficiente. Não foi possível ser feita")
    }
    else if (operacao == "S"){
        console.log("Olá, " + nome + " " + cpf+", seu saldo atual é de R$" + saldoTotal)
        saldoTotal -= valor;
        totalTrasacoes++
        valoresInseridos += valor;
        if(valor > maiorValor){
            maiorValor = valor
        }
        console.log("Transação realizada com sucesso. seu saldo atual é de R$" + saldoTotal)
    }

    else{
        console.log("Olá, " + nome + " " + cpf+", seu saldo atual é de R$" + saldoTotal)
        saldoTotal += valor
        totalTrasacoes++
        valoresInseridos += valor
        if(valor > maiorValor){
            maiorValor = valor
        }
        console.log("Transação realizada com sucesso. seu saldo atual é de R$" + saldoTotal)
    }

    const opcao = prompt("Deseja continuar? (1 para continuar, 2 para parar):")
    if(opcao === "1"){
        condicao = true
    }
    else if(opcao === "2"){
        condicao = false
    }
    else {
        console.log("Opção inválida. Tente novamente")
        condicao = false
    }
    
} while (condicao);

console.log("Saldo final: R$" + saldoTotal)
console.log("Maior valor inserido: R$" + valoresInseridos)
console.log("Mádia dos valores inseridos: R$"+ valoresInseridos / totalTrasacoes)