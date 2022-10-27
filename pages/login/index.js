import { login } from "./api.js"

login()


export function checkInput() {
    const inputs = document.querySelectorAll(".input")
    const buttonRegister = document.querySelector(".button-acess")
    
    console.log(inputs)
    if(inputs[0].value == "" || inputs[1].value == ""){
        buttonRegister.disabled = true
    }else{buttonRegister.disabled = false}
}

document.addEventListener("keyup",()=>{
    checkInput()
}) 

