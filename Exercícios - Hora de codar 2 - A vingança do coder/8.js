alert("Digite quatro números e farei a média deles.")

var valor1=parseInt(prompt("Digite o primeiro valor:"));
var valor2=parseInt(prompt("Digite o segundo valor:"));
var valor3=parseInt(prompt("Digite o terceiro valor:"));
var valor4=parseInt(prompt("Digite o quarto valor:"));
var media1=(valor1 + valor2+ valor3+ valor4+ valor5)/4;
var media2=(valor3 + valor4)/2;
var media3=(valor1 + valor2)/2;


if (valor1 && valor2 && valor3 && valor4 > 0  < 10 ) {
    alert("A média dos números é: "+  media1);
}
if (valor1 && valor2 < 0 > 10); {
    alert("A média dos números é: " + media2);
}
if (valor3 && valor4 < 0 > 10); {
    alert("A média dos números é: " + media3);
}
if (media1 || media2 || media3 || media4 > 5) {
    alert ("Você passou no teste!");
}
if (media1 || media2 || media3 || media4 < 5) {
    alert ("Tente novamente!");
}

