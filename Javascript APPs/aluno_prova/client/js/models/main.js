class Aluno{
    
    constructor(nome, matricula){
        this._nome = nome
        this._matricula = matricula
    }

    get nome(){
        return this._nome
    }
}

class Prova{

    constructor(aluno, nota){
        this._aluno = aluno
        this._nota = nota
        this._esta_aprovado = false
    }

    reusultado(){
        if (this._nota >= 8) {
            this._esta_aprovado = true
        } 
    }   

}