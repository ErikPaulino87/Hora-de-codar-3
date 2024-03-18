function lerEContarValores() {
    let dentroDoIntervalo = 0;
    let foraDoIntervalo = 0;

    for (let i = 1; i <= 10; i++) {
        let valor = parseInt(prompt("Digite o " + i + "º valor:"));
        if (valor >= 24 && valor <= 42) {
            dentroDoIntervalo++;
        } else {
            foraDoIntervalo++;
        }
    }
    return { dentro: dentroDoIntervalo, fora: foraDoIntervalo };
}


function main() {
    let contagem = lerEContarValores();
    alert("Valores dentro do intervalo entre 24 e 42: " + contagem.dentro +
          "\nValores fora do intervalo entre 24 e 42: " + contagem.fora);
}

main();
