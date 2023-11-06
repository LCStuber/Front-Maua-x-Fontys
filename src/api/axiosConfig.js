import axios from 'axios';

export default axios.create({
    baseURL: 'https://localhost:3001',
    headers: {
        'Content-type': 'application/json'
    },
});