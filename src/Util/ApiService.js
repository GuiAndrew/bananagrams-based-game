const ApiService = {
    TitlesList: () => {
        return fetch('http://localhost:8000/api/titles')
                .then(res => ApiService.ErrorHandler(res))
                .then(res => res.json());
    },
    EnglishTitles: () => {
        return fetch('http://localhost:8000/api/titles/english')
                .then(res => ApiService.ErrorHandler(res))
                .then(res => res.json());
    },
    ErrorHandler: res => {
        if (!res.ok) {
            throw Error(res.responseText);
        }
        return res;
    }
}

export default ApiService;