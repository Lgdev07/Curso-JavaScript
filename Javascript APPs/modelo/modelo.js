document.querySelector('section').addEventListener('mouseover', mouse_em_cima())
document.querySelector('section').addEventListener('mouseout', mouse_fora())


function mouse_em_cima(){  
    let imagem = document.querySelector('img#imagem')
    let horas = document.querySelector('div#horas')

    imagem.setAttribute('src', 'dia.jpg')
    horas.innerHTML = 'Mouse em cima!'
}

function mouse_fora(){
    let imagem = document.querySelector('img#imagem')
    let horas = document.querySelector('div#horas')

    imagem.setAttribute('src', 'tarde.jpg')
    horas.innerHTML = 'Mouse fora!'

}