//1#
const array = []
const indices = []
let contadorIndice = 0


const numeroProcurado = parseInt(prompt("Digite o numero a ser procurado"))

for(let i = 0; i < 10; i++){
    const elemento = parseInt(prompt("Insira o elemento"))
    array[i] = elemento;
}

for(let i = 0; i < 10; i++){
    if(array[i] === numeroProcurado){
        indices[contadorIndice] = i
        contadorIndice++
    }
}

console.log(`o numero ${numeroProcurado} foi encontrado nos indices: ${indices}`)
