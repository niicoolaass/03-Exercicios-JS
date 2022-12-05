alert("Informe quatro valores, mas somente o primeiro, último e o maior de todos eles aparecerão.")

var valor1=parseInt(prompt("Primeiro valor:"));
var valor2=parseInt(prompt("Segundo valor:"));
var valor3=parseInt(prompt("Terceiro valor:"));
var valor4=parseInt(prompt("Quarto valor:"));

if(valor1 > valor2 && valor1 > valor3 && valor1 > valor4){
    alert("O primeiro valor: " + valor1 + ", o último valor: " + valor4 + " e o maior valor é: " + valor1);

} else if (valor2 > valor1 && valor2 > valor3 && valor2 > valor4){
    alert("O primeiro valor: " + valor1 + ", o último valor: " + valor4 + " e o maior valor é: " + valor2);

} else if (valor3 > valor1 && valor3 > valor2 && valor3 > valor4){
    alert("O primeiro valor: " + valor1 + ", o último valor: " + valor4 + " e o maior valor é: " + valor3);

} else if (valor4 > valor1 && valor4 > valor2 && valor4 > valor3){
    alert("O primeiro valor: " + valor1 + ", o último valor: " + valor4 + " e o maior valor é: " + valor4);
}

