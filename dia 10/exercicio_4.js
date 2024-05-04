//4#
let numero = parseInt(prompt("Digite um numero inteiro e positivo"))
let array = []

array[0] = numero -1
array[1] = numero

for(let i = 2; i < 10; i++){
    array[i] = array[i - 1] + array[i - 2]
}

console.log(array)