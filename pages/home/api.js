import { imageInsertDom, renderPost } from "./index.js"

let token = JSON.parse(localStorage.getItem("@petInfo")) || ""
if(!token){
    window.location.replace("../login/index.html")
}

export async function catchPosts(token) {
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
    }
    const responseJSON = await fetch('http://localhost:3333/posts', options)
    const response = await responseJSON.json()
    renderPost(response)
}


export async function catchProfile(token) {
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
    }
    const responseJSON = await fetch('http://localhost:3333/users/profile', options)
    const response = await responseJSON.json()
    imageInsertDom(response)
}


export async function createPostRequisition(token,data) {
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(data)
    }

    const responseJSON = await fetch('http://localhost:3333/posts/create', options)
        .then((response) => response.json())
        .then((response) => {
            window.location.replace("../home/index.html")
            console.log(response)
        })
        .catch((err) => {
            console.log(err)
        })
        return responseJSON
}


export async function editPostRequisition(token,data,id) {
    const options = {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(data)
    }

    const responseJSON = await fetch(`http://localhost:3333/posts/${id}`, options)
        .then((response) => response.json())
        .then((response) => {
            window.location.replace("../home/index.html")
            console.log(response)
        })
        .catch((err) => {
            console.log(err)
        })
        return responseJSON
}


export async function deletePostRequisition(token,id) {
    let sucess = document.querySelector(".div-sucessful")
    const options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
    }

    const responseJSON = await fetch(`http://localhost:3333/posts/${id}`, options)
        .then((response) => response.json())
        .then((response) => {
           
           setTimeout(() => {
            window.location.reload()
        }, 3000)
            sucess.classList.remove("hidden")
            console.log(response)
        })
        .catch((err) => {
            console.log(err)
        })
        return responseJSON
}

