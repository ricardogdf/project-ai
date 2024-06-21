import axios from "axios";

export const handleUploadPDF = async (data) => {
    try {
      const response = await axios.post(
          'http://10.240.20.176:5000/upload_pdf', 
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