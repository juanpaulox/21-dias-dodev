//criando a variavel "continuar" para caso o usuário inserir novos dados
let continuar;
do {
    //Pedindo informações ao usuário
    let nome = prompt("Digite seu primeiro nome:")
    let idade = Number(prompt("Digite sua idade:"))
    let peso = parseInt(prompt("Digite seu peso:"))
    let altura = (prompt("Digite sua altura:"))
    let profissao = prompt("Digite sua profissão:")

    console.log("Olá " + nome + ", você tem " + idade + " anos, é " + profissao + ", tem " + altura + "M de altura e pesa " + peso + "kg.")

    //Verifiando e imprimindo se o usuário está com idade suficiente para tomar as geladas
    if(idade >= 18){
        console.log("Está liberado para tomar uma geladas")
    }
    else{
        console.log("Sem geladas para você")
    }

    //Calculando a idade em meses, semanas e dias vividos
    let meses = idade * 12;
    let semanas = idade * 52;
    let dias = idade * 365;

    //Imprimindo os meses, semanas e dias vividos
    console.log("Sua idade em meses vividos: " + meses)
    console.log("Sua idade em semanas vividas: " + semanas)
    console.log("Sua idade em dias vividos: " + dias)

    //Verificando e imprimindo o IMC e a referencia do usuário
    let imc = (peso/(altura * altura)).toFixed(1);

    if(imc < 18.5){
        console.log("Seu IMC se refere a: Magreza, " + imc)
    }
    else if(imc >= 18.5 && imc <= 24.9){
        console.log("Seu IMC se refere a: Normal, " + imc)
    }
    else if(imc >= 24.9 && imc <= 30.0){
        console.log("Seu IMC se refere a: Sobrepeso, " + imc)
    }
    else{
        console.log("Seu IMC se refere a: Obesidade, " + imc)
    }

    //Imprimindo o nascimento do usuário
    let nascimento = 2023 - idade
    console.log("Você nasceu no ano de " + nascimento)


    for (let ano = nascimento; ano <= 2023; ano++) {//enquando meu ano for menor ou igual a 2023, irá adicionar um ano
        
        const idadeAtual = idade - (2023 - ano); // ex: minha idade 21 - 20 (2023-2003 = 20)

        // Imprimindo o ano e a idade correspondente
        console.log(`No ano ${ano}, você terá ${idadeAtual} anos de idade.`);
    }

    //Verificando se o usuário deseja inserir novos dados com o LOOP DOWHILE

    continuar = prompt("Você deseja inserir novos dados? (s/n)")
} while (continuar === "s");//fazendo enquando meu continuar for "s", caso não for encerra o loop