AOS.init();
function openMenu(){
const itens = document.getElementById("nav-bar")
const botao = document.getElementById("botao-menu")
if (itens.classList.contains("show")){
    itens.classList.remove("show")
}else{
    itens.classList.add("show")
}
}