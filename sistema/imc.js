function callImc() {
    var idade = document.getElementById('idade').value;
    var altura = document.getElementById('altura').value;
    var peso = document.getElementById('peso').value;
    var resposta = document.getElementById('resposta');

    // Convertendo strings para números
    altura = parseFloat(altura);
    peso = parseFloat(peso);

    // Verificando se os valores são números válidos
    if (isNaN(altura) || isNaN(peso) || altura <= 0 || peso <= 0) {
        window.alert('Por favor, insira valores válidos para altura e peso.');
        return;
    }

    // Calculando o IMC
    var res = peso / (altura * altura);

    // Exibindo o resultado
    resposta.textContent = `com ${idade} anos de idade, Seu IMC é ${res.toFixed(2)}`;
}