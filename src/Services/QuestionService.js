import axios from 'axios'

const USERS_REST_API_URL = 'http://localhost:8080/question/getAllQuestions';

const QuestionService = {
    getQuestions: async() =>{
        return await axios.get(USERS_REST_API_URL);
    },

    getAnswer: async(id) =>{
        return await axios.get(`http://localhost:8080/question/getAllQuestionByContentID/${id}`);
    },
}

export default QuestionService; 