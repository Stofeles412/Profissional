AOS.init();
function openMenu(){
const itens = document.getElementById("nav-bar")
const botao = document.getElementById("botao-menu")
if (itens.classList.contains("show")){
    itens.classList.add("show")
}else{
    itens.classList.remove("show")
}
}