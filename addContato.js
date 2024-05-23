import { postContato } from "./funcoes.js"


    const nomeCampo = document.getElementById('nome')
    const emailCampo = document.getElementById('email')
    const fotoCampo = document.getElementById('foto')
    const telefoneCampo = document.getElementById('telefone')
    const enderecoCampo = document.getElementById('endereco')

document.getElementById('enviarButton').addEventListener('click',async ()=>{
    const dados = {
        nome: nomeCampo.value,
        email: emailCampo.value,
        foto: fotoCampo.value,
        telefone: telefoneCampo.value,
        endereco: enderecoCampo.value
    }
    console.log(dados);
    
const result = await postContato(dados)
if(result.success){
    window.location.href='./index.html'
} else {
    alert('Ocorreu um erro!')
}
})