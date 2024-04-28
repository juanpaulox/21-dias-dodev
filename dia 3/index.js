let nome = ""
let idade = 0
let altura = 0
let peso = 0

nome = prompt("Insira seu primeiro nome.")
idade = parseInt(prompt("Insira sua idade."))//idade será um inteiro
altura = parseFloat(prompt("Insira sua altura."))//passando altura com um ont flutuante da idade
peso = parseInt(prompt("Insira seu peso"))//peso será um inteiro

let nascimento = 0
nascimento = 2023 - idade

let imc = 0
imc = peso / (altura * altura)

console.log("Olá "
+ nome 
+ ", você tem " 
+ idade 
+ " anos, nasceu em "
+ nascimento 
+ ", tem " 
+ altura.toFixed(2) 
+ " de altura, pesa " 
+ peso 
+ "Kg seu IMC é " 
+ imc.toFixed(1)
+ " Kg/m2")

