function Openmenu(){
const conteudo = document.getElementById("menu-nav")
const icone = document.getElementById("icone-menu")
if(conteudo.classList.contains ("show")){
    conteudo.classList.remove ("show")
    icone.src = "../imagens/divisa-direita.png"
}else{
    conteudo.classList.add  ("show")
      icone.src = "../imagens/divisa-esquerda.png"
}
}