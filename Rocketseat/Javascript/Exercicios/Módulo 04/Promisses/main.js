let minhaPromisse = () => {
    return new Promise((resolve, reject) =>{
        let xhr = new XMLHttpRequest();
        xhr.open("GET", "https://api.github.com/users/lgdev07")
        xhr.send(null)

        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status == 200) {
                    resolve(JSON.parse(xhr.responseText))
                } else {
                     reject("Erro na requisição")
                }
            }
        }
    })
}

minhaPromisse()
    .then((response) => {
        console.log(response)
    })
    .catch((error) => {
        console.log(error)
    })