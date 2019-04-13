import React from 'react'


function CategoryModule() {
    return (<div>
        <section className="hero">
            <div className="container">
                <ol className="breadcrumb justify-content-center">
                    <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                    <li className="breadcrumb-item active">Jackets and tops</li>
                </ol>
                <div className="hero-content pb-5 text-center">
                    <h1 className="hero-heading">Jackets and tops</h1>
                    <div className="row">
                        <div className="col-xl-8 offset-xl-2"><p className="lead text-muted">Lorem ipsum dolor sit
                            amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p></div>
                    </div>
                </div>
            </div>
        </section>
        <div className="container">
            <div className="row">
                <div className="products-grid col-xl-9 col-lg-8 order-lg-2">
                    <header className="product-grid-header">
                        <div className="mr-3 mb-3">
                            Showing <strong>1-12 </strong>of <strong>158 </strong>products
                        </div>
                        <div className="mr-3 mb-3"><span className="mr-2">Show</span><a href="#"
                                                                                        className="product-grid-header-show active">12 </a><a
                            href="#" className="product-grid-header-show ">24 </a><a href="#"
                                                                                     className="product-grid-header-show ">All </a>
                        </div>
                        <div className="mb-3 d-flex align-items-center"><span
                            className="d-inline-block mr-1">Sort by</span>
                            <select className="custom-select w-auto border-0">
                                <option value="orderby_0">Default</option>
                                <option value="orderby_1">Popularity</option>
                                <option value="orderby_2">Rating</option>
                                <option value="orderby_3">Newest first</option>
                            </select>
                        </div>
                    </header>
                    <div className="row">
                        <div className="col-xl-4 col-sm-6">
                            <div className="product">
                                <div className="product-image">
                                    <div className="ribbon ribbon-info">Fresh</div>
                                    <img
                                        src="https://d19m59y37dris4.cloudfront.net/sell/1-2-2/img/product/serrah-galos-494312-unsplash.jpg"
                                        alt="product" className="img-fluid"/>
                                    <div className="product-hover-overlay">
                                        <a href="detail.html"
                                           className="product-hover-overlay-link"></a>
                                        <div className="product-hover-overlay-buttons">
                                            <a href="#"
                                               className="btn btn-outline-dark btn-product-left"><i
                                                className="fa fa-shopping-cart"></i></a><a href="detail.html"
                                                                                           className="btn btn-dark btn-buy"><i
                                            className="fa-search fa"></i><span
                                            className="btn-buy-label ml-2">View</span></a><a href="#"
                                                                                             data-toggle="modal"
                                                                                             data-target="#exampleModal"
                                                                                             className="btn btn-outline-dark btn-product-right"><i
                                            className="fa fa-expand-arrows-alt"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="py-2">
                                    <p className="text-muted text-sm mb-1">Jackets</p>
                                    <h3 className="h6 text-uppercase mb-1"><a href="detail.html"
                                                                              className="text-dark">White Tee</a>
                                    </h3><span className="text-muted">$40.00</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-sm-6">
                            <div className="product">
                                <div className="product-image"><img
                                    src="https://d19m59y37dris4.cloudfront.net/sell/1-2-2/img/product/kyle-loftus-590881-unsplash.jpg"
                                    alt="product" className="img-fluid"/>
                                    <div className="product-hover-overlay"><a href="detail.html"
                                                                              className="product-hover-overlay-link"></a>
                                        <div className="product-hover-overlay-buttons"><a href="#"
                                                                                          className="btn btn-outline-dark btn-product-left"><i
                                            className="fa fa-shopping-cart"></i></a><a href="detail.html"
                                                                                       className="btn btn-dark btn-buy"><i
                                            className="fa-search fa"></i><span
                                            className="btn-buy-label ml-2">View</span></a><a href="#"
                                                                                             data-toggle="modal"
                                                                                             data-target="#exampleModal"
                                                                                             className="btn btn-outline-dark btn-product-right"><i
                                            className="fa fa-expand-arrows-alt"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="py-2">
                                    <p className="text-muted text-sm mb-1">Denim</p>
                                    <h3 className="h6 text-uppercase mb-1"><a href="detail.html"
                                                                              className="text-dark">Black blouse</a>
                                    </h3><span className="text-muted">$40.00</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-sm-6">
                            <div className="product">
                                <div className="product-image">
                                    <div className="ribbon ribbon-primary">Sale</div>
                                    <img
                                        src="https://d19m59y37dris4.cloudfront.net/sell/1-2-2/img/product/kyle-loftus-596319-unsplash.jpg"
                                        alt="product" className="img-fluid"/>
                                    <div className="product-hover-overlay"><a href="detail.html"
                                                                              className="product-hover-overlay-link"></a>
                                        <div className="product-hover-overlay-buttons"><a href="#"
                                                                                          className="btn btn-outline-dark btn-product-left"><i
                                            className="fa fa-shopping-cart"></i></a><a href="detail.html"
                                                                                       className="btn btn-dark btn-buy"><i
                                            className="fa-search fa"></i><span
                                            className="btn-buy-label ml-2">View</span></a><a href="#"
                                                                                             data-toggle="modal"
                                                                                             data-target="#exampleModal"
                                                                                             className="btn btn-outline-dark btn-product-right"><i
                                            className="fa fa-expand-arrows-alt"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="py-2">
                                    <p className="text-muted text-sm mb-1">Accessories</p>
                                    <h3 className="h6 text-uppercase mb-1"><a href="detail.html"
                                                                              className="text-dark">College
                                        jacket</a></h3><span className="text-muted">$40.00</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-sm-6">
                            <div className="product">
                                <div className="product-image"><img
                                    src="https://d19m59y37dris4.cloudfront.net/sell/1-2-2/img/product/ethan-haddox-484912-unsplash.jpg"
                                    alt="product" className="img-fluid"/>
                                    <div className="product-hover-overlay"><a href="detail.html"
                                                                              className="product-hover-overlay-link"></a>
                                        <div className="product-hover-overlay-buttons"><a href="#"
                                                                                          className="btn btn-outline-dark btn-product-left"><i
                                            className="fa fa-shopping-cart"></i></a><a href="detail.html"
                                                                                       className="btn btn-dark btn-buy"><i
                                            className="fa-search fa"></i><span
                                            className="btn-buy-label ml-2">View</span></a><a href="#"
                                                                                             data-toggle="modal"
                                                                                             data-target="#exampleModal"
                                                                                             className="btn btn-outline-dark btn-product-right"><i
                                            className="fa fa-expand-arrows-alt"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="py-2">
                                    <p className="text-muted text-sm mb-1">Denim</p>
                                    <h3 className="h6 text-uppercase mb-1"><a href="detail.html"
                                                                              className="text-dark">Carrot-fit
                                        jeans</a></h3><span className="text-muted">$40.00</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-sm-6">
                            <div className="product">
                                <div className="product-image"><img
                                    src="https://d19m59y37dris4.cloudfront.net/sell/1-2-2/img/product/serrah-galos-494231-unsplash.jpg"
                                    alt="product" className="img-fluid"/>
                                    <div className="product-hover-overlay"><a href="detail.html"
                                                                              className="product-hover-overlay-link"></a>
                                        <div className="product-hover-overlay-buttons"><a href="#"
                                                                                          className="btn btn-outline-dark btn-product-left"><i
                                            className="fa fa-shopping-cart"></i></a><a href="detail.html"
                                                                                       className="btn btn-dark btn-buy"><i
                                            className="fa-search fa"></i><span
                                            className="btn-buy-label ml-2">View</span></a><a href="#"
                                                                                             data-toggle="modal"
                                                                                             data-target="#exampleModal"
                                                                                             className="btn btn-outline-dark btn-product-right"><i
                                            className="fa fa-expand-arrows-alt"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="py-2">
                                    <p className="text-muted text-sm mb-1">Jackets</p>
                                    <h3 className="h6 text-uppercase mb-1"><a href="detail.html"
                                                                              className="text-dark">Striped
                                        T-Shirt</a></h3><span className="text-muted">$40.00</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-sm-6">
                            <div className="product">
                                <div className="product-image"><img
                                    src="https://d19m59y37dris4.cloudfront.net/sell/1-2-2/img/product/averie-woodard-319832-unsplash.jpg"
                                    alt="product" className="img-fluid"/>
                                    <div className="product-hover-overlay"><a href="detail.html"
                                                                              className="product-hover-overlay-link"></a>
                                        <div className="product-hover-overlay-buttons"><a href="#"
                                                                                          className="btn btn-outline-dark btn-product-left"><i
                                            className="fa fa-shopping-cart"></i></a><a href="detail.html"
                                                                                       className="btn btn-dark btn-buy"><i
                                            className="fa-search fa"></i><span
                                            className="btn-buy-label ml-2">View</span></a><a href="#"
                                                                                             data-toggle="modal"
                                                                                             data-target="#exampleModal"
                                                                                             className="btn btn-outline-dark btn-product-right"><i
                                            className="fa fa-expand-arrows-alt"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="py-2">
                                    <p className="text-muted text-sm mb-1">Shirts</p>
                                    <h3 className="h6 text-uppercase mb-1"><a href="detail.html"
                                                                              className="text-dark">Short top</a>
                                    </h3><span className="text-muted">$40.00</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-sm-6">
                            <div className="product">
                                <div className="product-image">
                                    <div className="ribbon ribbon-danger">Sold out</div>
                                    <img
                                        src="https://d19m59y37dris4.cloudfront.net/sell/1-2-2/img/product/serrah-galos-494279-unsplash.jpg"
                                        alt="product" className="img-fluid"/>
                                    <div className="product-hover-overlay"><a href="detail.html"
                                                                              className="product-hover-overlay-link"></a>
                                        <div className="product-hover-overlay-buttons"><a href="#"
                                                                                          className="btn btn-outline-dark btn-product-left"><i
                                            className="fa fa-shopping-cart"></i></a><a href="detail.html"
                                                                                       className="btn btn-dark btn-buy"><i
                                            className="fa-search fa"></i><span
                                            className="btn-buy-label ml-2">View</span></a><a href="#"
                                                                                             data-toggle="modal"
                                                                                             data-target="#exampleModal"
                                                                                             className="btn btn-outline-dark btn-product-right"><i
                                            className="fa fa-expand-arrows-alt"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="py-2">
                                    <p className="text-muted text-sm mb-1">Sweaters</p>
                                    <h3 className="h6 text-uppercase mb-1"><a href="detail.html"
                                                                              className="text-dark">Ethnic
                                        Sweater</a></h3><span className="text-muted">$40.00</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-sm-6">
                            <div className="product">
                                <div className="product-image"><img
                                    src="https://d19m59y37dris4.cloudfront.net/sell/1-2-2/img/product/dmitriy-ilkevich-437760-unsplash.jpg"
                                    alt="product" className="img-fluid"/>
                                    <div className="product-hover-overlay"><a href="detail.html"
                                                                              className="product-hover-overlay-link"></a>
                                        <div className="product-hover-overlay-buttons"><a href="#"
                                                                                          className="btn btn-outline-dark btn-product-left"><i
                                            className="fa fa-shopping-cart"></i></a><a href="detail.html"
                                                                                       className="btn btn-dark btn-buy"><i
                                            className="fa-search fa"></i><span
                                            className="btn-buy-label ml-2">View</span></a><a href="#"
                                                                                             data-toggle="modal"
                                                                                             data-target="#exampleModal"
                                                                                             className="btn btn-outline-dark btn-product-right"><i
                                            className="fa fa-expand-arrows-alt"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="py-2">
                                    <p className="text-muted text-sm mb-1">Coats</p>
                                    <h3 className="h6 text-uppercase mb-1"><a href="detail.html"
                                                                              className="text-dark">Beige</a></h3>
                                    <span className="text-muted">$40.00</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-sm-6">
                            <div className="product">
                                <div className="product-image"><img
                                    src="https://d19m59y37dris4.cloudfront.net/sell/1-2-2/img/product/ian-dooley-347968-unsplash.jpg"
                                    alt="product" className="img-fluid"/>
                                    <div className="product-hover-overlay"><a href="detail.html"
                                                                              className="product-hover-overlay-link"></a>
                                        <div className="product-hover-overlay-buttons"><a href="#"
                                                                                          className="btn btn-outline-dark btn-product-left"><i
                                            className="fa fa-shopping-cart"></i></a><a href="detail.html"
                                                                                       className="btn btn-dark btn-buy"><i
                                            className="fa-search fa"></i><span
                                            className="btn-buy-label ml-2">View</span></a><a href="#"
                                                                                             data-toggle="modal"
                                                                                             data-target="#exampleModal"
                                                                                             className="btn btn-outline-dark btn-product-right"><i
                                            className="fa fa-expand-arrows-alt"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="py-2">
                                    <p className="text-muted text-sm mb-1">T-Shirts</p>
                                    <h3 className="h6 text-uppercase mb-1"><a href="detail.html"
                                                                              className="text-dark">Skull Tee</a>
                                    </h3><span className="text-muted">$40.00</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-sm-6">
                            <div className="product">
                                <div className="product-image"><img
                                    src="https://d19m59y37dris4.cloudfront.net/sell/1-2-2/img/product/alex-holyoake-571682-unsplash.jpg"
                                    alt="product" className="img-fluid"/>
                                    <div className="product-hover-overlay"><a href="detail.html"
                                                                              className="product-hover-overlay-link"></a>
                                        <div className="product-hover-overlay-buttons"><a href="#"
                                                                                          className="btn btn-outline-dark btn-product-left"><i
                                            className="fa fa-shopping-cart"></i></a><a href="detail.html"
                                                                                       className="btn btn-dark btn-buy"><i
                                            className="fa-search fa"></i><span
                                            className="btn-buy-label ml-2">View</span></a><a href="#"
                                                                                             data-toggle="modal"
                                                                                             data-target="#exampleModal"
                                                                                             className="btn btn-outline-dark btn-product-right"><i
                                            className="fa fa-expand-arrows-alt"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="py-2">
                                    <p className="text-muted text-sm mb-1">Denim</p>
                                    <h3 className="h6 text-uppercase mb-1"><a href="detail.html"
                                                                              className="text-dark">Trucker
                                        jacket</a></h3><span className="text-muted">$40.00</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-sm-6">
                            <div className="product">
                                <div className="product-image"><img
                                    src="https://d19m59y37dris4.cloudfront.net/sell/1-2-2/img/product/ao-456813-unsplash.jpg"
                                    alt="product" className="img-fluid"/>
                                    <div className="product-hover-overlay"><a href="detail.html"
                                                                              className="product-hover-overlay-link"></a>
                                        <div className="product-hover-overlay-buttons"><a href="#"
                                                                                          className="btn btn-outline-dark btn-product-left"><i
                                            className="fa fa-shopping-cart"></i></a><a href="detail.html"
                                                                                       className="btn btn-dark btn-buy"><i
                                            className="fa-search fa"></i><span
                                            className="btn-buy-label ml-2">View</span></a><a href="#"
                                                                                             data-toggle="modal"
                                                                                             data-target="#exampleModal"
                                                                                             className="btn btn-outline-dark btn-product-right"><i
                                            className="fa fa-expand-arrows-alt"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="py-2">
                                    <p className="text-muted text-sm mb-1">Denim</p>
                                    <h3 className="h6 text-uppercase mb-1"><a href="detail.html"
                                                                              className="text-dark">Blouse</a></h3>
                                    <span className="text-muted">$40.00</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-sm-6">
                            <div className="product">
                                <div className="product-image"><img
                                    src="https://d19m59y37dris4.cloudfront.net/sell/1-2-2/img/product/kyle-loftus-592041-unsplash.jpg"
                                    alt="product" className="img-fluid"/>
                                    <div className="product-hover-overlay"><a href="detail.html"
                                                                              className="product-hover-overlay-link"></a>
                                        <div className="product-hover-overlay-buttons"><a href="#"
                                                                                          className="btn btn-outline-dark btn-product-left"><i
                                            className="fa fa-shopping-cart"></i></a><a href="detail.html"
                                                                                       className="btn btn-dark btn-buy"><i
                                            className="fa-search fa"></i><span
                                            className="btn-buy-label ml-2">View</span></a><a href="#"
                                                                                             data-toggle="modal"
                                                                                             data-target="#exampleModal"
                                                                                             className="btn btn-outline-dark btn-product-right"><i
                                            className="fa fa-expand-arrows-alt"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="py-2">
                                    <p className="text-muted text-sm mb-1">Denim</p>
                                    <h3 className="h6 text-uppercase mb-1"><a href="detail.html"
                                                                              className="text-dark">Shirt</a></h3>
                                    <span className="text-muted">$40.00</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <nav aria-label="page navigation" className="d-flex justify-content-center mb-5 mt-3">
                        <ul className="pagination">
                            <li className="page-item"><a href="#" aria-label="Previous" className="page-link"><span
                                aria-hidden="true">Prev</span><span className="sr-only">Previous</span></a></li>
                            <li className="page-item active"><a href="#" className="page-link">1 </a></li>
                            <li className="page-item"><a href="#" className="page-link">2 </a></li>
                            <li className="page-item"><a href="#" className="page-link">3 </a></li>
                            <li className="page-item"><a href="#" className="page-link">4 </a></li>
                            <li className="page-item"><a href="#" className="page-link">5 </a></li>
                            <li className="page-item"><a href="#" aria-label="Next" className="page-link"><span
                                aria-hidden="true">Next</span><span className="sr-only">Next     </span></a></li>
                        </ul>
                    </nav>
                </div>
                <div className="sidebar col-xl-3 col-lg-4 order-lg-1">
                    <div className="sidebar-block px-3 px-lg-0 mr-lg-4">
                        <a data-toggle="collapse"
                           href="#categoriesMenu"
                           aria-expanded="false"
                           aria-controls="categoriesMenu"
                           className="d-lg-none block-toggler">Product
                            Categories</a>
                        <div id="categoriesMenu" className="expand-lg collapse">
                            <div className="nav nav-pills flex-column mt-4 mt-lg-0"><a href="#"
                                                                                       className="nav-link d-flex justify-content-between mb-2 "><span>Jackets</span><span
                                className="sidebar-badge"> 120</span></a>
                                <div className="nav nav-pills flex-column ml-3"><a href="#"
                                                                                   className="nav-link mb-2">Lorem
                                    ipsum</a><a href="#" className="nav-link mb-2">Dolor</a><a href="#"
                                                                                               className="nav-link mb-2">Sit
                                    amet</a><a href="#" className="nav-link mb-2">Donec vitae</a>
                                </div>
                                <a href="#"
                                   className="nav-link d-flex justify-content-between mb-2 active"><span>Jeans &amp; chinos</span><span
                                    className="sidebar-badge"> 55</span></a>
                                <div className="nav nav-pills flex-column ml-3"><a href="#"
                                                                                   className="nav-link mb-2">Lorem
                                    ipsum</a><a href="#" className="nav-link mb-2">Dolor</a><a href="#"
                                                                                               className="nav-link mb-2">Sit
                                    amet</a><a href="#" className="nav-link mb-2">Donec vitae</a>
                                </div>
                                <a href="#"
                                   className="nav-link d-flex justify-content-between mb-2 "><span>Accessories</span><span
                                    className="sidebar-badge"> 80</span></a>
                                <div className="nav nav-pills flex-column ml-3"><a href="#"
                                                                                   className="nav-link mb-2">Sit
                                    amet</a><a href="#" className="nav-link mb-2">Donec vitae</a><a href="#"
                                                                                                    className="nav-link mb-2">Lorem
                                    ipsum</a><a href="#" className="nav-link mb-2">Dolor</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sidebar-block px-3 px-lg-0 mr-lg-4"><a data-toggle="collapse"
                                                                           href="#priceFilterMenu"
                                                                           aria-expanded="false"
                                                                           aria-controls="priceFilterMenu"
                                                                           className="d-lg-none block-toggler">Filter
                        by price</a>
                        <div id="priceFilterMenu" className="expand-lg collapse">
                            <h6 className="sidebar-heading d-none d-lg-block">Price </h6>
                            <div id="slider-snap" className="mt-4 mt-lg-0"></div>
                            <div className="nouislider-values">
                                <div className="min">From $<span id="slider-snap-value-lower"></span></div>
                                <div className="max">To $<span id="slider-snap-value-upper"></span></div>
                            </div>
                        </div>
                    </div>
                    <div className="sidebar-block px-3 px-lg-0 mr-lg-4">
                        <a data-toggle="collapse"
                           href="#brandFilterMenu"
                           aria-expanded="true"
                           aria-controls="brandFilterMenu"
                           className="d-lg-none block-toggler">Filter
                            by brand</a>
                        <div id="brandFilterMenu" className="expand-lg collapse show">
                            <h6 className="sidebar-heading d-none d-lg-block">Brands </h6>
                            <form action="#" className="mt-4 mt-lg-0">
                                <div className="form-group mb-1">
                                    <div className="custom-control custom-checkbox">
                                        <input id="brand0" type="checkbox" name="clothes-brand" checked
                                               className="custom-control-input"/>
                                        <label htmlFor="brand0" className="custom-control-label">Calvin
                                            Klein <small>(18)</small></label>
                                    </div>
                                </div>
                                <div className="form-group mb-1">
                                    <div className="custom-control custom-checkbox">
                                        <input id="brand1" type="checkbox" name="clothes-brand" checked
                                               className="custom-control-input"/>
                                        <label htmlFor="brand1" className="custom-control-label">Levi
                                            Strauss <small>(30)</small></label>
                                    </div>
                                </div>
                                <div className="form-group mb-1">
                                    <div className="custom-control custom-checkbox">
                                        <input id="brand2" type="checkbox" name="clothes-brand"
                                               className="custom-control-input"/>
                                        <label htmlFor="brand2" className="custom-control-label">Hugo
                                            Boss <small>(120)</small></label>
                                    </div>
                                </div>
                                <div className="form-group mb-1">
                                    <div className="custom-control custom-checkbox">
                                        <input id="brand3" type="checkbox" name="clothes-brand"
                                               className="custom-control-input"/>
                                        <label htmlFor="brand3" className="custom-control-label">Tomi
                                            Hilfiger <small>(70)</small></label>
                                    </div>
                                </div>
                                <div className="form-group mb-1">
                                    <div className="custom-control custom-checkbox">
                                        <input id="brand4" type="checkbox" name="clothes-brand"
                                               className="custom-control-input"/>
                                        <label htmlFor="brand4" className="custom-control-label">Tom
                                            Ford <small>(110)</small></label>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="sidebar-block px-3 px-lg-0 mr-lg-4"><a data-toggle="collapse"
                                                                           href="#sizeFilterMenu"
                                                                           aria-expanded="false"
                                                                           aria-controls="sizeFilterMenu"
                                                                           className="d-lg-none block-toggler">Filter
                        by size</a>
                        <div id="sizeFilterMenu" className="expand-lg collapse">
                            <h6 className="sidebar-heading d-none d-lg-block">Size </h6>
                            <form action="#" className="mt-4 mt-lg-0">
                                <div className="form-group mb-1">
                                    <div className="custom-control custom-radio">
                                        <input id="size0" type="radio" name="size" checked
                                               className="custom-control-input"/>
                                        <label htmlFor="size0" className="custom-control-label">Small</label>
                                    </div>
                                </div>
                                <div className="form-group mb-1">
                                    <div className="custom-control custom-radio">
                                        <input id="size1" type="radio" name="size"
                                               className="custom-control-input"/>
                                        <label htmlFor="size1" className="custom-control-label">Medium</label>
                                    </div>
                                </div>
                                <div className="form-group mb-1">
                                    <div className="custom-control custom-radio">
                                        <input id="size2" type="radio" name="size"
                                               className="custom-control-input"/>
                                        <label htmlFor="size2" className="custom-control-label">Large</label>
                                    </div>
                                </div>
                                <div className="form-group mb-1">
                                    <div className="custom-control custom-radio">
                                        <input id="size3" type="radio" name="size"
                                               className="custom-control-input"/>
                                        <label htmlFor="size3" className="custom-control-label">X-Large</label>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="sidebar-block px-3 px-lg-0 mr-lg-4"><a data-toggle="collapse"
                                                                           href="#colourFilterMenu"
                                                                           aria-expanded="false"
                                                                           aria-controls="colourFilterMenu"
                                                                           className="d-lg-none block-toggler">Filter
                        by colour</a>
                        <div id="colourFilterMenu" className="expand-lg collapse">
                            <h6 className="sidebar-heading d-none d-lg-block">Colour </h6>
                            <div className="mt-4 mt-lg-0">
                                <ul className="list-inline mb-0 colours-wrapper">
                                    <li className="list-inline-item">
                                        <label htmlFor="colour_sidebar_Blue" style={{backgroundColor: "#668cb9"}}
                                               data-allow-multiple className="btn-colour"> </label>
                                        <input type="checkbox" name="colour" value="value_sidebar_Blue"
                                               id="colour_sidebar_Blue" className="input-invisible"/>
                                    </li>
                                    <li className="list-inline-item">
                                        <label htmlFor="colour_sidebar_White" style={{backgroundColor: "#fff"}}
                                               data-allow-multiple className="btn-colour"> </label>
                                        <input type="checkbox" name="colour" value="value_sidebar_White"
                                               id="colour_sidebar_White" className="input-invisible"/>
                                    </li>
                                    <li className="list-inline-item">
                                        <label htmlFor="colour_sidebar_Violet" style={{backgroundColor: "#8b6ea4"}}
                                               data-allow-multiple className="btn-colour"> </label>
                                        <input type="checkbox" name="colour" value="value_sidebar_Violet"
                                               id="colour_sidebar_Violet" className="input-invisible"/>
                                    </li>
                                    <li className="list-inline-item">
                                        <label htmlFor="colour_sidebar_Red" style={{backgroundColor: "#dd6265"}}
                                               data-allow-multiple className="btn-colour"> </label>
                                        <input type="checkbox" name="colour" value="value_sidebar_Red"
                                               id="colour_sidebar_Red" className="input-invisible"/>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}


export default CategoryModule;
