var valor1=parseInt(prompt("Digite o primeiro número:"));
var operacao=(prompt("Digite a operação desejada (pelo símbolo):"));
var valor2=parseInt(prompt("Digite o segundo número:"));
var conta1=(valor1+valor2);
var conta2=(valor1-valor2);
var conta3=(valor1*valor2);
var conta4=(valor1/valor2);

if (operacao === "+"){
alert ("O resultado da operação é: "+conta1);
}
else if (operacao ==="-"){
alert ("O resultado da operação é: "+conta2);
}
else if (operacao ==="*"){
alert ("O resultado da operação é: "+conta3);
}
else if (operacao ==="/"){
alert ("O resultado da operação é: "+conta4);
}

