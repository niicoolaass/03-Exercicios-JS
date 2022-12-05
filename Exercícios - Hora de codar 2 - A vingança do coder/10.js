alert("Calcularei o peso ideal para você.")

var altura=parseFloat(prompt("Digite a sua altura"));
var sexo=(prompt("Digite o seu sexo"));
var feminino=(61.1* altura) - 44.7;
var masculino=(72.7* altura) - 58;


if (sexo === "masculino"){
alert ("O seu peso ideal é: " + masculino);
}
if (sexo === "feminino"){
alert ("O seu peso ideal é: " + feminino);
}

