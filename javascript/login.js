const labelEmail = document.getElementById("labelEmail")
const labelPassword = document.getElementById("labelPassword")

function clickEmail() {
    labelEmail.style.color= "#93b3e4"
}

function clickEmailOver() {
    labelEmail.style.color= "#c1c1c1"
}

function clickPassword() {
    labelPassword.style.color= "#93b3e4"
}

function clickPasswordOver() {
    labelPassword.style.color= "#c1c1c1"
}

const showPassword = document.getElementById("showPassword")

function showHiddenPassword() {
    const inputPassword = document.getElementById("inputPassword")

    if (inputPassword.type == "password") inputPassword.type = "text"
    else inputPassword.type = "password"
}