var idade = 18

if (idade >= 18 && idade <= 64){
    console.log('Voto Obrigatório')
} else {
    if (idade >= 16 || idade >= 65){
        console.log('Voto Facultativo')
    }
    else{
        console.log('Não Vota')
    }
}