import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://zaf-tinder-backend.herokuapp.com'
})

export default instance;