class API {
    constructor({ baseUrl }) {
        this._url = baseUrl;
    }

    getCharacter(input) {
        return fetch(`${this._url}/people/?search=${input}`, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((response) => {
                return this._checkResponse(response);
            });
    }

    getInfo(input) {
        return fetch(input, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((response) => {
                return this._checkResponse(response);
            });
    }

    _checkResponse(res) {
        if (res.ok) {
            return res.json()
        }
        else {
            return Promise.reject(`Error: ${res.status}`)
        }
    }
}

const api = new API({
    baseUrl: "https://swapi.py4e.com/api"
});

export default api;