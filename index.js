import {getContatos, getContato, deleteContato, updateContato} from "./funcoes.js"
const listaContatos = await getContatos()

// console.log(listaContatos);
// console.log(await getContato(2));

function criarCardContato(info){
    const container = document.getElementById('container')
    const contato = document.createElement('div')
    const nome = document.createElement('p')
    nome.textContent = info.nome
    const celular = document.createElement('p')
    celular.textContent = info.celular
    const foto = document.createElement('p')
    foto.textContent = info.foto
    const email = document.createElement('p')
    email.textContent = info.email
    const endereco = document.createElement('p')
    endereco.textContent = info.endereco
    const cidade = document.createElement('p')
    cidade.textContent = info.cidade
    const divIcons = document.createElement('div') 
    const botaoExcluir = document.createElement('img')
    botaoExcluir.src = 'https://static-00.iconduck.com/assets.00/trash-icon-462x512-njvey5nf.png'
    const botaoEditar = document.createElement('img')
    botaoEditar.src = 'https://static-00.iconduck.com/assets.00/pencil-icon-2048x2048-b2kyfub6.png'
    divIcons.replaceChildren(botaoExcluir,botaoEditar)
    contato.replaceChildren(nome, celular, email,foto, endereco, cidade, divIcons)
    container.appendChild(contato)

    console.log(info.id)
    botaoExcluir.addEventListener('click', async ()=>{
        const result = await deleteContato(info.id)
        console.log(result);
        if(result){
            window.location.reload()
        } else {
            alert('Ocorreu um erro!')
        }
        
    })
}


listaContatos.forEach(contato => {
    criarCardContato(contato)
});