let continuar = "n"
let salarioAtual;
while(continuar != "s"){
    let nome = prompt("Digite seu nome")
    let idade = parseInt(prompt("Digite sua idade"))
    salarioAtual = parseFloat(prompt("Digite seu salário atual"))

    console.log("Sua nome é " + nome);
    console.log("Sua idade é " + idade)
    console.log("Seu salário atual é " + salarioAtual)
    continuar = prompt("Todos os seus dados estão corretos? s/n")
}

let aumentoSalarial = 0.015
console.log("Seu aumento salarial para os proximos 10 anos")

for(let ano = 1; ano <= 10; ano++){
    salarioAtual += salarioAtual * aumentoSalarial
    aumentoSalarial *= 2

    console.log(`Em ${2023 + ano} seu salário será ${salarioAtual.toFixed(2)}`)
}