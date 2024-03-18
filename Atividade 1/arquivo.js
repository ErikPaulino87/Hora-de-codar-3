function lerValor(mensagem) {
    return parseFloat(prompt(mensagem));
}

function validarSegundoValor(valor) {
    while (valor <= 0) {
        valor = lerValor("Digite um valor maior que zero para o segundo número:");
    }
    return valor;
}


function calcularDivisao() {
    let valor1 = lerValor("Digite o primeiro valor:");
    let valor2 = lerValor("Digite o segundo valor:");
    

    valor2 = validarSegundoValor(valor2);

 
    return valor1 / valor2;
}


let resultado = calcularDivisao();
alert("O resultado da divisão é: " + resultado);