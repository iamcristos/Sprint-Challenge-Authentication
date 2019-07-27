import axios from 'axios';

export default function axiosInstance(token) {
    return axios.create({
        baseURL: 'http://localhost:4000/api/',
        headers: {
            'Authorization': token
        }
    })
};