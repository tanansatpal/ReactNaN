import API from '../helpers/api';

function getBrands(filters: any = null) {
    return API.get('brands')
        .then(response => {
            console.log(response);
            return response.data;
        });
}

export const staticService = {
    getBrands
};
