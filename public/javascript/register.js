// Verificando se a senha já foi usada

window.onhashchange = function(e) {
    const url = e.split('#')[1]

    console.log(url)

}


const labelName = document.getElementById("labelName")
const labelNickName = document.getElementById("labelNickName")
const labelEmail = document.getElementById("labelEmail")
const labelPassword = document.getElementById("labelPassword")
const labelConfirmPassword = document.getElementById("labelConfirmPassword")



function clickName() {
    labelName.style.color= "#93b3e4"
}

function clickNameOver() {
    labelName.style.color= "#c1c1c1"
}

function clickNickName() {
    labelNickName.style.color= "#93b3e4"
}

function clickNickNameOver() {
    labelNickName.style.color= "#c1c1c1"
}

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

function clickConfirmPassword() {
    labelConfirmPassword.style.color= "#93b3e4"

    inputConfirmPassword.style.border = "2px dashed #93b3e4"

}
function clickConfirmPasswordOver() {
    labelConfirmPassword.style.color= "#c1c1c1"
    inputConfirmPassword.style.border= "1px solid var(--color-grey)"

}

const inputConfirmPassword = document.getElementById("inputConfirmPassword")
const inputPassword = document.getElementById("inputPassword")

function validate(event) {

    if (inputPassword.value !== inputConfirmPassword.value) {
        event.preventDefault()
        
        labelConfirmPassword.style.color = "var(--color-red)"
        inputConfirmPassword.style.border ="2px dashed var(--color-red)"
    
    }

    if(window.location.hash) {
        alert('Existe')
      } 
    
}

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

function showHiddenConfirmPassword() {
    const inputPassword = document.getElementById("inputConfirmPassword")
    const checkbox = document.querySelector(".showConfirmPassword small")

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
    if (url === "message=senhaemuso") { 
        document.querySelector('#register .register-error small').style.display = 'block'
    }
})()


