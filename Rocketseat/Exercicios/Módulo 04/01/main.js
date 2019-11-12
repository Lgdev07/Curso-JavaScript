function checaIdade(idade) {
    return new Promise((resolve, reject)=>{
        if (idade >= 18){
            resolve()
        } else {
            reject()
        }
    })
}

checaIdade(19)
    .then(()=>{
        console.log('Maior que 18')
    })
    .catch(()=>{
        console.log('Menor que 18')
    })


