class Assunto{

    constructor(titulo, descricao, data_inicio, data_fim){
        this.titulo = titulo
        this.dataInicio = data_inicio
        this.dataFim = data_fim
        this.concluido = false
    }

    concluir(){
        this.concluido = true
    }


}