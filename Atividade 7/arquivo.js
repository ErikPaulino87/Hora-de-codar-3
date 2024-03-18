
function lerNota(numeroNota) {
    let nota;
    do {
        nota = parseFloat(prompt("Digite a " + numeroNota + "ª nota (de 0 a 10):"));
    } while (nota < 0 || nota > 10); 
    return nota;
}


function calcularMedia(notas) {
    let soma = 0;
    for (let i = 0; i < notas.length; i++) {
        soma += notas[i];
    }
    return soma / notas.length;
}


function main() {
    let notas = [];
    for (let i = 1; i <= 6; i++) {
        let nota = lerNota(i);
        notas.push(nota);
    }
    let media = calcularMedia(notas);
    alert("A média das notas é: " + media.toFixed(2));
}


main();