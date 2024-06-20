import axios from 'axios';

export const handleCryptography = async () => {
  try {
    const response = await axios.get(
        'http://srv-apidtm:8080/DataMask/webresources/api/Pattern/Listar', 
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

export const handleAddCryptography = async (data) => {
  try {
    const response = await axios.post(
        'http://srv-apidtm:8080/DataMask/webresources/api/Pattern/Inserir', 
        data,
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