function openMenu(){
    var abrir = document.getElementById("menu")
    var botao = document.getElementById("Botao-menu")
    var btn = document.getElementById("botao-fora")
    abrir.classList.toggle("show")
    if (abrir.classList.contains("show")){
        btn.classList.add("show")
    }else{
        btn.classList.remove("show")
    }
    
}