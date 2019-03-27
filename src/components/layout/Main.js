import React from 'react'
import Slides from "../home/Slides";

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

function Main() {
  return (<Slides slides={imgs}/>
  )
}


export default Main;
