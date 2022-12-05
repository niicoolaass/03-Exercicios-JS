var valor = parseInt(prompt("Insira um valor de 1 para cima:"));

while(valor <= 0 ){
    var valor = parseInt(prompt("Por favor, insira um valor de 1 para cima:"));
}

while(valor > 1){
    document.write(valor + "<br>");

    valor = valor -1; 
}

