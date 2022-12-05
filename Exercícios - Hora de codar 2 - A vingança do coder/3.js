alert("Direi entre os três qual o valor é maior.")

var valor1=parseInt(prompt("Primeiro valor:"));
var valor2=parseInt(prompt("Segundo valor:"));
var valor3=parseInt(prompt("Terceiro valor:"));

if(valor1 === valor2 || valor1 === valor3 || valor2 === valor3){
alert("Não pode repetir valores. Tente novamente.");

}else if (valor1 > valor2 && valor1 > valor3){
    alert(" O maior valor foi o primeiro informado: " + valor1);

} else if (valor2 > valor1 && valor2 > valor3){
    alert(" O maior valor foi o segundo informado: " + valor2);
    
} else if(valor3 > valor1 && valor3 > valor2){
    alert(" O maior valor foi o terceiro informado: " + valor3);
}