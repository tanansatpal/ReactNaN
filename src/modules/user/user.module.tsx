import React from 'react'
import {Route, RouteComponentProps, Switch} from "react-router";
import routes from "./UserRoutes";


export default function UserModule({match}: RouteComponentProps) {
    return (<div>
            <section className="hero">
                <div className="container">
                    <ol className="breadcrumb justify-content-center">
                        <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                        <li className="breadcrumb-item active">Orders</li>
                    </ol>
                    <div className="hero-content pb-5 text-center">
                        <h1 className="hero-heading">Your orders</h1>
                        <div className="row">
                            <div className="col-xl-8 offset-xl-2"><p className="lead">Your orders in one place.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-xl-9">
                            <Switch>
                                {routes.map((route, index) => (<Route key={index} {...route} />))}
                            </Switch>
                        </div>
                        <div className="col-xl-3 col-lg-4 mb-5">
                            <div className="customer-sidebar card border-0">
                                <div className="customer-profile"><a href="#" className="d-inline-block">
                                    <img
                                        src="https://d19m59y37dris4.cloudfront.net/sell/1-2-2/img/photo/kyle-loftus-589739-unsplash-avatar.jpg"
                                        className="img-fluid rounded-circle customer-image"/></a>
                                    <h5>Julie Svestkova</h5>
                                    <p className="text-muted text-sm mb-0">Ostrava, Czech republic</p>
                                </div>
                                <nav className="list-group customer-nav">
                                    <a href="customer-orders.html"
                                       className="active list-group-item d-flex justify-content-between align-items-center"><span>
                    <svg className="svg-icon svg-icon-heavy mr-2">
                      <use xlinkHref="#paper-bag-1"> </use>
                    </svg>Orders</span>
                                        <div className="badge badge-pill badge-light font-weight-normal px-3">5</div>
                                    </a><a href="customer-account.html"
                                           className="list-group-item d-flex justify-content-between align-items-center"><span>
                    <svg className="svg-icon svg-icon-heavy mr-2">
                      <use xlinkHref="#male-user-1"> </use>
                    </svg>Profile</span></a><a href="customer-addresses.html"
                                               className="list-group-item d-flex justify-content-between align-items-center"><span>
                    <svg className="svg-icon svg-icon-heavy mr-2">
                      <use xlinkHref="#navigation-map-1"> </use>
                    </svg>Addresses</span></a><a href="customer-login.html"
                                                 className="list-group-item d-flex justify-content-between align-items-center"><span>
                    <svg className="svg-icon svg-icon-heavy mr-2">
                      <use xlinkHref="#exit-1"> </use>
                    </svg>Log out</span></a>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
