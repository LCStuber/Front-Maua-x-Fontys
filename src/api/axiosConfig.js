import axios from 'axios';

export default axios.create({
    baseURL: 'https://back.lcstuber.net',
    headers: {
        'Content-type': 'application/json'
    },
});