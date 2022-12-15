class userService{
    constructor(UserModel){
        this.user = UserModel
    }

    async get(){
        const users = await this.user.findAll()
        return users
    }

    async add(userDTO){
        // Colocar as regras de négocio
        // Ex: Verificare já existe
        await this.user.create(userDTO)
    }
}

module.exports = userService