let palavras = ['oi', 'tchau', 'ate', 'riso']


console.log(palavras)

palavras.push(7)

console.log(palavras)

palavras.pop()

console.log(palavras)

console.log(`O vetor tem ${palavras.length} posições`)

palavras[0].replace('o', 'a')

// for (i=0;i<palavras.length;i++){
//     console.log(palavras[i])
// }

for (pos in palavras){
    console.log(palavras[pos])
}

word = 'caneta'

// let arr = Array.from(word)

let arr = [...word];

console.log(arr)
