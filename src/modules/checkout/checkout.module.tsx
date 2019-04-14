import React from 'react'
import {Route, RouteComponentProps, Switch} from "react-router";
import routes from "./CheckoutRoutes";


export default function CheckoutModule({match}: RouteComponentProps) {
    return (<div>
            <section className="hero">
                <div className="container">
                    <ol className="breadcrumb justify-content-center">
                        <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                        <li className="breadcrumb-item active">Checkout</li>
                    </ol>
                    <div className="hero-content pb-5 text-center">
                        <h1 className="hero-heading">Checkout</h1>
                        <div className="row">
                            <div className="col-xl-8 offset-xl-2"><p className="lead text-muted">Please fill in your
                                address.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <Switch>
                                {routes.map((route, index) => (<Route key={index} {...route} />))}
                            </Switch>
                        </div>
                        <div className="col-lg-4">
                            <div className="block mb-5">
                                <div className="block-header">
                                    <h6 className="text-uppercase mb-0">Order Summary</h6>
                                </div>
                                <div className="block-body bg-light pt-1">
                                    <p className="text-sm">Shipping and additional costs are calculated based on values
                                        you
                                        have
                                        entered.</p>
                                    <ul className="order-summary mb-0 list-unstyled">
                                        <li className="order-summary-item">
                                            <span>Order Subtotal </span><span>$390.00</span>
                                        </li>
                                        <li className="order-summary-item">
                                            <span>Shipping and handling</span><span>$10.00</span>
                                        </li>
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
        </div>
    )
}
