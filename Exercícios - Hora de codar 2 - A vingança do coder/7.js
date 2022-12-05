alert("Informe seis valores e eu resultadorei os que são inferiores a 72.");

        
var  valor1=parseInt(prompt("Digite o primeiro valor:"));
var  valor2=parseInt(prompt("Digite o segundo valor:"));
var  valor3=parseInt(prompt("Digite o terceiro valor:"));
var  valor4=parseInt(prompt("Digite o quarto valor:"));
var  valor5=parseInt(prompt("Digite o quinto valor:"));
var  valor6=parseInt(prompt("Digite o sexto valor:"));
var resultado=0;

if  (valor1 < 72) {
resultado  +=  valor1;
}

if  (valor2 < 72) {
resultado  +=  valor2;
}

if  (valor3 < 72) {
resultado  +=  valor3;
}

if  (valor4 < 72) {
resultado  +=  valor4;
}

if  (valor5 < 72) {
resultado  +=  valor5;
}

if  ( valor6 < 72) {
resultado  +=  valor6;
}

alert ("O resultado é: " + resultado);
alert ("Os valores informados foram: " +  valor1  +  ", "  +  valor2  +  ", "  +  valor3  +  ", "  +  valor4  +  ", "  +  valor5  +  ", "  +  valor6 );
