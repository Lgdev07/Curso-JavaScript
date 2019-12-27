import axios from 'axios';

// Funão delay aciona o .then após 1s
const delay = () => new Promise(resolve => setTimeout(resolve, 1000));

const umPorSegundo = async () => {
    for (let i = 1; i < 4; i++){
        await delay();
        console.log(`${i}s`)
    }
}

umPorSegundo()


const getUserFromGithub = async (user) => {
    try {
        let response = await axios.get(`https://api.github.com/users/${user}`)
        console.log(response.data)
    }
    catch (error) {
        console.log(`${error} - Usuário não existe`)
    }
    
}

getUserFromGithub('diego3g');
getUserFromGithub('diego3g124123');

class Github {
    static async getRepositories(repo) {
        try {
            let response = await axios.get(`https://api.github.com/repos/${repo}`)
            console.log(response.data)
        } catch {
            console.log('Repositório não existe');
        }
        
    }
}

Github.getRepositories('rocketseat/react-native-template-rocketseat-advanced');
Github.getRepositories('rocketseat/dslkvmskv');


const buscaUsuario = async usuario => {
    try {
        let response = await axios.get(`https://api.github.com/users/${usuario}`)
        console.log(response.data)
    }
    catch {
        console.log('Usuário não existe');
    }

}

buscaUsuario('diego3g');

const getRandomJoke = async () => {
    try {
        let response = await axios.get('https://official-joke-api.appspot.com/random_joke')
        console.log(response.data)
    } catch {
        console.log('Erro na api')
    }

}

getRandomJoke()

