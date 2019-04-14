import React from 'react'

export default function Payment() {
    return (<div>
            <ul className="custom-nav nav nav-pills mb-5">
                <li className="nav-item w-25"><a href="checkout1.html" className="nav-link text-sm ">Address</a></li>
                <li className="nav-item w-25"><a href="checkout2.html" className="nav-link text-sm ">Delivery Method</a>
                </li>
                <li className="nav-item w-25"><a href="checkout3.html" className="nav-link text-sm active">Payment
                    Method </a></li>
                <li className="nav-item w-25"><a href="#" className="nav-link text-sm disabled">Order Review</a></li>
            </ul>
            <div className="mb-5">
                <div id="accordion" role="tablist">
                    <div className="block mb-3">
                        <div id="headingOne" role="tab" className="block-header"><strong><a data-toggle="collapse"
                                                                                            href="#collapseOne"
                                                                                            aria-expanded="true"
                                                                                            aria-controls="collapseOne"
                                                                                            className="accordion-link">Credit
                            Card</a></strong></div>
                        <div id="collapseOne" role="tabpanel" aria-labelledby="headingOne" data-parent="#accordion"
                             className="collapse show">
                            <div className="block-body">
                                <form action="#">
                                    <div className="row">
                                        <div className="form-group col-md-6">
                                            <label htmlFor="card-name" className="form-label">Name on Card</label>
                                            <input type="text" name="card-name" placeholder="Name on card"
                                                   id="card-name"
                                                   className="form-control"/>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label htmlFor="card-number" className="form-label">Card Number</label>
                                            <input type="text" name="card-number" placeholder="Card number"
                                                   id="card-number"
                                                   className="form-control"/>
                                        </div>
                                        <div className="form-group col-md-4">
                                            <label htmlFor="expiry-date" className="form-label">Expiry Date</label>
                                            <input type="text" name="expiry-date" placeholder="MM/YY" id="expiry-date"
                                                   className="form-control"/>
                                        </div>
                                        <div className="form-group col-md-4">
                                            <label htmlFor="cvv" className="form-label">CVC/CVV</label>
                                            <input type="text" name="cvv" placeholder="123" id="cvv"
                                                   className="form-control"/>
                                        </div>
                                        <div className="form-group col-md-4">
                                            <label htmlFor="zip" className="form-label">ZIP</label>
                                            <input type="text" name="zip" placeholder="123" id="zip"
                                                   className="form-control"/>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="block mb-3">
                        <div id="headingTwo" role="tab" className="block-header"><strong><a data-toggle="collapse"
                                                                                            href="#collapseTwo"
                                                                                            aria-expanded="false"
                                                                                            aria-controls="collapseTwo"
                                                                                            className="accordion-link collapsed">Paypal</a></strong>
                        </div>
                        <div id="collapseTwo" role="tabpanel" aria-labelledby="headingTwo" data-parent="#accordion"
                             className="collapse">
                            <div className="block-body py-5 d-flex align-items-center">
                                <input type="radio" name="shippping" id="payment-method-1"/>
                                <label htmlFor="payment-method-1" className="ml-3"><strong
                                    className="d-block text-uppercase mb-2"> Pay with PayPal</strong><span
                                    className="text-muted text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit.                                          </span></label>
                            </div>
                        </div>
                    </div>
                    <div className="block mb-3">
                        <div id="headingThree" role="tab" className="block-header"><strong>
                            <a data-toggle="collapse"
                               href="#collapseThree"
                               aria-expanded="false"
                               aria-controls="collapseThree"
                               className="accordion-link collapsed">Pay
                                on delivery</a></strong></div>
                        <div id="collapseThree" role="tabpanel" aria-labelledby="headingThree" data-parent="#accordion"
                             className="collapse">
                            <div className="block-body py-5 d-flex align-items-center">
                                <input type="radio" name="shippping" id="payment-method-2"/>
                                <label htmlFor="payment-method-2" className="ml-3"><strong
                                    className="d-block text-uppercase mb-2"> Pay on delivery</strong><span
                                    className="text-muted text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit.    </span></label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mb-5 d-flex justify-content-between flex-column flex-lg-row"><a href="checkout2.html"
                                                                                            className="btn btn-link text-muted">
                <i className="fa fa-angle-left mr-2"></i>Back to the delivery method</a><a href="checkout4.html"
                                                                                           className="btn btn-dark">Continue
                to order review<i className="fa fa-angle-right ml-2"></i></a></div>
        </div>
    )
}
