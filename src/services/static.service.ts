import API from '../helpers/api';

function getBrands(filters: any = null) {
    return API.get('brands')
        .then(response => {
            return response.data.data;
        });
}

function getSlides(filters: any = null) {
    return API.get('slides')
        .then(response => {
            return response.data.data;
        });
}

export const staticService = {
    getBrands,
    getSlides
};
