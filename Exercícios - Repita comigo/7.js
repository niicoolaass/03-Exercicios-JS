var nota1 = parseInt(prompt("Primeira nota:"));

var nota2 = parseInt(prompt("Segunda nota:"));

var nota3 = parseInt(prompt("Terceira nota:"));

var nota4 = parseInt(prompt("Quarta nota:"));

var nota5 = parseInt(prompt("Quinta nota:"));

var nota6 = parseInt(prompt("Sexta nota:"));

notas = nota1 + nota2 + nota3 + nota4 + nota5 + nota6;
resultado = (notas) /6;

while(nota1 < 0 || nota1 > 10){
    var nota1 = parseInt(prompt("Digite um valor válido Para a primeira nota."))
}




while(nota2 < 0 || nota2 > 10){
    var nota2 = parseInt(prompt("Digite um valor válido Para a segunda nota."))
}



while(nota3 < 0 || nota3 > 10){
    var nota3 = parseInt(prompt("Digite um valor válido Para a terceira nota."))
}




while(nota4 < 0 || nota4 > 10){
    var nota4 = parseInt(prompt("Digite um valor válido Para a quarta nota."))
}



while(nota5 < 0 || nota5 > 10){
    var nota5 = parseInt(prompt("Digite um valor válido Para a quinta nota."))
}



while(nota6 < 0 || nota6 > 10){
    var nota6 = parseInt(prompt("Digite um valor válido Para a sexta nota."))
}

alert("A média das notas: " + nota1 + ", " + nota2 + ", " + nota3 + ", " + nota4 + ", " + nota5 + ", " + nota6 + " é: " + resultado)
