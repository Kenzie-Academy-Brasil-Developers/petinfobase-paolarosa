
export async function login() {
    console.log("oi")
    const buttonRegister = document.querySelector(".button-acess")
    let inputEmail = document.getElementById("email")
    let inputPassword = document.getElementById("password")
    let wrongPassword = document.querySelector(".wrong-password")
    const buttonAcess = document.querySelector(".button-acess")

    buttonRegister.addEventListener("click", async (event) => {
        event.preventDefault()
        const data = {
            "email": inputEmail.value,
            "password": inputPassword.value
        }
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        }

        const responseJSON = await fetch(`http://localhost:3333/login`, options)
            .then((response) => {
                console.log(response)
                if (response.ok == true) {
                    buttonAcess.classList.add("loading")
                    window.location.replace("../home/index.html")
                } else {
                    wrongPassword.classList.remove("hidden")
                    setTimeout(() => {
                        window.location.reload()
                    }, 2000)
                }
                return response
            }
            )
            .then((response) =>
                response.json()
            )
            .then((response) => {
                console.log(response)
                localStorage.setItem("@petInfo", JSON.stringify(response.token))
            })
    }
    )
}


