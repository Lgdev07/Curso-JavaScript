class NegociacaoController{

    constructor(){

        let $ = document.querySelector.bind(document)

        this._data = $('#data')
        this._quantidade = $('#quantidade')
        this._valor = $('valor')

    }

    adiciona(event){
        event.preventDefault()
        alert('Chamei o método adiciona')
    }

}