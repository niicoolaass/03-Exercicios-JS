var nota1 = parseInt(prompt("Primeira nota:"));
    
var nota2 = parseInt(prompt("Segunda nota:"));

var resultado = (nota1 + nota2) /2;

var media = 9.50;

var aprovados = 1;

if(resultado > media) {
    alert("Média: " + resultado + " aluno aprovado.");

}else {
    alert("Média: " + resultado + " aluno reprovado.");

}

var outro = (prompt("Calcular a média de outros alunos s/n?:"));

var sim = "s";

var não = "n";

while(outro == sim){
    var nota1 = parseInt(prompt("Primeira nota:"));

    var nota2 = parseInt(prompt("Segunda nota:"));

    var resultado = (nota1 + nota2) /2;

    var media = 9.50;

if(resultado > media) {
    alert("Média: " + resultado + " aluno aprovado.");

}else {
    alert("Média: " + resultado + " aluno reprovado.");

    aprovados ++
}

var outro = prompt("Calcular a média de outros alunos s/n?:");

var sim = "s";

var não = "n";

if(outro == não){
    alert(aprovados + " alunos foram aprovados.");
}
}
