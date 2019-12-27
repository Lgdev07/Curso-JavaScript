import api from './api'

class App {
    constructor(){
        this.repositories = []
        this.formEl = document.getElementById('repo-form')
        this.inputEl = document.querySelector('input')
        this.listEl = document.getElementById('repo-list')
        this.notifEl = document.getElementById('notification')
        this.registerHandlers()
    }

    registerHandlers() {
        this.formEl.onsubmit = event => this.addRepository(event)
    }

    async addRepository(event){
        event.preventDefault()

        this.notifEl.style.display = 'block'
        this.notifEl.innerHTML = 'Carregando...'

        const repoInput = this.inputEl.value

        if (repoInput.length === 0 ){
            this.notifEl.style.display = 'none'
            return
        }

        try {
            const response = await api.get(`/repos/${repoInput}`)

            const { name, description, html_url, owner: { avatar_url }} = response.data
    
            console.log(response)
    
            this.repositories.push({
                name,
                description,
                avatar_url,
                html_url,
            })
            
            this.inputEl.value = ''

            this.render()

        } catch {
            this.notifEl.innerHTML = 'Nenhum repositório encontrado com esse nome'
        }

    }

    render() {
        this.listEl.innerHTML = ''

        this.repositories.forEach(element => {
            let imgEl = document.createElement('img')
            imgEl.setAttribute('src', element.avatar_url)

            let nameEl = document.createElement('strong')
            nameEl.innerHTML = element.name

            let descEl = document.createElement('p')
            descEl.innerHTML = element.description

            let urlEl = document.createElement('a')
            urlEl.innerHTML = 'Acessar'
            urlEl.setAttribute('href', element.html_url)

            let listItemEl = document.createElement('li')
            
            listItemEl.appendChild(imgEl)
            listItemEl.appendChild(nameEl)
            listItemEl.appendChild(descEl)
            listItemEl.appendChild(urlEl)

            this.notifEl.style.display = 'none'

            this.listEl.appendChild(listItemEl)
        
        });

    }

    renderError(){
        let bodyEl = document.querySelector('body')
        let divEl = document.createElement('div')
        divEl.setAttribute('id', 'notification')
        divEl.innerHTML = 'Nenhum repositório encontrado com esse nome'

        bodyEl.appendChild(divEl)
    }

}

new App()