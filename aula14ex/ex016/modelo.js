

document.querySelector('button#confirmar').addEventListener('click', clicar)


function clicar(){
    var inicio = Number(document.querySelector('input#inicio').value)
    var passo = Number(document.querySelector('input#passo').value)
    var fim = Number(document.querySelector('input#fim').value)
    var mensagem = document.querySelector('div#contagem')
    document.querySelector('div#output').innerHTML = ''
    mensagem.innerHTML = 'Contando:'

    for(contagem=inicio;contagem<=fim;contagem+=passo){
        document.querySelector('div#output').innerHTML += ' 👉 '
        document.querySelector('div#output').innerHTML += contagem
    }

    document.querySelector('div#output').innerHTML += ' 🏁 '
}

