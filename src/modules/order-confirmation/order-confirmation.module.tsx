import React from 'react'

export default function OrderConfirmationModule() {
    return (<div>
        <section className="hero">
            <div className="container">
                <ol className="breadcrumb justify-content-center">
                    <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                    <li className="breadcrumb-item active">Order confirmed</li>
                </ol>
                <div className="hero-content pb-5 text-center">
                    <h1 className="hero-heading">Order confirmed</h1>
                </div>
            </div>
        </section>
        <section className="pb-5">
            <div className="container text-center">
                <div className="icon-rounded bg-primary mb-3 mx-auto text-white">
                    <svg className="svg-icon w-2rem h-2rem align-middle">
                        <use xlinkHref="#checkmark-1"></use>
                    </svg>
                </div>
                <h4 className="mb-3 ff-base">Thank you, Julie. Your order is confirmed.</h4>
                <p className="text-muted mb-5">Your order hasn't shipped yet but we will send you ane email when it
                    does.</p>
                <p><a href="customer-order.html" className="btn btn-outline-dark">View or manage your order</a></p>
            </div>
        </section>
    </div>)
}
