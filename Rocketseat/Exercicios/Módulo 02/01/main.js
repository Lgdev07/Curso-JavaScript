
let selectBody = document.querySelector('body')
let createDiv = document.createElement('div')
let createButton = document.createElement('button')

createButton.setAttribute("style", "width: 50px;height: 20px;")
selectBody.appendChild(createDiv)
createDiv.appendChild(createButton)


createButton.addEventListener('click', () => {
    let createSquare = document.createElement('div')
    createSquare.setAttribute('style', 'width: 100px;height: 100px;background: red;margin:10px')    
    createDiv.appendChild(createSquare)
})