function lerValor() {
    return parseInt(prompt("Digite um valor inteiro maior que zero:"));
}

function imprimirValores(N) {
    for (var i = 1; i <= N; i++) {
        document.write(i);
        console.log(i);
    }
}

function main() {
    var N = lerValor();
    imprimirValores(N);
}

main();
