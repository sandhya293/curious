import axios from 'axios'

const TagService = {

    getAnswer: async(tag_id) =>{
        return await axios.get(`http://localhost:8080/articles/getArticleByTag/${tag_id}`);
    },
}

export default TagService; 