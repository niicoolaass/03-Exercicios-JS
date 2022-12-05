var a = parseInt(prompt("Primeiro valor: "));

var b = parseInt(prompt("Segundo valor: "));

var resultado = a/b;


while (b <= 0){
    b = parseInt(prompt("Segundo valor novamente: "));
}

alert("A divisão dos valor é " + resultado);
