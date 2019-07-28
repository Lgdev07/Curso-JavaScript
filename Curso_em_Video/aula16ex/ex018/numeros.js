

document.querySelector('button#adicionar').addEventListener('click', clicar_adicionar)
document.querySelector('button#confirmar').addEventListener('click', clicar_confirmar)
document.querySelector('button#deletar').addEventListener('click', clicar_deletar)

var div_lenght = document.createElement('div')

function clicar_adicionar(){
    var option = document.createElement('option')
    var select = document.querySelector('select')
    var numero = document.querySelector('input#inicio').value

    if (numero > 100 || numero < 1 || [...select.options].map(option => option.value).indexOf(numero) != -1){
        alert('O número deve ser de 1 a 100 e único')
    } else {
        select.appendChild(option)
        option.innerHTML = numero
    } 
}

function clicar_confirmar(){
    var select = document.querySelector('select')
    var section = document.querySelector('section')
    var numero = Number(document.querySelector('input#inicio').value)
    var soma = 0

    if (! numero || numero > 100 || numero < 1){
        alert('Você precisa adicionar ao menos um número e ele deve ser de 1 a 100')
    }

    lista = [...select.options].map(option => option.value)

    for (i in lista){
        soma += Number(lista[i])   
    }
    
    section.appendChild(div_lenght)
    section.setAttribute('style', 'height: 500px')

    div_lenght.innerHTML = ''
    div_lenght.setAttribute('style', 'margin-top: 20px')
    div_lenght.innerHTML = 
    `O tamanho da lista é de ${select.length} <br/><br/>
    A soma é ${soma} <br/><br/>
    O menor valor é ${Math.min(...lista)} <br/><br/>
    O maior valor é ${Math.max(...lista)} <br/><br/>
    A média dos valores é ${(soma/select.length).toFixed(2)} <br/><br/>`      
}

function clicar_deletar(){
    var select = document.querySelector('select')

    select.remove(select.selectedIndex)

    clicar_confirmar()
}