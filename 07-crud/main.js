'use strict'

const openModal = () => document.getElementById('modal')
    .classList.add('active')

const closeModal = () => document.getElementById('modal')
    .classList.remove('active')

const tempClient = {
    nome: "Rafael",
    email: "rafael@gmail.com",
    celular: "19292922",
    cidade: "TATUI"
}


// CRUD - create read update delet
const createClient = (client) => {
    localStorage.setItem("db_client", JSON.stringify(client))
}

// eventos
document.getElementById('cadastrarCliente')
    .addEventListener('click', openModal)

document.getElementById('modalClose')
    .addEventListener('click', closeModal)