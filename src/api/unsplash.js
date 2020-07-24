import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 3UyTKoJRkwq61tdYYLgB1C7HNwMFukTAxf4y3KVcobM'
    }
});