const arr = [1, 2, 3, 4, 5, 6]

let [x, ...y] = arr

console.log(x)
console.log(y)

let somaAll = (...args) => args.reduce((a, b) => a + b)

console.log(somaAll(2,3))

const usuario = {
    nome: 'Diego',
    idade: 23,
    endereco: {
    cidade: 'Rio do Sul',
    uf: 'SC',
    pais: 'Brasil',
    }
};

let usuario2 = { ...usuario, nome: 'Gabriel'}
let usuario3 = { ...usuario, endereco: {...usuario.endereco, cidade: 'Lontras'}}

console.log(usuario2)
console.log(usuario3)