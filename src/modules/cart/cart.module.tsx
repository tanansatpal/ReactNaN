import React from 'react'

export default function CartModule() {
    return (<div>
        <section className="hero">
            <div className="container">
                <ol className="breadcrumb justify-content-center">
                    <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                    <li className="breadcrumb-item active">Shopping cart</li>
                </ol>
                <div className="hero-content pb-5 text-center">
                    <h1 className="hero-heading">Shopping cart</h1>
                    <div className="row">
                        <div className="col-xl-8 offset-xl-2"><p className="lead text-muted">This is a second
                            variant of
                            the cart page. It handles differently smaller viewports - items do not stay in the table
                            but
                            stack a bit more. Resize your browser window to see it in action.</p></div>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div className="container">
                <div className="row mb-5">
                    <div className="col-lg-8">
                        <div className="cart">
                            <div className="cart-header text-center">
                                <div className="row">
                                    <div className="col-md-5">Item</div>
                                    <div className="col-md-7 d-none d-md-block">
                                        <div className="row">
                                            <div className="col-md-3">Price</div>
                                            <div className="col-md-4">Quantity</div>
                                            <div className="col-md-3">Total</div>
                                            <div className="col-md-2"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="cart-body">
                                <div className="cart-item">
                                    <div className="row d-flex align-items-center text-left text-md-center">
                                        <div className="col-12 col-md-5"><a href="#"
                                                                            className="cart-remove close mt-3 d-md-none"><i
                                            className="fa fa-times"> </i></a>
                                            <div className="d-flex align-items-center">
                                                <a href="detail.html">
                                                    <img
                                                        src="https://d19m59y37dris4.cloudfront.net/sell/1-2-2/img/product/product-square-ian-dooley-347968-unsplash.jpg"
                                                        alt="..." className="cart-item-img"/></a>
                                                <div className="cart-title text-left">
                                                    <a href="detail.html"
                                                       className="text-uppercase text-dark"><strong>Skull
                                                        Tee</strong></a><br/>
                                                    <span
                                                        className="text-muted text-sm">Size: Large</span><br/><span
                                                    className="text-muted text-sm">Colour: Green</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-7 mt-4 mt-md-0">
                                            <div className="row align-items-center">
                                                <div className="col-md-3">
                                                    <div className="row">
                                                        <div className="col-6 d-md-none text-muted">Price per item
                                                        </div>
                                                        <div
                                                            className="col-6 col-md-12 text-right text-md-center">$65.00
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="row align-items-center">
                                                        <div
                                                            className="d-md-none col-7 col-sm-9 text-muted">Quantity
                                                        </div>
                                                        <div className="col-5 col-sm-3 col-md-12">
                                                            <div className="d-flex align-items-center">
                                                                <div className="btn btn-items btn-items-decrease">-
                                                                </div>
                                                                <input type="text" value="4"
                                                                       className="form-control text-center border-0 border-md input-items"/>
                                                                <div
                                                                    className="btn btn-items btn-items-increase">+
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="row">
                                                        <div className="col-6 d-md-none text-muted">Total price
                                                        </div>
                                                        <div
                                                            className="col-6 col-md-12 text-right text-md-center">$260.00
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-2 d-none d-md-block text-center"><a href="#"
                                                                                                        className="cart-remove">
                                                    <i className="delete fa fa-times"></i></a></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="cart-item">
                                    <div className="row d-flex align-items-center text-left text-md-center">
                                        <div className="col-12 col-md-5"><a href="#"
                                                                            className="cart-remove close mt-3 d-md-none"><i
                                            className="fa fa-times"> </i></a>
                                            <div className="d-flex align-items-center"><a href="detail.html"><img
                                                src="https://d19m59y37dris4.cloudfront.net/sell/1-2-2/img/product/product-square-kyle-loftus-596319-unsplash.jpg"
                                                alt="..." className="cart-item-img"/></a>
                                                <div className="cart-title text-left"><a href="detail.html"
                                                                                         className="text-uppercase text-dark"><strong>Transparent
                                                    Blouse</strong></a><br/><span className="text-muted text-sm">Size: Medium</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-7 mt-4 mt-md-0">
                                            <div className="row align-items-center">
                                                <div className="col-md-3">
                                                    <div className="row">
                                                        <div className="col-6 d-md-none text-muted">Price per item
                                                        </div>
                                                        <div
                                                            className="col-6 col-md-12 text-right text-md-center">$55.00
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="row align-items-center">
                                                        <div
                                                            className="d-md-none col-7 col-sm-9 text-muted">Quantity
                                                        </div>
                                                        <div className="col-5 col-sm-3 col-md-12">
                                                            <div className="d-flex align-items-center">
                                                                <div className="btn btn-items btn-items-decrease">-
                                                                </div>
                                                                <input type="text" value="3"
                                                                       className="form-control text-center border-0 border-md input-items"/>
                                                                <div
                                                                    className="btn btn-items btn-items-increase">+
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="row">
                                                        <div className="col-6 d-md-none text-muted">Total price
                                                        </div>
                                                        <div
                                                            className="col-6 col-md-12 text-right text-md-center">$165.00
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-2 d-none d-md-block text-center"><a href="#"
                                                                                                        className="cart-remove">
                                                    <i className="delete fa fa-times"></i></a></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="cart-item">
                                    <div className="row d-flex align-items-center text-left text-md-center">
                                        <div className="col-12 col-md-5"><a href="#"
                                                                            className="cart-remove close mt-3 d-md-none"><i
                                            className="fa fa-times"> </i></a>
                                            <div className="d-flex align-items-center"><a href="detail.html"><img
                                                src="https://d19m59y37dris4.cloudfront.net/sell/1-2-2/img/product/product-square-serrah-galos-494312-unsplash.jpg"
                                                alt="..." className="cart-item-img"/></a>
                                                <div className="cart-title text-left"><a href="detail.html"
                                                                                         className="text-uppercase text-dark"><strong>White
                                                    Tee</strong></a><br/><span className="text-muted text-sm">Size: Medium</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-7 mt-4 mt-md-0">
                                            <div className="row align-items-center">
                                                <div className="col-md-3">
                                                    <div className="row">
                                                        <div className="col-6 d-md-none text-muted">Price per item
                                                        </div>
                                                        <div
                                                            className="col-6 col-md-12 text-right text-md-center">$55.00
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="row align-items-center">
                                                        <div
                                                            className="d-md-none col-7 col-sm-9 text-muted">Quantity
                                                        </div>
                                                        <div className="col-5 col-sm-3 col-md-12">
                                                            <div className="d-flex align-items-center">
                                                                <div className="btn btn-items btn-items-decrease">-
                                                                </div>
                                                                <input type="text" value="3"
                                                                       className="form-control text-center border-0 border-md input-items"/>
                                                                <div
                                                                    className="btn btn-items btn-items-increase">+
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="row">
                                                        <div className="col-6 d-md-none text-muted">Total price
                                                        </div>
                                                        <div
                                                            className="col-6 col-md-12 text-right text-md-center">$165.00
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-2 d-none d-md-block text-center"><a href="#"
                                                                                                        className="cart-remove">
                                                    <i className="delete fa fa-times"></i></a></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="my-5 d-flex justify-content-between flex-column flex-lg-row"><a
                            href="category.html" className="btn btn-link text-muted"><i
                            className="fa fa-chevron-left"></i> Continue Shopping</a><a href="checkout1.html"
                                                                                        className="btn btn-dark">Proceed
                            to checkout <i className="fa fa-chevron-right"></i> </a></div>
                    </div>
                    <div className="col-lg-4">
                        <div className="block mb-5">
                            <div className="block-header">
                                <h6 className="text-uppercase mb-0">Order Summary</h6>
                            </div>
                            <div className="block-body bg-light pt-1">
                                <p className="text-sm">Shipping and additional costs are calculated based on values
                                    you
                                    have entered.</p>
                                <ul className="order-summary mb-0 list-unstyled">
                                    <li className="order-summary-item">
                                        <span>Order Subtotal </span><span>$390.00</span>
                                    </li>
                                    <li className="order-summary-item">
                                        <span>Shipping and handling</span><span>$10.00</span></li>
                                    <li className="order-summary-item"><span>Tax</span><span>$0.00</span></li>
                                    <li className="order-summary-item border-0"><span>Total</span><strong
                                        className="order-summary-total">$400.00</strong></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>)
}
