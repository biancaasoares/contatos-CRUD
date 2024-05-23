const link = 'https://bakcend-fecaf-render.onrender.com' // https://bakcend-fecaf-render.onrender.com/contatos
export async function getContatos(){
    const url = link+"/contatos"
    const response = await fetch(url)
    const data = await response.json()
    return data
}

export async function getContato(id){
    const url = link+"/contatos/"+id
    const response = await fetch(url)
    const data = await response.json()
    return data
}

export async function postContato(dados) {
    const url = `${link}/contatos`;
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dados),
    };
    try {
      const response = await fetch(url, options);
      const data = await response.json(); 
      return { success: response.ok, data }; 
    } catch (error) {
      console.error('Erro ao enviar contato: ', error);
      return { success: false, data: null }; 
    }
}

export async function deleteContato(id){
    const url = `${link}/contatos/${id}`;

    const options = {
      method: 'DELETE'
    };
    
    try{
      const response = await fetch(url,options)
      if(response.ok){
        console.log('Contato excluído com sucesso')
        return response.ok
      } else {
        console.error('Erro ao excluir contato: ', error);
      }
    } catch (error) {
      console.error('Erro ao excluir contato: ', error);
    }
  }

  export async function updateContato(id, dados) {
    const url = `${link}/contatos/${id}`
    const options = {
      method: 'PUT', 
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(dados)
    }
    try {
        const response = await fetch(url,options)
        const data = await response.json();
        return { success: response.ok, data }; 
    } catch (error) {
        console.error('Ocorreu um erro ao substituir os dados do contato: ', error);
        return { success: false, data: null }; 
    }
  }