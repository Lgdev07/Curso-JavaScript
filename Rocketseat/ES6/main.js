// Classes
class List {
    constructor(){
        this.data = []
    }
    add(data){
        this.data.push(data)
        console.log(this.data)
    }
}


class TodoList extends List{
    constructor(){
        super()

        this.usuario = "Luan"
    }

    mostraUsuario(){
        console.log(this.usuario)
    }

}

const MinhaLista = new TodoList();

document.querySelector('button').onclick = () => {
    MinhaLista.add('Novo Todo');
    MinhaLista.mostraUsuario()
}

const arr = [1,3,3,4,2,6]


// Map
const newArr = arr.map((item, index) => item + index)
    // [1, 3, 5, 7, 9, 11]

// Reduce
const sum = arr.reduce((total, next) => total + next)
    //21

// Filter
const filter = arr.filter(item => item % 2 == 0)
    // [2, 4, 6]

// Find
const find = arr.find(item => item == 2)
    // 2

// Desestruturação
const usuario = {
    nome: 'Luan',
    idade: 24,
    endereço: {
        cidade: "São Bernardo",
        estado: "SP"
    }
}

const {nome, idade, endereço: {cidade}} = usuario

console.log(nome)
console.log(idade)
console.log(cidade)

// Rest Operator

const usuario2 = {
    nome2: "Luan",
    idade2: 24,
    empresa: "Multidados"
}

const {nome2, ...resto} = usuario2

console.log(nome2)
console.log(resto)

// Spread Operator
// Para somar propriedades ou trocar
// valores de objetos...

const usuario3 = {
    nome2: "Luan",
    idade2: 24,
    empresa: "Multidados"
}

const usuario4 = { ...usuario3, nome2: "Teste" }

console.log(usuario4)