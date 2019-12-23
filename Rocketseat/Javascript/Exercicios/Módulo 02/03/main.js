let selectBody = document.querySelector('body')
let createUl = document.createElement('ul')

selectBody.appendChild(createUl)

let nomes = ["Diego", "Gabriel", "Lucas"];

let buttonCriarLista = document.querySelector('button')

buttonCriarLista.addEventListener('click', () =>{

    while (createUl.firstChild){
        createUl.removeChild(createUl.firstChild)
    }

    nomes.forEach(element =>{
        let createLi = document.createElement('li')
        createLi.innerHTML = element
        createUl.appendChild(createLi)
    })
})

