import API from '../helpers/api';

function getProducts(filters: any = null) {
    return API.get('products')
        .then(response => {
            return response.data.data;
        });
}

function getCategory(name: string) {
    return API.get('categories/_/getCategoryDetail', {params: {q: {alias: name}}})
        .then(response => {
            return response.data.data;
        });
}

export const productService = {
    getProducts,
    getCategory
};
