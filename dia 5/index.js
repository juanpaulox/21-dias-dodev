/* Comentatando primeiro exercicio inteiro

//Primeiro exercicio (1)

//Pedindo informações ao usuário.
let primeiroNumero = Number(prompt("Insira o primero número da sua operação:"));
let segundoNumero = Number(prompt("Insira o segundo número da sua operação:"));
let opcao = prompt("Qual operação matemática você vai realizar com os números inseridos?")

//Realizando a operação da escolha feita pelo usuário.
switch(opcao){ 
    case "Soma":
        let soma = primeiroNumero + segundoNumero
        console.log("Resultado da sua soma: " + soma)
        break;

    case "Multiplicação":
        let multiplicacao = primeiroNumero * segundoNumero
        console.log("Resultado da sua multiplicação: " + multiplicacao)
        break;

    case "Divisão":
        let divisao = primeiroNumero / segundoNumero
        console.log("Resultado da sua divisao: " + divisao)
        break;

    case "Subtração":
        let subtracao = primeiroNumero - segundoNumero
        console.log("Resultado da sua subtração: " + subtracao)
        break;

    default:
        console.log("Operação inválida, tente novamente")
        break;
}*/


//Segundo exercício (2)

//Declarando as váriaveis
let litroDeGasolina = 5
let litroDeAlcool = 3
let valor

//Pedindo a opção desejada
let opcaoPosto = prompt("O que você irá fazer no posto de gasolina?")

//Realizando a operação da escolha feita pelo usuário.
switch(opcaoPosto) {
    case "Abastecer com gasolina":
        valor = parseInt(prompt("Qual valor desejado?")) 
        let litrosAbastecidosGasolina = valor / litroDeGasolina
        console.log("Foram abastecidos " + litrosAbastecidosGasolina +" litros de gasolina")
        break;

    case "Abastecer com álcool":
        valor = parseInt(prompt("Qual valor desejado?")) 
        let litrosAbastecidosAlcool = valor / litroDeAlcool
        console.log("Foram abastecidos " + litrosAbastecidosAlcool +" litros de álcool")
        break;

    case "Calibrar os pneus":
        console.log("Pneus calibrados com sucesso")
        break;

    default:
        console.log("Opção invalida, tente novamente.")
        break;
}