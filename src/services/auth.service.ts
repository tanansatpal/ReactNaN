import {API_URL} from "../constant";
import API from "../helpers/api";

export const userService = {
    login,
    logout
};

function login(data: { email: string, password: string }) {
    return API.post('login', {data}, {headers: {'Content-Type': 'application/json'}})
        .then(response => {
            console.log(response);
            localStorage.setItem('token', response.data.token);
            return response.data.data;
        });
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}


/*function register(user) {
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(user)
    };

    return fetch(`/users/register`, requestOptions).then(handleResponse);
}*/

function handleResponse(response: Response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                location.reload();
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}
