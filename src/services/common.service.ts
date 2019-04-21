function handleResponse(response: Response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                location.reload();
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}

function requestOptions() {
    return {
        headers: {'Content-Type': 'application/json'},
    }
}

export const commonService = {
    handleResponse,
    requestOptions
};
