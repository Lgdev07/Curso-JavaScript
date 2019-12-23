const usuarios = [
    {nome: 'Diego', idade: 23, empresa: 'Rocketseat'},
    {nome: 'Gabriel', idade: 15, empresa: 'Rocketseat'},
    {nome: 'Lucas', idade: 30, empresa: 'Facebook'},
]

let idades = usuarios.map(item => item.idade)

console.log(idades)
// [23, 15, 30]

let filter = usuarios.filter(item => item.empresa == 'Rocketseat' && item.idade > 18)

console.log(filter)
// [{ nome: 'Diego', idade: 23, empresa: 'Rocketseat' }]


let find = usuarios.find(item => item.empresa == 'Google')

console.log(find)
// undefined

let union = usuarios.map(item => {
    item.idade *= 2
    return item
}).filter(item => item.idade <= 50)

console.log(union)
// [
//     { nome: 'Diego', idade: 46, empresa: 'Rocketseat' },
//     { nome: 'Gabriel', idade: 30, empresa: 'Rocketseat' },
// ]