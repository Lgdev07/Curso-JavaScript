function checaIdade(idade) {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
        if (idade >= 18){
            resolve("Você tem 18 ou mais")
        } else {
            reject("Você tem menos de 18 anos")
        }
        }, 2000)
    })
}

checaIdade(55)
    .then((response) => {
        console.log(response)
    })
    .catch((error) => {
        console.log(error)
    })