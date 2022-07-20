import axios from 'axios';

const EBOOK_API_BASE_URL = "http://localhost:8080/api/ebooks";

class EbookService {
    getEbooks() {
        // console.log(axios.get(EBOOK_API_BASE_URL))
        return axios.get(EBOOK_API_BASE_URL);
    }

    createEbook(ebook) {
        return axios.post(EBOOK_API_BASE_URL, ebook);
    }

    getEbookById(ebookId) {
        return axios.get(EBOOK_API_BASE_URL + '/' + ebookId);
    }

    updateEbook(ebook, ebookId) {
        return axios.put(EBOOK_API_BASE_URL + '/' + ebookId, ebook);
    }

    deleteEbook(ebookId) {
        return axios.delete(EBOOK_API_BASE_URL + '/' + ebookId);
    }
}

export default new EbookService();