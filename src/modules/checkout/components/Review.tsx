import React from 'react'

export default function Review() {
    return (<div>
            <ul className="custom-nav nav nav-pills mb-5">
                <li className="nav-item w-25"><a href="checkout1.html" className="nav-link text-sm ">Address</a></li>
                <li className="nav-item w-25"><a href="checkout2.html" className="nav-link text-sm ">Delivery Method</a>
                </li>
                <li className="nav-item w-25"><a href="checkout3.html" className="nav-link text-sm ">Payment Method </a>
                </li>
                <li className="nav-item w-25"><a href="checkout4.html" className="nav-link text-sm active">Order
                    Review</a>
                </li>
            </ul>
            <div className="mb-5">
                <div className="cart">
                    <div className="cart-wrapper">
                        <div className="cart-header text-center">
                            <div className="row">
                                <div className="col-6">Item</div>
                                <div className="col-2">Price</div>
                                <div className="col-2">Quantity</div>
                                <div className="col-2">Total</div>
                            </div>
                        </div>
                        <div className="cart-body">
                            <div className="cart-item">
                                <div className="row d-flex align-items-center text-center">
                                    <div className="col-6">
                                        <div className="d-flex align-items-center"><a href="detail.html"><img
                                            src="https://d19m59y37dris4.cloudfront.net/sell/1-2-2/img/product/product-square-ian-dooley-347968-unsplash.jpg"
                                            alt="..." className="cart-item-img"/></a>
                                            <div className="cart-title text-left">
                                                <a href="detail.html"
                                                   className="text-uppercase text-dark"><strong>Skull
                                                    Tee</strong></a><br/><span
                                                className="text-muted text-sm">Size: Large</span><br/><span
                                                className="text-muted text-sm">Colour: Green</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-2">$65.00</div>
                                    <div className="col-2">4
                                    </div>
                                    <div className="col-2 text-center">$260.00</div>
                                </div>
                            </div>
                            <div className="cart-item">
                                <div className="row d-flex align-items-center text-center">
                                    <div className="col-6">
                                        <div className="d-flex align-items-center"><a href="detail.html"><img
                                            src="https://d19m59y37dris4.cloudfront.net/sell/1-2-2/img/product/product-square-kyle-loftus-596319-unsplash.jpg"
                                            alt="..." className="cart-item-img"/></a>
                                            <div className="cart-title text-left">
                                                <a href="detail.html"
                                                   className="text-uppercase text-dark"><strong>Transparent
                                                    Blouse</strong></a><br/><span
                                                className="text-muted text-sm">Size: Medium</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-2">$55.00</div>
                                    <div className="col-2">3
                                    </div>
                                    <div className="col-2 text-center">$165.00</div>
                                </div>
                            </div>
                            <div className="cart-item">
                                <div className="row d-flex align-items-center text-center">
                                    <div className="col-6">
                                        <div className="d-flex align-items-center"><a href="detail.html"><img
                                            src="https://d19m59y37dris4.cloudfront.net/sell/1-2-2/img/product/product-square-serrah-galos-494312-unsplash.jpg"
                                            alt="..." className="cart-item-img"/></a>
                                            <div className="cart-title text-left"><a href="detail.html"
                                                                                     className="text-uppercase text-dark"><strong>White
                                                Tee</strong></a><br/><span
                                                className="text-muted text-sm">Size: Medium</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-2">$55.00</div>
                                    <div className="col-2">3
                                    </div>
                                    <div className="col-2 text-center">$165.00</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mb-5 d-flex justify-content-between flex-column flex-lg-row"><a href="checkout3.html"
                                                                                            className="btn btn-link text-muted">
                <i className="fa fa-angle-left mr-2"></i>Back to the delivery method</a><a href="checkout5.html"
                                                                                           className="btn btn-dark">Place
                an
                order<i className="fa fa-angle-right ml-2"></i></a></div>
        </div>
    )
}
