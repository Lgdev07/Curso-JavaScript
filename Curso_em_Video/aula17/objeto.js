let amigo = {
    nome:'José',
    idade: 20,
    peso: 85.6,
    engordar(p=0){
        console.log('Engordou!')
        this.peso += p
    }
}


console.log(amigo.peso)

amigo.engordar(2)

console.log(amigo.peso)

console.log(amigo)