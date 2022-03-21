import axios from 'axios';

const apiUrl = axios.create({
    baseURL: 'https://viacep.com.br/ws/'
});

export default apiUrl;