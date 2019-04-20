import {API_URL} from "../constant";

export const userService = {
    login,
    logout
};

function login(data: { email: string, password: string }) {
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({data: data})
    };

    return fetch(`${API_URL}login`, requestOptions)
        .then(handleResponse)
        .then(response => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('token', response.data.token);
            return response.data;
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
