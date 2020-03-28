const ApiService = {
    EnglishTitles: () => {
        return fetch('https://ghibliapi.herokuapp.com/films/')
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