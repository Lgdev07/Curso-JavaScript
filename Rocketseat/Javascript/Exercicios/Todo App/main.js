let getBody = document.querySelector('body')
let getButton = document.querySelector('button')
let createUl = document.createElement('ul')

let itens = JSON.parse(localStorage.getItem('todoList')) || []

getBody.appendChild(createUl)

renderItens()

function getElementsToStorage(){
    localStorage.setItem('todoList', JSON.stringify(itens))
}

getButton.addEventListener('click', () => {
    let getInput = document.querySelector('input')

    if (!getInput.value){
        alert('Submit Something')
    } else {
        itens.push(getInput.value)
        getInput.value = ''
        getElementsToStorage()
        renderItens()
    }
    
})

function renderItens(){
    let clearUl = document.querySelector('ul')

    if (clearUl){
        clearUl.innerHTML = ''
    }
     
    itens.forEach(element =>{
        let createLi = document.createElement('li')
        let createA = document.createElement('a')
        
        createLi.innerHTML = element

        createUl.appendChild(createLi)
        createLi.appendChild(createA)
        
        createA.innerHTML = ' Excluir'
        createA.setAttribute('href', '#')
    
        createA.addEventListener('click', () => {
            createA.parentElement.remove()
            itens = itens.filter(v => v!== element)
            getElementsToStorage()
        })

    })
}