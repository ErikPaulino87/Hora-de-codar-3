let alunosAprovados = 0;
let calcularOutroAluno = true;

while (calcularOutroAluno) {
    let nota1 = (prompt("digite a primeira nota do aluno: "));
    let nota2 = (prompt("digite a segunda nota do aluno: "));
    let mediafinal = (nota1 + nota2) / 2;



if (mediafinal >= 9.5) {
    alunosAprovados++;
}

let resposta = prompt("calcular a média de outro aluno? (S/N)");

if (resposta == "N" || resposta == "n") {
    calcularOutroAluno = false;
}

}

alert ("quantidade de alunos aprovados: " + alunosAprovados);