class Negociacao{

    constructor(data, quantidade, valor) {
        this._data = new Date(data.getTime());
        this._quantidade = quantidade;
        this._valor = valor;
        Object.freeze(this)
    }

    get volume(){
        return this._quantidade * this._valor
    }
    get data(){
        return new Date(this._data.getTime())
    }
    get quantidade(){
        return this._quantidade
    }
    get valor(){
        return this._valor
    }

    altera_quantidade(nova_qtd){
        if (nova_qtd > 5000){
            alert('Valor muito alto...')
        } else {
            this._quantidade = nova_qtd
        }
    }
}