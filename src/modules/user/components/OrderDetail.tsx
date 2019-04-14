import React from 'react'

export default function OrderDetail() {
    return (<div>
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
                                    <div className="d-flex align-items-center">
                                        <a href="detail.html"><img
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
                                    <div className="d-flex align-items-center">
                                        <a href="detail.html">
                                            <img
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
                                    <div className="d-flex align-items-center">
                                        <a href="detail.html"><img
                                            src="https://d19m59y37dris4.cloudfront.net/sell/1-2-2/img/product/product-square-serrah-galos-494312-unsplash.jpg"
                                            alt="..." className="cart-item-img"/></a>
                                        <div className="cart-title text-left">
                                            <a href="detail.html"
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
            <div className="row my-5">
                <div className="col-md-6">
                    <div className="block mb-5">
                        <div className="block-header">
                            <h6 className="text-uppercase mb-0">Order Summary</h6>
                        </div>
                        <div className="block-body bg-light pt-1">
                            <p className="text-sm">Shipping and additional costs are calculated based on values you have
                                entered.</p>
                            <ul className="order-summary mb-0 list-unstyled">
                                <li className="order-summary-item"><span>Order Subtotal </span><span>$390.00</span></li>
                                <li className="order-summary-item"><span>Shipping and handling</span><span>$10.00</span>
                                </li>
                                <li className="order-summary-item"><span>Tax</span><span>$0.00</span></li>
                                <li className="order-summary-item border-0"><span>Total</span><strong
                                    className="order-summary-total">$400.00</strong></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="block-header">
                        <h6 className="text-uppercase mb-0">Invoice address</h6>
                    </div>
                    <div className="block-body bg-light pt-1">
                        <p>John Brown<br/>13/25 New Avenue<br/>New Heaven<br/>45Y 73J<br/>England<br/><strong>Great
                            Britain</strong></p>
                    </div>
                    <div className="block-header">
                        <h6 className="text-uppercase mb-0">Shipping address</h6>
                    </div>
                    <div className="block-body bg-light pt-1">
                        <p>John Brown<br/>13/25 New Avenue<br/>New Heaven<br/>45Y 73J<br/>England<br/><strong>Great
                            Britain</strong></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
