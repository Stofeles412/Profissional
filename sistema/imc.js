function callImc() {
    var idade = document.getElementById('idade').value;
    var altura = document.getElementById('altura').value;
    var peso = document.getElementById('peso').value;
    var resposta = document.getElementById('resposta');

   
    altura = parseFloat(altura);
    peso = parseFloat(peso);

    
    if (isNaN(altura) || isNaN(peso) || altura <= 0 || peso <= 0) {
        window.alert('Por favor, insira valores válidos para altura e peso.');
        return;
    }

    
    var res = peso / (altura * altura);

   
    resposta.textContent = `com ${idade} anos de idade, Seu IMC é ${res.toFixed(2)}`;
}

function verTabela(){
    var tabela = document.getElementById("tabela")
    var botao = document.getElementsByClassName("botao")
    if(tabela.style.display == "none"){
        tabela.style.display = "inline"
    }else{
        tabela.style.display = "none"
        
    }
}

   
