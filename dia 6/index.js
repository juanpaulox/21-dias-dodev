// 1#
/*let = valor = parseInt(prompt("Insira um valor:"))

for(let i = 0; i <= valor; i++){
    console.log(i)
}

// 2#

for(i = 0; i <= 50; i += 5){
    console.log(i)
}

// 3#

for(i = 50; i >= 0; i -= 5){
    console.log(i)
}*/


// 4#

let entrada = parseInt(prompt("Insira a entrada"))


for(let i = entrada; i <= entrada + 2; i++){
    console.log("Tabuada do número: " + i)
    for(let j = 0; j <= 10; j++){
        console.log(i + " * " + j + " = " + (i *j))
    }
}