
document.querySelector('button#confirmar').addEventListener('click', confirmar)

function confirmar() {
    if(document.querySelector('select#resultado')){
    document.querySelector('div#div').remove()
    document.querySelector('select#resultado').remove()
    }
    var numero = Number(document.querySelector('input#inicio').value)
    
    if(! numero){
        window.alert('Você deve selecionar um número!')
    } else{
        var select = document.createElement("select");
        var div = document.createElement("div");
    
        select.setAttribute('id', 'resultado');
        select.setAttribute('size', 10);
        div.setAttribute('id', 'div')
        div.setAttribute('style', "text-align:center;")
        div.innerHTML = 'Resultado:'
        document.querySelector('section#section').appendChild(div);
        document.querySelector('section#section').appendChild(select);
        
        for (i=1;i<=10;i++){
            var option = document.createElement('option')
            select.appendChild(option)
            option.innerHTML = `${numero} x ${i} = ${numero * i}`
        }
    }


    }