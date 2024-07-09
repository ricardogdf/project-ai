import axios from "axios";

export const handleUploadPDF = async (data) => {
  console.log('data', data)
  try {
    const response = await axios.post(
        'http://10.240.20.176:5000/upload_pdf', 
        data,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
    ).then(response => response.blob())
    .then(blob => {
      // Faça o download do arquivo processado
      const url = window.URL.createObjectURL(new Blob([blob]));
      const a = document.createElement('a');
      a.href = url;
      a.download = 'processed_output.docx';  // Nome do arquivo para download
      document.body.appendChild(a);
      a.click();
      a.remove();
    });
    
    console.log('Dados enviados com sucesso:', response.data);
    return response.data
  } catch (error) {
    console.error('Erro ao fazer a requisição:', error);
  }
};
export const handleMaskText = async (req) => {
    const { data } = await axios.post(
        'http://10.240.20.176:5000/mask_text', 
        req,
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
    );

    const normalizeValues = {
      text: data.masked_text,
      user_id: req.user_id
    }
     

    const response =  await axios.post(
      'http://10.240.20.176:5000/unmask_text', 
      normalizeValues,
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );

    return response.data.unmasked_text
};