import React from 'react';

export default function Footer() {
    return (<footer className="main-footer">
            <div className="bg-gray-100 text-dark-700 py-6">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 service-column">
                            <svg className="svg-icon service-icon">
                                <use xlinkHref="#delivery-time-1"/>
                            </svg>
                            <div className="service-text">
                                <h6 className="text-uppercase">Free shipping &amp; return</h6>
                                <p className="text-muted font-weight-light text-sm mb-0">Free Shipping over $300</p>
                            </div>
                        </div>
                        <div className="col-lg-4 service-column">
                            <svg className="svg-icon service-icon">
                                <use xlinkHref="#money-1"/>
                            </svg>
                            <div className="service-text">
                                <h6 className="text-uppercase">Money back guarantee</h6>
                                <p className="text-muted font-weight-light text-sm mb-0">30 Days Money Back
                                    Guarantee</p>
                            </div>
                        </div>
                        <div className="col-lg-4 service-column">
                            <svg className="svg-icon service-icon">
                                <use xlinkHref="#customer-support-1"/>
                            </svg>
                            <div className="service-text">
                                <h6 className="text-uppercase">020-800-456-747</h6>
                                <p className="text-muted font-weight-light text-sm mb-0">24/7 Available Support</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-6 bg-gray-300 text-muted">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 mb-5 mb-lg-0">
                            <div className="font-weight-bold text-uppercase text-lg text-dark mb-3">Sell<span
                                className="text-primary">.</span></div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                            <ul className="list-inline">
                                <li className="list-inline-item"><a href="#" target="_blank" title="twitter"
                                                                    className="text-muted text-hover-primary">
                                    <i className="fab fa-twitter"></i></a></li>
                                <li className="list-inline-item"><a href="#" target="_blank" title="facebook"
                                                                    className="text-muted text-hover-primary"><i
                                    className="fab fa-facebook"></i></a></li>
                                <li className="list-inline-item"><a href="#" target="_blank" title="instagram"
                                                                    className="text-muted text-hover-primary"><i
                                    className="fab fa-instagram"></i></a></li>
                                <li className="list-inline-item"><a href="#" target="_blank" title="pinterest"
                                                                    className="text-muted text-hover-primary"><i
                                    className="fab fa-pinterest"></i></a></li>
                                <li className="list-inline-item"><a href="#" target="_blank" title="vimeo"
                                                                    className="text-muted text-hover-primary"><i
                                    className="fab fa-vimeo"></i></a></li>
                            </ul>
                        </div>
                        <div className="col-lg-2 col-md-6 mb-5 mb-lg-0">
                            <h6 className="text-uppercase text-dark mb-3">Shop</h6>
                            <ul className="list-unstyled">
                                <li><a href="#" className="text-muted">For Women</a></li>
                                <li><a href="#" className="text-muted">For Men</a></li>
                                <li><a href="#" className="text-muted">Stores</a></li>
                                <li><a href="#" className="text-muted">Our Blog</a></li>
                                <li><a href="#" className="text-muted">Shop</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-2 col-md-6 mb-5 mb-lg-0">
                            <h6 className="text-uppercase text-dark mb-3">Company</h6>
                            <ul className="list-unstyled">
                                <li><a href="#" className="text-muted">Login </a></li>
                                <li><a href="#" className="text-muted">Register </a></li>
                                <li><a href="#" className="text-muted">Wishlist </a></li>
                                <li><a href="#" className="text-muted">Our Products </a></li>
                                <li><a href="#" className="text-muted">Checkouts </a></li>
                            </ul>
                        </div>
                        <div className="col-lg-4">
                            <h6 className="text-uppercase text-dark mb-3">Daily Offers & Discounts</h6>
                            <p className="mb-3"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. At itaque
                                temporibus.</p>
                            <form action="#" id="newsletter-form">
                                <div className="input-group mb-3">
                                    <input type="email" placeholder="Your Email Address" aria-label="Your Email Address"
                                           className="form-control bg-transparent border-secondary border-right-0"/>
                                    <div className="input-group-append">
                                        <button type="submit" className="btn btn-outline-secondary border-left-0"><i
                                            className="fa fa-paper-plane text-lg text-dark"></i></button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-4 font-weight-light bg-gray-800 text-gray-300">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6 text-center text-md-left">
                            <p className="mb-md-0">&copy; 2018 Your company. All rights reserved.</p>
                        </div>
                        <div className="col-md-6">
                            <ul className="list-inline mb-0 mt-2 mt-md-0 text-center text-md-right">
                                <li className="list-inline-item"><img
                                    src="https://d19m59y37dris4.cloudfront.net/sell/1-2-2/img/visa.svg"
                                    alt="..." className="w-2rem"/></li>
                                <li className="list-inline-item"><img
                                    src="https://d19m59y37dris4.cloudfront.net/sell/1-2-2/img/mastercard.svg" alt="..."
                                    className="w-2rem"/>
                                </li>
                                <li className="list-inline-item"><img
                                    src="https://d19m59y37dris4.cloudfront.net/sell/1-2-2/img/paypal.svg" alt="..."
                                    className="w-2rem"/>
                                </li>
                                <li className="list-inline-item"><img
                                    src="https://d19m59y37dris4.cloudfront.net/sell/1-2-2/img/western-union.svg"
                                    alt="..."
                                    className="w-2rem"/></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
