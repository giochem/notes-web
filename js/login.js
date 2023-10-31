import UsersAPI from "../api/UsersAPI.js"

const username = document.querySelector("#username")
const password = document.querySelector("#password")

const btn = document.querySelector("#btn")
btn.addEventListener("click", (e) => {
    e.preventDefault();

    const valUsername = username.value
    const valPassword = password.value
    if (valUsername && valPassword ) {
        const user = {
            username: valUsername,
            password: valPassword
        } 
        const existing = UsersAPI.login(user)
        if (existing) {
            window.location.href="./notes.html";
        } else {
            alert("Tên người dùng hoặc mật khẩu không chính xác");
        }
    }else {
        alert("Vui lòng nhập đầy đủ các giá trị trong form")
    }
})