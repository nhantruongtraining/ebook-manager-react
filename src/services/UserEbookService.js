import axios from 'axios';

const USEREBOOK_API_BASE_URL = "http://localhost:8080/api/userebooks";

class UserEbookService {
    getUserEbooks() {
        // console.log(axios.get(USEREBOOK_API_BASE_URL))
        return axios.get(USEREBOOK_API_BASE_URL);
    }

    createUserEbook(userEbook) {
        return axios.post(USEREBOOK_API_BASE_URL, userEbook);
    }

    getUserEbookById(userEbookId) {
        return axios.get(USEREBOOK_API_BASE_URL + '/' + userEbookId);
    }

    updateUserEbook(userEbook, userEbookId) {
        return axios.put(USEREBOOK_API_BASE_URL + '/' + userEbookId, userEbook);
    }

    deleteUserEbook(userEbookId) {
        return axios.delete(USEREBOOK_API_BASE_URL + '/' + userEbookId);
    }
}

export default new UserEbookService();