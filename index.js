// criar variavel para receber a soma dos números
let result = 0;
// criar função para realizar tarefa
function sum(num) {
    // condicional para verificar se o número é positivo e inteiro
    if (Math.sign(num) && Number.isInteger(num)) {
        // switch case com o typeof para validar se o parâmetro da função "sum" é do tipo Number
        switch (typeof num) {
            case 'number':
                // console.log("funfou")
                for (let i = 0; i < num; i++) {
                    if (i % 3 === 0 || i % 5 === 0) {
                        result += i;
                        console.log(`Valor: ${result}`)
                    }
                }
                break;
            default:
                console.log(`o tipo da variavel num é: ${typeof num}, por favor, insira um número positivo e inteiro`)
        }
    } else
        return console.info("Por favor insira um número que seja positivo e inteiro");
}

// Passe o número desejado como parâmetro da função "sum"
sum(10);
// criar typeof para verificar se o numero é inteiro

//criar condição para verificar se o numero é inteiro e positivo;

// criar estrutura de repetição(loop)

// add condição da regra de negocio para que a variavel sum possa receber incremeents


