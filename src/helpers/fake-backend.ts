import {AxiosRequestConfig} from "axios";

const applyFilters = function (request: AxiosRequestConfig, data: any) {
    const newData = JSON.parse(JSON.stringify(data));
    let filters = request.params.q;
    if (!filters) {
        return newData;
    }
    const allRecords = newData.data;
    newData.data = allRecords.filter((record: any) => {
        let addRecord = true;
        for (const key in filters) {
            if (filters.hasOwnProperty(key)) {
                if (record[key] && Array.isArray(record[key])) {
                    if (!record[key].includes(filters[key])) {
                        addRecord = false;
                        break;
                    }
                } else if (record[key] !== filters[key]) {
                    addRecord = false;
                    break;
                }
            }
        }
        return addRecord;
    });
    return newData;
};

import {
    brandsResponse,
    collectionsResponse,
    orderResponse,
    productsResponse,
    slidesResponse,
    usersResponse,
    categoriesResponse
} from './mockdata';

import Api from './api';
import MockAdapter from 'axios-mock-adapter'

const mock = new MockAdapter(Api, {delayResponse: 500});

export function configureFakeBackend() {

    mock.onGet(/\/api\/v1\/slides$/).reply(200, slidesResponse);
    mock.onGet(/\/api\/v1\/brands$/).reply(200, brandsResponse);
    mock.onGet(/\/api\/v1\/collections$/).reply(200, collectionsResponse);
    mock.onGet(/\/api\/v1\/products$/).reply(200, productsResponse);
    mock.onGet(/\/api\/v1\/categories\/_\/getCategoryDetail$/).reply(function (config) {
        const categoryDetailResponse = applyFilters(config, categoriesResponse);
        categoryDetailResponse.data = categoryDetailResponse.data.shift();
        return [200, categoryDetailResponse];
    });

    mock.onPost(/\/login/).reply(function (config) {
        let body = JSON.parse(config.data);
        const users = usersResponse.data;
        const filteredUser = users
            .filter((user: any) => {
                return user.email === body.data.email && user.password === body.data.password;
            })
            .shift();

        if (filteredUser) {
            const body = {
                id: filteredUser._id,
                email: filteredUser.email,
                firstName: filteredUser.first_name,
                lastName: filteredUser.last_name,
                currency: {name: 'INR', conversion_rate: 1, decimal_points: 0},
                language: 'EN',
                role: 'member',
                token: 'fake-jwt-token'
            };
            return [200, body];
        } else return [401, null];
    })
}
