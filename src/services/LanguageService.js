import axios from 'axios';

const LANGUAGE_API_BASE_URL = "http://localhost:8080/api/languages";

class LanguageService {
    getLanguages() {
        return axios.get(LANGUAGE_API_BASE_URL);
    }

    createLanguage(language) {
        return axios.post(LANGUAGE_API_BASE_URL, language);
    }

    getLanguageById(languageId) {
        return axios.get(LANGUAGE_API_BASE_URL + '/' + languageId);
    }

    updateLanguageById(language, languageId) {
        return axios.put(LANGUAGE_API_BASE_URL + '/' + language, languageId);
    }

    deleteLanguageById(languageId) {
        return axios.delete(LANGUAGE_API_BASE_URL + '/' + languageId);
    }
}

export default new LanguageService();