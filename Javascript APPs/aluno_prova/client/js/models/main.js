class Aluno{
    
    constructor(nome, matricula){
        this._nome = nome
        this._matricula = matricula
    }

    get nome(){
        return this._nome
    }

    get matricula(){
        return this._matricula
    }

    get nome_completo(){
        if (this._nome_completo){
            return this._nome_completo
        }
    }

    sobrenome(nome, sobrenome){
        if (nome != this._nome){
            console.log(`O nome ${nome} não está cadastrado`)
        } else if (sobrenome == 'Silva'){
            console.log('Que sobrenome feio....')
        } else{
            this._nome_completo = `${nome} ${sobrenome}`
        }
    }
}

class Prova{

    constructor(aluno, nota){
        this._aluno = aluno
        this._nota = nota
        this._esta_aprovado = false
    }

    gera_resultado(){
        if (this._nota >= 7) {
            this._esta_aprovado = true
        } 
    }   

}


class Professor{
    constructor(nome){
        this._nome = nome
    }

    aprovados(lista_provas){
        let passou = []

        lista_provas.forEach(element =>{
            if (element._nota >= 7){
                passou.push(element._aluno._nome)
            }
        })

        console.log(passou)
    }

}

function teste(numero){
    if (numero < 5){
        console.log('Numero baixo...')
    } else {
        return numero + 1 
    }
}

let lista_numeros = [5,6,5,4,5,8,6,5,4,7,2] 

lista_numeros.forEach(element =>{
    if (element > 5){
        console.log(`O número ${element} é maior que 5`)
    } else if (element == 5){
        console.log(`O número ${element} é igual a 5`)
    }else {
        console.log(`O número ${element} não é maior que 5`)
    }
})
