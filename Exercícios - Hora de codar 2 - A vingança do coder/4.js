alert("Digite três valores e eu somarei os dois maiores.")

var valor1=parseInt(prompt("Primeiro valor:"));
var valor2=parseInt(prompt("Segundo valor:"));
var valor3=parseInt(prompt("Terceiro valor:"));

var conta;

if(valor1 === valor2 || valor1 === valor3 || valor2 === valor3 ){
alert("Não pode repetir valores. Tente novamente.");

}if (valor1 > valor2 && valor1 > valor3 && valor2 > valor3){
    conta = valor1 + valor2;
    alert("A soma: " + valor1 + " + " + valor2 + " é igual a: " + conta)

} else if (valor2 > valor1 && valor2 > valor3 && valor3 > valor1){
    conta = valor2 + valor3;
    alert("A soma: " + valor2 + " + " + valor3 + " é igual a: " + conta)

} else if (valor3 > valor1 && valor3 > valor2 && valor1 > valor2){
    conta = valor3 + valor1;
    alert("A soma: " + valor1 + " + " + valor3 + " é igual a: " + conta)
}
