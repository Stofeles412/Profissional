function Openmenu(){
const conteudo = document.getElementById("menu-nav")
const icone = document.getElementById("icone-menu")
if(conteudo.style.display == "none"){
    conteudo.style.display = "inline-block"
    icone.src = "../imagens/divisa-direita.png"
}else{
    conteudo.style.display = "none"
      icone.src = "../imagens/divisa-esquerda.png"
}
}