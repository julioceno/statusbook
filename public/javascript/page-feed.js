const containerText = document.getElementById("post-text")
const containerImage = document.getElementById("post-image")

function toClearField() {
    containerText.value = ""
    containerImage.value = ""
}

function validate(event) {
    const errorPublih = document.getElementById('error-publish')
    if (!containerText.value && !containerImage.value){
     event.preventDefault()
     errorPublih.style.display = "block"
    }

}
