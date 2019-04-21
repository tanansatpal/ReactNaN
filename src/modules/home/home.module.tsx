import React, {useEffect, useReducer, useState} from 'react'
import Slides from "../../modules/home/components/Slides";
import CategoryBanner from "../../modules/home/components/CategoryBanner";
import HomeBanner from "../../modules/home/components/HomeBanner";
import Brands from "../../modules/home/components/Brands";
import {staticService} from "../../services/static.service";

const imgs = [
    {
        "_id": "5bffacdf0baf3b019ace1836",
        "_metadata": {
            "i18n": {
                "EN": {}
            },
            "image": {
                "name": "matheus-ferrero-334418-unsplash.jpg",
                "type": "image/jpeg",
                "size": 244213,
                "versioning": true,
                "_id": "5bffacda0baf3b019ace17f0"
            }
        },
        "publish": "1",
        "tags": [],
        "substore": [],
        "image": "ms.slides/5c4aac3d2b93e81b85a3ab5b.jpg",
        "description": "<div class=\"container-fluid h-100 py-5\">\n<div class=\"row align-items-center h-100\">\n<div class=\"col-lg-8 col-xl-6 mx-auto text-white text-center\">\n<h5 class=\"text-uppercase text-white font-weight-light mb-4 letter-spacing-5\">Just arrived</h5>\n<h1 class=\"mb-5 display-2 font-weight-bold text-serif\">Denim Jackets</h1>\n<p class=\"lead mb-4\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>\n<p><a href=\"category.html\" class=\"btn btn-light\">View collection</a></p>\n</div>\n</div>\n</div>",
        "sort_order": 0,
        "created_on": "2018-11-29T09:09:52.801Z",
        "_created_by": "5b39d8722282ab532a326bc7",
        "title": "Denim Jackets",
        "updated_on": "2018-11-29T09:15:33.968Z",
        "_updated_by": "5b39d8722282ab532a326bc7"
    },
    {
        "_id": "5bffaccbd204a301a395b81e",
        "_metadata": {
            "i18n": {
                "EN": {}
            },
            "image": {
                "name": "ian-dooley-347942-unsplash.jpg",
                "type": "image/jpeg",
                "size": 296986,
                "versioning": true,
                "_id": "5bffacc09f05300251de8e1b"
            }
        },
        "publish": "1",
        "tags": [],
        "substore": [],
        "image": "ms.slides/5c4aad377abc191bb8d43ebe.jpg",
        "description": "<div class=\"container-fluid h-100\">\n<div class=\"row align-items-center h-100\">\n<div class=\"col-lg-8 col-xl-6 mx-auto text-white text-center overlay-content\">\n<h1 class=\"mb-4 display-2 text-uppercase font-weight-bold\">Skeleton Tees</h1>\n<p class=\"lead mb-5\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>\n<p><a href=\"category.html\" class=\"btn btn-light\">Start shopping</a></p>\n</div>\n</div>\n</div>",
        "sort_order": 0,
        "created_on": "2018-11-29T09:09:32.239Z",
        "_created_by": "5b39d8722282ab532a326bc7",
        "subtitle": "Skeleton Tees",
        "updated_on": "2018-11-29T09:15:13.087Z",
        "_updated_by": "5b39d8722282ab532a326bc7"
    },
    {
        "_id": "5bffacb49f05300251de8dd7",
        "_metadata": {
            "i18n": {
                "EN": {}
            },
            "image": {
                "name": "haley-phelps-62815-unsplash.jpg",
                "type": "image/jpeg",
                "size": 221114,
                "versioning": true,
                "_id": "5bffac91d204a301a395b62d"
            }
        },
        "publish": "1",
        "tags": [],
        "substore": [],
        "description": "<div class=\"container-fluid h-100\">\n<div class=\"row align-items-center h-100\">\n<div class=\"col-lg-8 col-xl-6 mx-auto text-white text-center\">\n<h5 class=\"text-uppercase font-weight-light mb-4 letter-spacing-5\">Our bestseller</h5>\n<h1 class=\"mb-5 display-1 font-weight-bold text-serif\">Skinny Jeans</h1>\n<p><a href=\"category.html\" class=\"btn btn-light\">View collection</a></p>\n</div>\n</div>\n</div>",
        "image": "ms.slides/5c4aacc22b93e81b85a3aebe.jpg",
        "sort_order": 0,
        "created_on": "2018-11-29T09:09:09.720Z",
        "_created_by": "5b39d8722282ab532a326bc7",
        "title": "Skinny Jeans",
        "updated_on": "2018-11-29T09:15:20.909Z",
        "_updated_by": "5b39d8722282ab532a326bc7"
    }
];

// const brands = [
//     {
//         "_id": "5c7930202451f16aa72ec27d",
//         "_metadata": {"i18n": {"EN": {}}},
//         "publish": "1",
//         "alias": "brand-7",
//         "images": [{
//             "image": "ms.brands/5c7930202451f16aa72ec27d/5c79301b50c72a6aa4c2ee55.svg",
//             "_metadata": {
//                 "image": {
//                     "name": "brand-1.svg",
//                     "type": "image/svg+xml",
//                     "size": 15984,
//                     "versioning": true,
//                     "_id": "5c79301b50c72a6aa4c2ee55"
//                 }
//             },
//             "_id": "5c7930202451f16aa72ec27e"
//         }
//         ],
//         "SEO": {},
//         "facet_group": "",
//         "name": "Brand 7",
//         "sort_order": 0,
//         "created_on": "2019-03-01T13:14:09.352Z",
//         "_created_by": "5c73f85cc4f47113d379b8cc",
//         "image": "ms.brands/5c7930202451f16aa72ec27d/5c79301b50c72a6aa4c2ee55.svg"
//     },
//     {
//         "_id": "5c79300550c72a6aa4c2edae",
//         "_metadata": {"i18n": {"EN": {}}},
//         "publish": "1",
//         "alias": "brand-6",
//         "images": [{
//             "image": "ms.brands/5c79300550c72a6aa4c2edae/5c79300150c72a6aa4c2ed8f.svg",
//             "_metadata": {
//                 "image": {
//                     "name": "brand-6.svg",
//                     "type": "image/svg+xml",
//                     "size": 15419,
//                     "versioning": true,
//                     "_id": "5c79300150c72a6aa4c2ed8f"
//                 }
//             },
//             "_id": "5c79300550c72a6aa4c2edaf"
//         }
//         ],
//         "SEO": {},
//         "facet_group": "",
//         "name": "Brand 6",
//         "sort_order": 0,
//         "created_on": "2019-03-01T13:13:42.985Z",
//         "_created_by": "5c73f85cc4f47113d379b8cc",
//         "image": "ms.brands/5c79300550c72a6aa4c2edae/5c79300150c72a6aa4c2ed8f.svg"
//     },
//     {
//         "_id": "5c792ff92451f16aa72ec135",
//         "_metadata": {"i18n": {"EN": {}}},
//         "publish": "1",
//         "alias": "brand-5",
//         "images": [{
//             "image": "ms.brands/5c792ff92451f16aa72ec135/5c792ff5b586856ae96159ee.svg",
//             "_metadata": {
//                 "image": {
//                     "name": "brand-5.svg",
//                     "type": "image/svg+xml",
//                     "size": 9257,
//                     "versioning": true,
//                     "_id": "5c792ff5b586856ae96159ee"
//                 }
//             },
//             "_id": "5c792ff92451f16aa72ec136"
//         }
//         ],
//         "SEO": {},
//         "facet_group": "",
//         "name": "Brand 5",
//         "sort_order": 0,
//         "created_on": "2019-03-01T13:13:30.757Z",
//         "_created_by": "5c73f85cc4f47113d379b8cc",
//         "image": "ms.brands/5c792ff92451f16aa72ec135/5c792ff5b586856ae96159ee.svg"
//     },
//     {
//         "_id": "5c792fed7458da6ae0270394",
//         "_metadata": {"i18n": {"EN": {}}},
//         "publish": "1",
//         "alias": "brand-4",
//         "images": [{
//             "image": "ms.brands/5c792fed7458da6ae0270394/5c792fe950c72a6aa4c2ecc1.svg",
//             "_metadata": {
//                 "image": {
//                     "name": "brand-4.svg",
//                     "type": "image/svg+xml",
//                     "size": 40968,
//                     "versioning": true,
//                     "_id": "5c792fe950c72a6aa4c2ecc1"
//                 }
//             },
//             "_id": "5c792fed7458da6ae0270395"
//         }
//         ],
//         "SEO": {},
//         "facet_group": "",
//         "name": "Brand 4",
//         "sort_order": 0,
//         "created_on": "2019-03-01T13:13:18.133Z",
//         "_created_by": "5c73f85cc4f47113d379b8cc",
//         "image": "ms.brands/5c792fed7458da6ae0270394/5c792fe950c72a6aa4c2ecc1.svg"
//     },
//     {
//         "_id": "5c792fe150c72a6aa4c2ec80",
//         "_metadata": {"i18n": {"EN": {}}},
//         "publish": "1",
//         "alias": "brand-3",
//         "images": [{
//             "image": "ms.brands/5c792fe150c72a6aa4c2ec80/5c792fdc7458da6ae02702f3.svg",
//             "_metadata": {
//                 "image": {
//                     "name": "brand-3.svg",
//                     "type": "image/svg+xml",
//                     "size": 21258,
//                     "versioning": true,
//                     "_id": "5c792fdc7458da6ae02702f3"
//                 }
//             },
//             "_id": "5c792fe150c72a6aa4c2ec81"
//         }
//         ],
//         "SEO": {},
//         "facet_group": "",
//         "name": "Brand 3",
//         "sort_order": 0,
//         "created_on": "2019-03-01T13:13:06.334Z",
//         "_created_by": "5c73f85cc4f47113d379b8cc",
//         "image": "ms.brands/5c792fe150c72a6aa4c2ec80/5c792fdc7458da6ae02702f3.svg"
//     },
//     {
//         "_id": "5c792fd42451f16aa72ec010",
//         "_metadata": {"i18n": {"EN": {}}},
//         "publish": "1",
//         "alias": "brand-2",
//         "images": [{
//             "image": "ms.brands/5c792fd42451f16aa72ec010/5c792fc8b586856ae96158a9.svg",
//             "_metadata": {
//                 "image": {
//                     "name": "brand-2.svg",
//                     "type": "image/svg+xml",
//                     "size": 16575,
//                     "versioning": true,
//                     "_id": "5c792fc8b586856ae96158a9"
//                 }
//             },
//             "_id": "5c792fd42451f16aa72ec011"
//         }
//         ],
//         "SEO": {},
//         "facet_group": "",
//         "name": "Brand 2",
//         "sort_order": 0,
//         "created_on": "2019-03-01T13:12:53.384Z",
//         "_created_by": "5c73f85cc4f47113d379b8cc",
//         "image": "ms.brands/5c792fd42451f16aa72ec010/5c792fc8b586856ae96158a9.svg"
//     },
//     {
//         "_id": "5c792f8c50c72a6aa4c2ea75",
//         "_metadata": {"i18n": {"EN": {}}},
//         "publish": "1",
//         "alias": "brand-1",
//         "images": [{
//             "image": "ms.brands/5c792f8c50c72a6aa4c2ea75/5c792f862451f16aa72ebe07.svg",
//             "_metadata": {
//                 "image": {
//                     "name": "brand-1.svg",
//                     "type": "image/svg+xml",
//                     "size": 15984,
//                     "versioning": true,
//                     "_id": "5c792f862451f16aa72ebe07"
//                 }
//             },
//             "_id": "5c792f8c50c72a6aa4c2ea76"
//         }
//         ],
//         "SEO": {},
//         "facet_group": "",
//         "description": "",
//         "name": "Brand 1",
//         "sort_order": 0,
//         "created_on": "2019-03-01T13:11:40.934Z",
//         "_created_by": "5c73f85cc4f47113d379b8cc",
//         "image": "ms.brands/5c792f8c50c72a6aa4c2ea75/5c792f862451f16aa72ebe07.svg"
//     }
// ];

export default function HomeModule() {

    const [brands, setBrands] = useState([]);

    useEffect(async function () {
        let brands = await staticService.getBrands();
        setBrands(brands);
    });

    return (<div>
        <Slides slides={imgs}/>
        <CategoryBanner/>
        <HomeBanner/>
        <Brands brands={brands}/>
    </div>)
}
