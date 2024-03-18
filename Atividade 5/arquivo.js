function lerNumeroInteiro(mensagem) {
    return parseInt(prompt(mensagem));
}

function calcularMediaAritmetica(valor1, valor2) {
    let soma = valor1 + valor2;
    let contador = valor2 - valor1 + 1;

    for (let i = valor1 + 1; i < valor2; i++) {
        soma += i;
    }

    let media = soma / contador;
    return media;
}

function main() {
    let valor1 = lerNumeroInteiro("Digite o primeiro número inteiro:");
    let valor2 = lerNumeroInteiro("Digite o segundo número inteiro (maior que o primeiro):");

    let media = calcularMediaAritmetica(valor1, valor2);
    alert("A média aritmética dos números entre " + valor1 + " e " + valor2 + " é: " + media);
}

main();