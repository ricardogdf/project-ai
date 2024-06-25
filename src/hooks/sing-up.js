import axios from 'axios';

export const handleSingUp = async (data) => {

  try {
    const response = await axios.post(
      'http://10.240.20.176:8080/DataMask/webresources/api/Usuario/Inserir', 
      {
        nomecliente: data.name,
        sobrenome: data.surname,
        email: data.email,
        senha: data.password,
      },
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
    console.log('Dados enviados com sucesso:', response.data);
    return response.data
  } catch (error) {
    console.error('Erro ao fazer a requisição:', error);
  }
};
