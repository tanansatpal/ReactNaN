const applyFilters = function (request = null, data: any) {
    const newData = JSON.parse(JSON.stringify(data));
    // let filters = request.params.get('q');
    // if (!filters) {
    //     return newData;
    // }
    // filters = JSON.parse(filters);
    // const allRecords = newData.data;
    // newData.data = allRecords.filter(record => {
    //     let addRecord = true;
    //     for (const key in filters) {
    //         if (filters.hasOwnProperty(key)) {
    //             if (record[key] && Array.isArray(record[key])) {
    //                 if (!record[key].includes(filters[key])) {
    //                     addRecord = false;
    //                     break;
    //                 }
    //             } else if (record[key] !== filters[key]) {
    //                 addRecord = false;
    //                 break;
    //             }
    //         }
    //     }
    //     return addRecord;
    // });
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


export function configureFakeBackend() {
    let realFetch = window.fetch;
    window.fetch = function (url: string, opts?: any): any {
        return new Promise((resolve, reject) => {
            // wrap in timeout to simulate server api call
            setTimeout(() => {

                // get slides
                if (url.match(/\/api\/v1\/slides$/) && opts.method === 'GET') {
                    resolve({ok: true, text: () => Promise.resolve(JSON.stringify(slidesResponse))});
                }

                // get brands
                if (url.match(/\/api\/v1\/brands$/) && opts.method === 'GET') {
                    resolve({ok: true, text: () => Promise.resolve(JSON.stringify(brandsResponse))});
                }

                // get collections
                if (url.match(/\/api\/v1\/collections$/) && opts.method === 'GET') {
                    resolve({ok: true, text: () => Promise.resolve(JSON.stringify(collectionsResponse))});
                }

                // get products
                if (url.match(/\/api\/v1\/products$/) && opts.method === 'GET') {
                    resolve({ok: true, text: () => Promise.resolve(JSON.stringify(productsResponse))});
                }

                // get products
                if (url.match(/\/api\/v1\/categories\/_\/getCategoryDetail$/) && opts.method === 'GET') {
                    // const categoryDetailResponse = applyFilters(request, categoriesResponse);
                    // categoryDetailResponse.data = categoryDetailResponse.data.shift();
                    // resolve({ok: true, text: () => Promise.resolve(JSON.stringify(categoryDetailResponse))});
                }

                if (url.endsWith('/v1/login') && opts.method === 'POST') {


                    let body = JSON.parse(opts.body);
                    // find if any user matches login credentials
                    const users = usersResponse.data;
                    const filteredUser = users
                        .filter((user: any) => {
                            return user.email === body.data.email && user.password === body.data.password;
                        })
                        .shift();

                    if (filteredUser) {
                        // if login details are valid return 200 OK with user details and fake jwt token
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

                        return resolve({ok: true, text: () => Promise.resolve(JSON.stringify({data: body}))});
                    }
                }

                // get orders by user
                if (url.match(/\/api\/v1\/orders$/) && opts.method === 'GET') {
                    // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
                    if (opts.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                        resolve({ok: true, text: () => Promise.resolve(JSON.stringify(orderResponse))});
                    }
                }

                // get orders by user
                if (url.match(/\/api\/v1\/orders\/count$/) && opts.method === 'GET') {
                    // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
                    if (opts.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                        resolve({ok: true, text: () => Promise.resolve(orderResponse.data.length)});
                    }
                }

                // get order
                if (url.match(/\/api\/v1\/orders\/\w+$/) && opts.method === 'GET') {
                    // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
                    if (opts.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                        const orderId = url.match(/\/api\/v1\/orders\/(\w+)$/);
                        const order = orderResponse.data.find((o: any) => o._id === orderId);
                        const data = JSON.parse(JSON.stringify(order));
                        resolve({ok: true, text: () => Promise.resolve(JSON.stringify({data}))});
                    }
                }

                // pass through any requests not handled above
                realFetch(url, opts).then(response => resolve(response));

            }, 500);
        });
    }
}
