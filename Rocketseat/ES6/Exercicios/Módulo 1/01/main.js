class Usuario {
    constructor(email, senha){
        this.email = email
        this.senha = senha
    }

    isAdmin(){
        return false
    }
}

class Admin extends Usuario {
    constructor(){
        super()
    }

    isAdmin(){
        return true
    }
}

const User1 = new Usuario('luan.gomes.sp@gmail.com', '123')
const Admin1 = new Admin('luan.gomes.sp@gmail.com', '123')

console.log(User1.isAdmin())
console.log(Admin1.isAdmin())