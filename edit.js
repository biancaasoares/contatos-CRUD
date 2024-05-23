import {getContato, updateContato} from "./funcoes.js"
const idContato = new URLSearchParams(window.location.search).get('idContato');
const infoContato = await getContato(idContato)
console.log(infoContato)

const campoNome = document.getElementById('nome')
const campoEmail = document.getElementById('email');
const campoFoto = document.getElementById('foto');
const campoTelefone = document.getElementById('telefone');
const campoEndereco = document.getElementById('endereco');

campoNome.value = infoContato.nome
campoEmail.value = infoContato.email
campoFoto.value = infoContato.foto
campoEndereco.value = infoContato.endereco
campoTelefone.value = infoContato.celular

const botaoSalvar = document.querySelector('button')
botaoSalvar.addEventListener('click',async ()=>{
    const dados = {
        nome: campoNome.value,
        email: campoEmail.value,
        foto: campoFoto.value,
        celular: campoTelefone.value,
        endereco: campoEndereco.value
    }
    const result = await updateContato(idContato, dados)
    if(result.success){
        window.location.href='./index.html'
    } else {
        alert('Ocorreu um erro!')
    }
})