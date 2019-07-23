var horas = new Date().getHours()

if(horas <= 12){
    document.querySelector('div#horas').innerHTML = `Agora são ${horas} horas`
    document.querySelector('img#imagem').setAttribute('src','dia.jpg')
} else if(horas <= 18){
    document.querySelector('div#horas').innerHTML = `Agora são ${horas} horas`
    document.querySelector('img#imagem').setAttribute('src','tarde.jpg')
} else{
    document.querySelector('div#horas').innerHTML = `Agora são ${horas} horas`
    document.querySelector('img#imagem').setAttribute('src','noite.jpg')
}