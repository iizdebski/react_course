import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-app-15138.firebaseio.com/'
});

export default instance;