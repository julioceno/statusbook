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
    const checkbox = document.querySelector(".showPassword small")

    if (inputPassword.type == "password"){
         inputPassword.type = "text"
         checkbox.style.color = '#000000'
    }
    else {
        inputPassword.type = "password"
        checkbox.style.color = 'var(--color-grey)'
    }

}


(function() {
    const url = (window.location.href).split('?')[1]
    if (url === "message=emailousenhaincorreto") { 
        document.querySelector('#login .login-error small').style.display = 'block'
    }
})()

