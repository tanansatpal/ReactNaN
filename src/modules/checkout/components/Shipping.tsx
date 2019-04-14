import React from 'react'

export default function Shipping() {
    return (<div>
            <ul className="custom-nav nav nav-pills mb-5">
                <li className="nav-item w-25"><a href="checkout1.html" className="nav-link text-sm ">Address</a></li>
                <li className="nav-item w-25"><a href="checkout2.html" className="nav-link text-sm active">Delivery
                    Method</a></li>
                <li className="nav-item w-25"><a href="#" className="nav-link text-sm disabled">Payment Method </a></li>
                <li className="nav-item w-25"><a href="#" className="nav-link text-sm disabled">Order Review</a></li>
            </ul>
            <div className="block my-5">
                <div className="block-body">
                    <div className="row">
                        <div className="form-group col-md-6 d-flex align-items-center">
                            <input type="radio" name="shippping" id="option0"/>
                            <label htmlFor="option0" className="ml-3"><strong className="d-block text-uppercase mb-2">Usps
                                next day</strong><span className="text-muted text-sm">Get it right on next day - fastest option possible.</span></label>
                        </div>
                        <div className="form-group col-md-6 d-flex align-items-center">
                            <input type="radio" name="shippping" id="option1"/>
                            <label htmlFor="option1" className="ml-3"><strong className="d-block text-uppercase mb-2">Usps
                                next day</strong><span className="text-muted text-sm">Get it right on next day - fastest option possible.</span></label>
                        </div>
                        <div className="form-group col-md-6 d-flex align-items-center">
                            <input type="radio" name="shippping" id="option2"/>
                            <label htmlFor="option2" className="ml-3"><strong className="d-block text-uppercase mb-2">Usps
                                next day</strong><span className="text-muted text-sm">Get it right on next day - fastest option possible.</span></label>
                        </div>
                        <div className="form-group col-md-6 d-flex align-items-center">
                            <input type="radio" name="shippping" id="option3"/>
                            <label htmlFor="option3" className="ml-3"><strong className="d-block text-uppercase mb-2">Usps
                                next day</strong><span className="text-muted text-sm">Get it right on next day - fastest option possible.</span></label>
                        </div>
                    </div>
                </div>
                <div className="mb-5 d-flex justify-content-between flex-column flex-lg-row"><a href="cart.html"
                                                                                                className="btn btn-link text-muted">
                    <i className="fa fa-angle-left mr-2"></i>Back to the addresses</a><a href="checkout3.html"
                                                                                         className="btn btn-dark">Choose
                    payment method<i className="fa fa-angle-right ml-2"></i></a></div>
            </div>
        </div>
    )
}
