let botao_incluir = document.querySelector('#botao-incluir')

botao_incluir.addEventListener('click', function(){
    event.preventDefault()
    let negociacao = obj_negociacao()
    create_obj(negociacao)
})

function obj_negociacao(){
    let negociacao = {
        data: document.querySelector('input#data').value,
        qtd: document.querySelector('input#quantidade').value,
        valor: document.querySelector('input#valor').value,
        volume: this.qtd * this.valor
    }
    return negociacao
}

function valor_volume(quantidade, valor){
    return (quantidade * valor).value
}

function create_obj(negociacao){
    let tr = document.createElement('tr')
    document.querySelector('tbody').appendChild(tr)

    Object.keys(negociacao).forEach(function(key) {
        tr.appendChild(document.createElement('td')).innerHTML = negociacao[key];
    });
    
}