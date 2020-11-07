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
}
