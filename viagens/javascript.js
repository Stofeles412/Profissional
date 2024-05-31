function openMenu(){
    var abrir = window.document.getElementById('itens')
    var icone = window.document.getElementById('icone-menu')
    
    if (abrir.style.display == 'none'){
        abrir.style.display = 'block'
    }else{
        abrir.style.display = 'none'
    }
    }

    function openForm(){
        var abrir = window.document.getElementById('form-nav')
        if(abrir.style.display == 'none'){
            abrir.style.display = 'block'
        }else{
            abrir.style.display = 'none'   
        }
    }

    function openLogin(){
        var login = window.document.getElementById('form-login')
        if(login.style.display == 'none'){
            login.style.display = 'block'
        }else{
            login.style.display = 'none'   
        }
    }
    