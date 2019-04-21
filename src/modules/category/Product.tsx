import React from "react";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {FILE_BASE_URL} from "../../constant";

export default function Product(props: any) {
    let {product} = props;
    let image = product.images.length ? product.images.shift() : {};
    let imageURL = FILE_BASE_URL + image.image;
    return (<div className="product">
        <div className="product-image">
            <div className="ribbon ribbon-info">Fresh</div>
            <img src={imageURL}
                 alt={image.caption} className="img-fluid"/>
            <div className="product-hover-overlay">
                <Link to={`/product/${product._id}`} className="product-hover-overlay-link"/>
                <div className="product-hover-overlay-buttons">
                    <Link to="" className="btn btn-dark btn-buy">
                        <FontAwesomeIcon icon="shopping-cart"/>
                    </Link>
                    <Link to={`/product/${product._id}`} className="btn btn-dark btn-buy">
                        <FontAwesomeIcon icon="search"/>
                        <span className="btn-buy-label ml-2">View</span>
                    </Link>
                    <Link to="#" data-toggle="modal"
                          data-target="#exampleModal"
                          className="btn btn-outline-dark btn-product-right">
                        <FontAwesomeIcon icon="expand-arrows-alt"/>
                    </Link>
                </div>
            </div>
        </div>
        <div className="py-2">
            <p className="text-muted text-sm mb-1">{product.categories.shift()}</p>
            <h3 className="h6 text-uppercase mb-1">
                <Link to={`/product/${product._id}`} className="text-dark">
                    {product.name}
                </Link>
            </h3><span className="text-muted">{`$${product.price}`}</span>
        </div>
    </div>)
}
