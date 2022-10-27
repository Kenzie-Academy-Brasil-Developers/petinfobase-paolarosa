import { registerUser } from "./api.js"

registerUser()


export function checkInput() {
    const divSucess = document.querySelector(".div-sucessful")
    const inputs = document.querySelectorAll(".input")
    const buttonRegister = document.querySelector(".button-register")
    
    console.log(inputs[1].value == "")
    if(inputs[0].value == "" || inputs[1].value == "" || inputs[2].value == "" || inputs[3].value == ""){
        buttonRegister.disabled = true
    }else{buttonRegister.disabled = false}
}

document.addEventListener("keyup",()=>{
    checkInput()
}) 



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