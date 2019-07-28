function parimp(n){
    if (n%2 == 0){
        return 'par'
    } else{
        return 'impar'
    }
}

function valida_cpf(cpf){

    let newg = [...cpf+''].map(n=>+n)

    let pri_digitos = newg.slice(0,9)

    x = 10
    primeira_soma = 0
    while (x > 1) {
        for (i in pri_digitos){
            primeira_soma += pri_digitos[i] * x
            x--
        }
    }

    primeira_soma = primeira_soma * 10 % 11

    x = 11
    segunda_soma = 0
    if (primeira_soma != newg[9]){
        console.log('CPF Inválido')
    } else{
        pri_digitos = newg.slice(0,10)
        while (x > 1) {
            for (i in pri_digitos){
                segunda_soma += pri_digitos[i] * x
                x--
            }
        }

        segunda_soma = segunda_soma * 10 % 11

        if (segunda_soma == newg[10]){
            console.log('CPF Válido')
        } else{
            console.log('CPF Inválido')
        }
    }

}

var x = function(y, u=5){
    return y + u
}

function fatorial(num){
    if (num == 1){
        return 1
    } else {
        return num * fatorial(num-1)
    }
}

console.log(fatorial(5))