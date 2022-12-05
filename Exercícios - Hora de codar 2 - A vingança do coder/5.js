alert("Informe seis valores diferentes e farei a média aritmética deles:")

var valor1=parseInt(prompt("Primeiro valor:"));
var valor2=parseInt(prompt("Segundo valor:"));
var valor3=parseInt(prompt("Terceiro valor:"));
var valor4=parseInt(prompt("Quarto valor:"));
var valor5=parseInt(prompt("Quinto valor:"));
var valor6=parseInt(prompt("Sexto valor:"));
var valores = valor1 + valor2 + valor3 + valor4 + valor5 + valor6;
var conta = valores /6; 

alert("A média aritmética de: " + valor1 +", "+ valor2 +", "+ valor3 +", "+ valor4 +", "+ valor5 +", "+ valor6 +", "+ "é: " + conta);


