import UsersAPI from "../api/UsersAPI.js"

const username = document.querySelector("#username")
const password = document.querySelector("#password")
const againPassword = document.querySelector("#again-password")

const btn = document.querySelector("#btn")
btn.addEventListener("click", (e) => {
    e.preventDefault();
    
    const valUsername = username.value
    const valPassword = password.value
    const valAgainPassword = againPassword.value
    if (valUsername && valPassword && valAgainPassword) {
        if (valPassword == valAgainPassword) {
            const newUser = {
                username: valUsername,
                password: valPassword
            }
            const existing = UsersAPI.register(newUser)
            if (existing) {
                window.location.href="./notes.html";
            } else {
                alert("Tên người dùng đã tồn tại")
            }
        }else {
            alert('Mật khẩu và mật khẩu nhập lại phải trùng giá trị');
        }
    }else {
        alert("Vui lòng nhập đầy đủ các giá trị trong form")
    }
})