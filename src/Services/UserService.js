import axios from 'axios'

const USERS_REST_API_URL = 'http://localhost:8081/users/login';

const UserService = {
    checkLogin: async() =>{
        return await axios.post(USERS_REST_API_URL);
    },

    getAnswer: async() =>{
        return await axios.get(`http://localhost:8081/users/getUser`);
    },
}

export default UserService;