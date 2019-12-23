axios.get("https://api.github.com/users/lgdev07")
    .then((response) => {
        console.log(response.data)
    })
    .catch((error) => {
        console.log(error)
    })