var horas = new Date().getHours()
var mensagem = `Agora são ${horas} horas`

if(horas>=24){
    console.log('Não existe horas acima de 24...')

} else if(horas>=19){
    console.log(mensagem)
    console.log('Boa Noite!')
    
    } else if(horas>=12){
        console.log(mensagem)
        console.log('Boa Tarde!')
        
        } else{
            console.log(mensagem)
            console.log('Bom dia!')
        }

