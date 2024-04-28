// 1 - Jantar Especiall // 

/**let fome = prompt("Você está com fome?");
let dinheiro = prompt("Você tem dinheiro?");
let restaurante = prompt("O restaurante está aberto ou fechado?");

if(fome === "Não" || dinheiro === "Não"){
    console.log("Hoje a janta será em casa")
}
if(fome === "Sim" && dinheiro === "Sim" && restaurante === "Fechado"){
    console.log("Peça um delivery!")
}
if(fome === "Sim" && dinheiro === "Sim" && restaurante === "Aberto"){
    console.log("Hoje o jantar será no seu restaurante preferido")
}**/


// 2 - Motorista //

let nome = prompt("Qual é o seu nome?")
let idade = parseInt(prompt("Qual é sua idade?"))
let carteiraDeMotirista = prompt("Você tem carteira de motorista?")
let carro = prompt("Você tem algum carro?")

if(idade < 18 || carteiraDeMotirista === "Não"){
    console.log( nome + ", você não pode dirigir")
}

if(idade >= 18 && carteiraDeMotirista === "Sim" && carro === "Não" ){
    console.log( nome + ", você pode dirigir mas não tem um carro")
}

if(idade >= 18 && carteiraDeMotirista === "Sim" && carro === "Sim"){
    console.log( nome + ", você será o motorista!")
}