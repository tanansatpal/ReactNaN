export function authHeader() {
    let user = JSON.parse(localStorage.user);

    if (user && user.token) {
        return {'Authorization': 'Bearer ' + user.token};
    } else {
        return {};
    }
}
