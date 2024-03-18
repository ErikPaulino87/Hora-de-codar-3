function lerValor() {
    return parseInt(prompt("Digite um valor inteiro:"));
}

function imprimirTabuada(numero, limite) {
    for (let i = 1; i <= limite; i++) {
        document.write(numero + " x " + i + " = " + (numero * i) + "<br>");
    }
    document.write("<br>");
}

function main() {
    let N = lerValor();
    for (let i = 1; i <= N; i++) {
        imprimirTabuada(i, 10);
    }
}

main();
