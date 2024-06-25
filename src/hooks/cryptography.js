import axios from 'axios';

export const handleCryptography = async () => {
  try {
    return await axios.get(
        'http://10.240.20.176:8080/DataMask/webresources/api/Pattern/Listar', 
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
    );
  } catch (error) {
    return error
  }
};

export const handleAddCryptography = async (data) => {
  try {
    const response = await axios.post(
        'http://10.240.20.176:8080/DataMask/webresources/api/Pattern/Inserir', 
        data,
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