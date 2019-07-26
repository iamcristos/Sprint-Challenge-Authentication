import axios from 'axios';

export default function axiosInstance(token) {
    return axios.create({
        baseURL: 'http//:localhost:3300/api/user',
        headers: {
            'Authorization': token
        }
    })
};