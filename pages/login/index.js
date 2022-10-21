import { login } from "./api.js"

login()

function checkInputButtonDisabled() {
    const inputs = document.querySelectorAll(".input")
    const buttonAcess = document.querySelector(".button-acess")
    inputs.forEach((element) => {
        buttonAcess.addEventListener("click", (event) => {
            event.preventDefault()
            if (element.value == false) {
                buttonAcess.disabled = true
            }
            else {
                buttonAcess.disabled = false
            }
        })
    })
}
checkInputButtonDisabled()



