import { registerUser } from "./api.js"

registerUser()

export function checkInput() {
    const divSucess = document.querySelector(".div-sucessful")
    const inputs = document.querySelectorAll(".input")
    const buttonRegister = document.querySelector(".button-register")
    console.log(inputs)

    inputs.forEach((element) => {
        buttonRegister.addEventListener("click", (event) => {
            event.preventDefault()
            if (element.value == false) {
                buttonRegister.disabled = true
                divSucess.classList.add("hidden")
                buttonRegister.classList.remove("loading")
                window.location.reload()
            }
            else {
                buttonRegister.disabled = false
                divSucess.classList.remove("hidden")
                buttonRegister.classList.add("loading")
            }console.log(buttonRegister.disabled)
        })
    }) 

}
checkInput()

/* const toast = (type,title, message) =>{
    const body = document.querySelector("body")
    const divSucessful = document.createElement("div")
    const icon = document.createElement("img")

    if(type == "Sucesso"){
        divSucessful.classList.add("div-sucessful")
        icon.src = "../../img-register.png"
    }

    const div = document.createElement("div")
    const h3 = document.createElement("h3")
    h3.innerText = title
    const p = document.createElement("p")
    p.innerText = message
    div.append(icon,h3)
    divSucessful.append(div,p)
    body.appendChild(divSucessful)

} */