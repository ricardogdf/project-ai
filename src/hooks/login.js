import axios from 'axios';

export const handleLogin = async (data) => {
  try {
    const response = await axios.post(
        'http://10.240.20.176:8080/DataMask/webresources/api/Usuario/ValidaLogin', 
        {
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
  } catch (error) {
    console.error('Erro ao fazer a requisição:', error);
  }
};