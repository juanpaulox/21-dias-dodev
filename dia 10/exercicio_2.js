//2#
const array = []
const arrayInvertido = []

for(let i = 0; i < 5; i++){
    const elemento = parseInt(prompt("Insira o elemento: " + (i + 1) + "º."))
    array[i] = elemento;
}

console.log(array)

let contador = 4
for(let i = 0; i < 5; i++){
    arrayInvertido[i] = array[contador]
    contador--
}

console.log(arrayInvertido)