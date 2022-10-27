import { catchPosts, catchProfile, createPostRequisition, deletePostRequisition, editPostRequisition } from "./api.js"
let token = JSON.parse(localStorage.getItem("@petInfo"))

catchPosts(token)
catchProfile(token)

export function imageInsertDom(object) {
    const div = document.querySelector(".divImg")
    const header = document.querySelector("header")
    div.insertAdjacentHTML('beforeend', `<img class='img'src =${object.avatar}>`)
    div.id = object.id
    console.log(object)
    relative(object)
    header.insertAdjacentHTML('afterend', `<div class='div-logout hidden'>
    <h3>@${object.username}</h3>
    <button class='button-logout'>
    <img src='../../sign-out-alt.png'></img>
    Sair da conta
    </button>
    </div>`)
    const divLogOut = document.querySelector(".div-logout")
    const img = document.querySelector(".img")
    const button = document.querySelector(".button-logout")

    img.addEventListener("mouseover", () => {
        divLogOut.classList.remove("hidden")
        divLogOut.classList.add("divLogoutOpen")
        
    })

    button.addEventListener("mouseout", () => {
        divLogOut.classList.remove("divLogoutOpen")
        divLogOut.classList.add("hidden")
    })
    
    
            
        
    



    const buttonLogOut = document.querySelector(".button-logout")
    console.log(buttonLogOut)
    buttonLogOut.addEventListener("click", () => {

        localStorage.clear("@petInfo")
        window.location.replace("../login/index.html")
    })
}

/* function logOut(){
const buttonLogOut = document.querySelector(".button-logout")
console.log(buttonLogOut)
buttonLogOut.addEventListener("click",()=>{
    
    localStorage.clear("@petInfo")
    window.location.replace("../login/index.html")
})
}
logOut() */


function relative(object) {
    const divUser = document.querySelectorAll(".divUser")
    divUser.forEach((element) => {
        if (element.id !== object.id) {
            const divButtons = element.nextSibling
            divButtons.remove()
        }
    })
}

console.log("qlqrcoisa")
function createRenderPosts(object) {

    const tagLi = document.createElement("li")
    const divCard = document.createElement("div")
    const divUser = document.createElement("div")
    const tagImg = document.createElement("img")
    const tagName = document.createElement("h3")
    const tagSpace = document.createElement("p")
    const tagDate = document.createElement("p")
    const divButton = document.createElement("div")
    const buttonEdit = document.createElement("button")
    const buttonRemove = document.createElement("button")
    const tagTitle = document.createElement("h3")
    const tagPost = document.createElement("p")
    const tagAcess = document.createElement("button")

    divCard.classList.add("card-infos")
    divUser.classList.add("divUser")
    divUser.id = object.user.id
    divButton.classList.add("divButtons")
    tagImg.classList.add("img-card")
    tagImg.src = object.user.avatar
    tagName.classList.add("name-card")
    tagName.innerText = object.user.username
    tagSpace.classList.add("space")
    tagSpace.innerText = "|"
    tagDate.classList.add("date-card")
    let array = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
    let month = array[object.createdAt.slice(5, 7) - 1]
    let year = object.createdAt.slice(0, 4)
    tagDate.innerText = `${month} de ${year}`
    buttonEdit.classList.add("button-edit")
    buttonEdit.innerText = "Editar"
    buttonEdit.id = object.id
    buttonRemove.classList.add("button-remove")
    buttonRemove.innerText = "Excluir"
    buttonRemove.id = object.id
    tagTitle.classList.add("post-title")
    tagTitle.innerText = object.title
    tagPost.classList.add("post-text")

    if(object.content.length < 145){
        tagPost.innerText = object.content
    }else{
        tagPost.innerText = object.content.substring(0,144)+"..."
    }
    tagAcess.classList.add("post-acess")
    tagAcess.innerText = "Acessar publicação"
    tagAcess.id = object.id


    const modal = document.querySelector(".modaldiv")
    tagAcess.addEventListener("click", (event) => {
        modal.innerHTML = ""
        if (tagAcess.id == object.id) {
            modal.appendChild(modalPostView(object))
            modal.classList.remove("hidden")
        }
    })

    buttonEdit.addEventListener("click", (event) => {
        modal.innerHTML = ""
        if (buttonEdit.id == object.id) {
            modal.appendChild(createModalEdit(object))
            modal.classList.remove("hidden")
        }
    })

    const buttonCreate = document.querySelector(".button-create")
    buttonCreate.addEventListener("click", (event) => {
        modal.innerHTML = ""
        modal.appendChild(modalCreateNewPost(object))
        modal.classList.remove("hidden")
    })

    buttonRemove.addEventListener("click", (event) => {
        modal.innerHTML = ""
        if (buttonRemove.id == object.id) {
            modal.appendChild(modalConfirmRemove(object))
            modal.classList.remove("hidden")
        }
    })

    divButton.append(buttonEdit, buttonRemove)
    divUser.append(tagImg, tagName, tagSpace, tagDate)
    divCard.append(divUser, divButton)
    tagLi.append(divCard, tagTitle, tagPost, tagAcess)

    return tagLi
}


export function renderPost(array) {
    const ul = document.querySelector(".ul-post")
    ul.innerHTML = ""
    array.forEach((element) => {
        ul.appendChild(createRenderPosts(element))
    })
}

function modalPostView(object) {
    const divModal = document.createElement("div")
    const divArrumar = document.createElement("div")
    const divPost = document.createElement("div")
    const img = document.createElement("img")
    const name = document.createElement("h3")
    const space = document.createElement("p")
    const date = document.createElement("p")
    const divButton = document.createElement("div")
    const buttonClose = document.createElement("button")
    const title = document.createElement("h2")
    const post = document.createElement("p")

    divModal.classList.add("modal")
    divArrumar.classList.add("arruma-modal")
    divPost.classList.add("post-card")
    img.classList.add("img-card")
    img.src = object.user.avatar
    name.classList.add("name-card")
    name.innerText = object.user.username
    space.classList.add("space")
    space.innerText = "|"
    date.classList.add("date-card")
    date.innerText =
        buttonClose.classList.add("modal-close")
    buttonClose.innerText = "X"
    title.classList.add("post-title")
    title.innerText = object.title
    post.classList.add("post-text")
    post.innerText = object.content

    const modal = document.querySelector(".modaldiv")
    buttonClose.addEventListener("click", (event) => {
        modal.classList.add("hidden")
    })

    divButton.appendChild(buttonClose)
    divPost.append(img, name, space, date)
    divArrumar.append(divPost, divButton)
    divModal.append(divArrumar, title, post)

    return divModal
}


function openModalPost() {
    const tagAcess = document.querySelectorAll(".post-acess")
    tagAcess.forEach((element) => {
        console.log(element.id)
        element.addEventListener("click", (event) => {
            console.log(element)
        })
    })
}
openModalPost()


function createModalEdit(object) {

    const divModal = document.createElement("div")
    const divArrumar = document.createElement("div")
    const divPost = document.createElement("div")
    const edit = document.createElement("h3")
    const buttonClose = document.createElement("button")
    const title = document.createElement("h2")
    const inputTitle = document.createElement("input")
    const post = document.createElement("p")
    const inputPost = document.createElement("textarea")
    const divButton = document.createElement("div")
    const buttonCancel = document.createElement("button")
    const buttonSave = document.createElement("button")

    divModal.classList.add("modal")
    divArrumar.classList.add("modal-interno")
    divPost.classList.add("post")
    edit.innerText = "Edição"
    buttonClose.classList.add("modal-close")
    buttonClose.innerText = "X"
    title.innerText = "Título do post"
    inputTitle.value = object.title
    post.classList.add("post-text")
    post.innerText = "Conteúdo do post"
    inputPost.value = object.content
    inputPost.classList.add("inputPost")
    divButton.classList.add("divButton")
    buttonCancel.innerText = "Cancelar"
    buttonCancel.classList.add("buttonCancel")
    buttonSave.innerText = "Salvar Alterações"
    buttonSave.classList.add("buttonSave")

    buttonSave.addEventListener("click", async (event) => {
        event.preventDefault()
        const data = {
            "title": inputTitle.value,
            "content": inputPost.value
        }
        editPostRequisition(token, data, object.id)
    })

    const modal = document.querySelector(".modaldiv")
    buttonClose.addEventListener("click", (event) => {
        modal.classList.add("hidden")
    })
    buttonCancel.addEventListener("click", () => {
        modal.classList.add("hidden")
    })

    divPost.append(edit, buttonClose)
    divArrumar.append(divPost, title, inputTitle, post, inputPost, divButton)
    divButton.append(buttonCancel, buttonSave)
    divModal.append(divArrumar, divButton)

    return divModal
}


function modalCreateNewPost(object) {

    const divModal = document.createElement("div")
    const divArrumar = document.createElement("div")
    const divPost = document.createElement("div")
    const edit = document.createElement("h3")
    const buttonClose = document.createElement("button")
    const title = document.createElement("h2")
    const inputTitle = document.createElement("input")
    const post = document.createElement("p")
    const inputPost = document.createElement("input")
    const divButton = document.createElement("div")
    const buttonCancel = document.createElement("button")
    const buttonSave = document.createElement("button")

    divModal.classList.add("modal")
    divArrumar.classList.add("modal-interno")
    divPost.classList.add("post")
    edit.innerText = "Edição"
    buttonClose.classList.add("modal-close")
    buttonClose.innerText = "X"
    title.innerText = "Título do post"
    inputTitle.classList.add("inputTitle")
    inputTitle.type = "textarea"
    inputTitle.placeholder = "Digite o título aqui..."
    post.classList.add("post-text")
    post.innerText = "Conteúdo do post"
    inputPost.classList.add("inputText")
    inputPost.type = "textarea"
    inputPost.placeholder = "Desenvolva o conteúdo do post aqui..."
    inputPost.classList.add("inputPost")
    divButton.classList.add("divButton")
    buttonCancel.innerText = "Cancelar"
    buttonCancel.classList.add("buttonCancel")
    buttonSave.innerText = "Publicar"
    buttonSave.classList.add("buttonPublic")

    buttonSave.addEventListener("click", async (event) => {
        event.preventDefault()
        const data = {
            "title": inputTitle.value,
            "content": inputPost.value
        }
        createPostRequisition(token, data)
    })

    const modal = document.querySelector(".modaldiv")
    buttonClose.addEventListener("click", (event) => {
        modal.classList.add("hidden")
    })

    buttonCancel.addEventListener("click", () => {
        modal.classList.add("hidden")
    })

    divPost.append(edit, buttonClose)
    divArrumar.append(divPost, title, inputTitle, post, inputPost, divButton)
    divButton.append(buttonCancel, buttonSave)
    divModal.append(divArrumar, divButton)

    return divModal
}

function modalConfirmRemove(object) {

    const divModal = document.createElement("div")
    const divArrumar = document.createElement("div")
    const divPost = document.createElement("div")
    const confirm = document.createElement("h3")
    const buttonClose = document.createElement("button")
    const title = document.createElement("h2")
    const post = document.createElement("p")
    const divButton = document.createElement("div")
    const buttonCancel = document.createElement("button")
    const buttonSave = document.createElement("button")

    divModal.classList.add("modalRemove")
    divArrumar.classList.add("modal-interno")
    divArrumar.classList.add("modalREmove")
    divPost.classList.add("post")
    confirm.innerText = "Confirmação de exclusão"
    buttonClose.classList.add("modal-close")
    buttonClose.innerText = "X"
    title.innerText = "Tem certeza que deseja excluir este post?"
    post.classList.add("post-text")
    post.innerText = "Essa ação não poderá ser desfeita, então pedimos que tenha cautela antes de concluir"
    divButton.classList.add("divButtonRemove")
    buttonCancel.innerText = "Cancelar"
    buttonCancel.classList.add("buttonCancel")
    buttonSave.innerText = "Sim, excluir este post"
    buttonSave.classList.add("buttonSure")

    const modalDivão = document.querySelector(".modaldiv")
    buttonSave.addEventListener("click", async (event) => {
        event.preventDefault()
        deletePostRequisition(token, object.id)
        modalDivão.remove()

    })

    const modal = document.querySelector(".modaldiv")
    buttonClose.addEventListener("click", (event) => {
        modal.classList.add("hidden")
    })
    buttonCancel.addEventListener("click", () => {
        modal.classList.add("hidden")
    })

    divPost.append(confirm, buttonClose)
    divArrumar.append(divPost, title, post, divButton)
    divButton.append(buttonCancel, buttonSave)
    divModal.append(divArrumar, divButton)

    return divModal

}

