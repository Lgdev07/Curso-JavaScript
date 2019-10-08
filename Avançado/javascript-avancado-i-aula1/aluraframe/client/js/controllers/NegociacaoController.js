class NegociacaoController{

    constructor(){

        let $ = document.querySelector.bind(document)

        this._input_data = $('#data')
        this._input_quantidade = $('#quantidade')
        this._input_valor = $('#valor')

    }

    adiciona(event){
        event.preventDefault()
        
        console.log(this._input_data.value)

        let myDate = new Date(...
            this._input_data.value.split('-').map((element, index) => element - index % 2)
        )
        
        console.log(myDate)

        let negociacao = new Negociacao(
            myDate,
            this._input_quantidade.value,
            this._input_valor.value
        )
        
    }

    incrementar(){
        let incremento = document.querySelector("#incrementado")
        incremento.innerHTML ++
    }   

}