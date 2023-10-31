export default class UsersAPI {
    static getAllUsers() {
        const users = JSON.parse(localStorage.getItem("notesapp-users") || "[]")

        return users
    }
    static login(userToLogin) {
        const users = UsersAPI.getAllUsers()
        const existing = users.find(user => user.username == userToLogin.username && user.password == userToLogin.password);
        
        if (existing) {
            localStorage.setItem("notesapp-active", JSON.stringify(existing))
        }
        return existing
    }
    static register(userToRegister) {
        const users = UsersAPI.getAllUsers()
        const existing = users.find(user => user.username == userToRegister.username)

        if (existing){
            return false
        }
        else {
            userToRegister.id = Math.floor(Math.random() * 1000000)
            users.push(userToRegister)

            localStorage.setItem("notesapp-active", JSON.stringify(userToRegister))

            localStorage.setItem("notesapp-users", JSON.stringify(users))
            return true
        }
    }
    static logout(){
        localStorage.removeItem("notesapp-active")
    }
    static saveUser(userToSave) {
        const users = UsersAPI.getAllUsers()
        const existing = users.find(user => user.id = userToSave.id)
        if (existing) {
            existing.username = userToSave.username
            existing.password = userToSave.password
        }

        localStorage.setItem("notesapp-users", JSON.stringify(users))
    }
    
}