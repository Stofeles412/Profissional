function openMenu(){
    var abrir = window.document.getElementById("mostrar-div")
    var icone = window.document.getElementById("menu-botao")
    if(abrir.style.display == "block"){
        abrir.style.display = "none"
       icone.src = "../imagens/pra-baixo.png"
    }else{
        abrir.style.display = "block"
        icone.src = "../imagens/pra-cima.png"
    }
}

var isAmpliado = false;

function ampliarImg() {
var imagens = document.getElementsByClassName('img');
if (imagens.length > 0) {
if (isAmpliado) {
    // Se já estiver ampliado, volta ao tamanho original
    imagens[0].style.width = "200px";
    isAmpliado = false;
} else {
    // Se não estiver ampliado, amplia para 500px
    imagens[0].style.width = "400px";
    isAmpliado = true;
}
}
}



var zoom = false
function almentarimg(){
var ampliar = window.document.getElementsByClassName('img')
if(!zoom){
ampliar[1].style.width = '200px'
zoom = true
}else{
ampliar[1].style.width = "400px"
zoom = false
}
}

var mais = false
function lupaimg(){
var lupa = window.document.getElementsByClassName('img')
if(!mais){
lupa[2].style.width = "200px"
mais = true
}else{
lupa[2].style.width = "400px"
mais = false
}
}