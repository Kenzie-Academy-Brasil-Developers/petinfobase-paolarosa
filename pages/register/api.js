import { checkInput } from "./index.js"

export function registerUser() {
    const divSucess = document.querySelector(".div-sucessful")
    const buttonRegister = document.querySelector(".button-register")
    let inputUser = document.getElementById("username")
    let inputEmail = document.getElementById("email")
    let inputImg = document.getElementById("avatar")
    let inputPassword = document.getElementById("password")
    
    buttonRegister.addEventListener("click", async (event) => {
        const data = {
            "username": inputUser.value,
            "email": inputEmail.value,
            "password": inputPassword.value,
            "avatar": inputImg.value
        }
        checkInput()
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }
        
        const responseJSON = await fetch('http://localhost:3333/users/create', options)
            .then((response) => response.json())
            .then((response) => {
                if(response.id){
                    divSucess.classList.remove("hidden")
                    setTimeout(() => {
                        window.location.replace("../login/index.html")
                    }, 3000)
                    console.log(response)
                }
            })
            .catch((err) =>{
                console.log(err)
            }) 
    })

}