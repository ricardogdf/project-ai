import axios from 'axios';

export const handleLogin = async (data) => {
  try {
    return await axios.post(
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
  } catch (error) {
    return error;
  }
};