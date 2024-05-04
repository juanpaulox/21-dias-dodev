//3#
const array = []
const arrayInvertido = []

const valor = parseInt(prompt("Quantos numeros você deseja inserir?"))


for(let i = 0; i < valor ; i++){
    const elemento = parseInt(prompt("Insira o " + (i + 1) + "º numero"))
    array[i] = elemento
}

console.log(`Seu primeiro conjunto é: ${array}.`)

let contador = valor - 1
for(let i = 0; i < 5; i++){
    arrayInvertido[i] = array[contador]
    contador--
}


console.log(`Seu segundo conjunto é: ${arrayInvertido}.`)