let button = document.querySelector('#button')
let tbody = document.querySelector('tbody')
let waiting = document.querySelector('.waiting')

button.onclick = (event) => {
    event.preventDefault()

    waiting.style.visibility = 'hidden'
    waiting.innerHTML = 'Searching...'
    tbody.innerHTML = ''

    let input = document.querySelector('#input')

    userRepos(input.value)

    input.value = ''
}

function userRepos(username) {

    waiting.style.visibility = 'visible'

    axios.get(`https://api.github.com/users/${username}/repos`)
        .then((response) => {
            
            let repoNumbers = 1

            response.data.forEach(element => {
                let tr = document.createElement('tr')
                let td = document.createElement('td')
                let th = document.createElement('th')
                let a = document.createElement('a')

                th.setAttribute('scope', 'row')
                a.setAttribute('href', element.html_url)

                th.innerHTML = repoNumbers++
                a.innerHTML = element.name
                
                td.appendChild(a)
                tbody.appendChild(tr)
                tr.appendChild(th)
                tr.appendChild(td)

            });

            waiting.style.visibility = 'hidden'

        })
        .catch((error) => {
            waiting.innerHTML = "Didn't find any name, please search again"
            waiting.style.visibility = 'visible'
        })
}

