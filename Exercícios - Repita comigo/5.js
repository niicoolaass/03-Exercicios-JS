alert("Informe dois valores e eu farei a média aritmética deles e dos números entre eles:")

var valor1 = parseInt(prompt("Primeiro valor:"));

var valor2 = parseInt(prompt("Segundo valor:"));

var valores = (valor2 + valor1);

var resultado = valores /2;

while (valor1 <= 0){
    valor1 = parseInt(prompt("Por favor, insira um valor sendo inteiro:"));
}

while (valor2 <= 0){
    valor2 = parseInt(prompt("Por favor, insira um valor sendo inteiro:"));
}

while (valor1 >= valor2){
    valor1 = parseInt(prompt("Por favor, Insira o primeiro valor sendo menor que o segundo:"));
}

document.write("A média aritmética de: " + valor1 + ", " + valor2 + " é: <br>")

while (resultado > 0){
    document.write(resultado + "<br>");

    resultado = resultado -1;
}
