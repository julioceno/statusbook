function openMenu() {
    const checkbox = document.getElementById("hamburguer")
    const sideBar = document.getElementById('side-bar')
    
    if(checkbox.checked)  {
        sideBar.style.display = "block"
    } else {
        sideBar.style.display = "none"
    }
}