import axios from 'axios';

class PostService {
    async fetch() {
        return (await axios.get('https://jsonplaceholder.typicode.com/posts')).data;
    }
}

export default new PostService();