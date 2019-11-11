let getButton = document.querySelector('button')
let getBody = document.querySelector('body')
let createUl = document.createElement('ul')


getBody.appendChild(createUl)

function adicionar(){
    let getInput = document.querySelector('input')
    let createLi = document.createElement('li')
    console.log(getInput)    
    createLi.innerHTML = getInput.value
    createUl.appendChild(createLi)
    getInput.value = ''
    
}