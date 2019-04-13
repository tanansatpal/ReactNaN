import React from 'react'

export default function ProductModule() {

    return (<div>
            <section className="product-details">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 pt-4 order-2 order-lg-1">
                            <div className="row">
                                <div className="col-2 pr-0">
                                    <div data-slider-id="1" className="owl-thumbs">
                                        <button className="owl-thumb-item detail-thumb-item mb-3"><img
                                            src="https://d19m59y37dris4.cloudfront.net/sell/1-2-2/img/photo/kyle-loftus-596319-detail-1.jpg"
                                            alt="Modern Jacket 0" className="img-fluid"/></button>
                                        <button className="owl-thumb-item detail-thumb-item mb-3"><img
                                            src="https://d19m59y37dris4.cloudfront.net/sell/1-2-2/img/photo/kyle-loftus-596319-detail-2.jpg"
                                            alt="Modern Jacket 1" className="img-fluid"/></button>
                                        <button className="owl-thumb-item detail-thumb-item mb-3"><img
                                            src="https://d19m59y37dris4.cloudfront.net/sell/1-2-2/img/photo/kyle-loftus-596319-detail-3.jpg"
                                            alt="Modern Jacket 2" className="img-fluid"/></button>
                                        <button className="owl-thumb-item detail-thumb-item mb-3"><img
                                            src="https://d19m59y37dris4.cloudfront.net/sell/1-2-2/img/photo/kyle-loftus-594535-unsplash-detail-3.jpg"
                                            alt="Modern Jacket 3" className="img-fluid"/></button>
                                        <button className="owl-thumb-item detail-thumb-item mb-3"><img
                                            src="https://d19m59y37dris4.cloudfront.net/sell/1-2-2/img/photo/kyle-loftus-594535-unsplash-detail-4.jpg"
                                            alt="Modern Jacket 4" className="img-fluid"/></button>
                                    </div>
                                </div>
                                <div className="col-10 detail-carousel">
                                    <div className="ribbon ribbon-info">Fresh</div>
                                    <div className="ribbon ribbon-primary">Sale</div>
                                    <div data-slider-id="1" className="owl-carousel detail-slider">
                                        <div className="item"><a href="img/photo/kyle-loftus-596319-detail-1.jpg"
                                                                 data-footer="Modern Jacket 1 - Caption text"
                                                                 data-toggle="lightbox"
                                                                 data-gallery="product-gallery"><img
                                            src="https://d19m59y37dris4.cloudfront.net/sell/1-2-2/img/photo/kyle-loftus-596319-detail-1.jpg"
                                            alt="Modern Jacket 1" className="img-fluid"/></a></div>
                                        <div className="item"><a href="img/photo/kyle-loftus-596319-detail-2.jpg"
                                                                 data-footer="Modern Jacket 2 - Caption text"
                                                                 data-toggle="lightbox"
                                                                 data-gallery="product-gallery"><img
                                            src="https://d19m59y37dris4.cloudfront.net/sell/1-2-2/img/photo/kyle-loftus-596319-detail-2.jpg"
                                            alt="Modern Jacket 2" className="img-fluid"/></a></div>
                                        <div className="item"><a href="img/photo/kyle-loftus-596319-detail-3.jpg"
                                                                 data-footer="Modern Jacket 3 - Caption text"
                                                                 data-toggle="lightbox"
                                                                 data-gallery="product-gallery"><img
                                            src="https://d19m59y37dris4.cloudfront.net/sell/1-2-2/img/photo/kyle-loftus-596319-detail-3.jpg"
                                            alt="Modern Jacket 3" className="img-fluid"/></a></div>
                                        <div className="item"><a
                                            href="img/photo/kyle-loftus-594535-unsplash-detail-3.jpg"
                                            data-footer="Modern Jacket 4 - Caption text"
                                            data-toggle="lightbox" data-gallery="product-gallery"><img
                                            src="https://d19m59y37dris4.cloudfront.net/sell/1-2-2/img/photo/kyle-loftus-594535-unsplash-detail-3.jpg"
                                            alt="Modern Jacket 4" className="img-fluid"/></a></div>
                                        <div className="item"><a
                                            href="img/photo/kyle-loftus-594535-unsplash-detail-4.jpg"
                                            data-footer="Modern Jacket 5 - Caption text"
                                            data-toggle="lightbox" data-gallery="product-gallery"><img
                                            src="https://d19m59y37dris4.cloudfront.net/sell/1-2-2/img/photo/kyle-loftus-594535-unsplash-detail-4.jpg"
                                            alt="Modern Jacket 5" className="img-fluid"/></a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 pl-lg-4 order-1 order-lg-2">
                            <ul className="breadcrumb undefined">
                                <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                                <li className="breadcrumb-item"><a href="category.html">Tops and Jackets</a></li>
                                <li className="breadcrumb-item active">Modern Jacket</li>
                            </ul>
                            <h1 className="mb-4">Modern Jacket</h1>
                            <div
                                className="d-flex flex-column flex-sm-row align-items-sm-center justify-content-sm-between mb-4">
                                <ul className="list-inline mb-2 mb-sm-0">
                                    <li className="list-inline-item h4 font-weight-light mb-0">$65.00</li>
                                    <li className="list-inline-item text-muted font-weight-light">
                                        <del>$90.00</del>
                                    </li>
                                </ul>
                                <div className="d-flex align-items-center">
                                    <ul className="list-inline mr-2 mb-0">
                                        <li className="list-inline-item mr-0"><i
                                            className="fa fa-star text-primary"></i>
                                        </li>
                                        <li className="list-inline-item mr-0"><i
                                            className="fa fa-star text-primary"></i>
                                        </li>
                                        <li className="list-inline-item mr-0"><i
                                            className="fa fa-star text-primary"></i>
                                        </li>
                                        <li className="list-inline-item mr-0"><i
                                            className="fa fa-star text-primary"></i>
                                        </li>
                                        <li className="list-inline-item mr-0"><i
                                            className="fa fa-star text-gray-300"></i>
                                        </li>
                                    </ul>
                                    <span className="text-muted text-uppercase text-sm">25 reviews</span>
                                </div>
                            </div>
                            <p className="mb-4 text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                quis
                                nostrud exercitation ullamco</p>
                            <form action="#">
                                <div className="row">
                                    <div className="col-sm-6 col-lg-12 detail-option mb-3">
                                        <h6 className="detail-option-heading">Size <span>(required)</span></h6>
                                        <label htmlFor="size_0"
                                               className="btn btn-sm btn-outline-secondary detail-option-btn-label">
                                            Small
                                            <input type="radio" name="size" value="value_0" id="size_0" required
                                                   className="input-invisible"/>
                                        </label>
                                        <label htmlFor="size_1"
                                               className="btn btn-sm btn-outline-secondary detail-option-btn-label">

                                            Medium
                                            <input type="radio" name="size" value="value_1" id="size_1" required
                                                   className="input-invisible"/>
                                        </label>
                                        <label htmlFor="size_2"
                                               className="btn btn-sm btn-outline-secondary detail-option-btn-label">

                                            Large
                                            <input type="radio" name="size" value="value_2" id="size_2" required
                                                   className="input-invisible"/>
                                        </label>
                                    </div>
                                    <div className="col-sm-6 col-lg-12 detail-option mb-3">
                                        <h6 className="detail-option-heading">Type <span>(required)</span></h6>
                                        <label htmlFor="material_0"
                                               className="btn btn-sm btn-outline-secondary detail-option-btn-label">

                                            Hoodie
                                            <input type="radio" name="material" value="value_0" id="material_0" required
                                                   className="input-invisible"/>
                                        </label>
                                        <label htmlFor="material_1"
                                               className="btn btn-sm btn-outline-secondary detail-option-btn-label">

                                            College
                                            <input type="radio" name="material" value="value_1" id="material_1" required
                                                   className="input-invisible"/>
                                        </label>
                                    </div>
                                    <div className="col-12 detail-option mb-3">
                                        <h6 className="detail-option-heading">Colour <span>(required)</span></h6>
                                        <ul className="list-inline mb-0 colours-wrapper">
                                            <li className="list-inline-item">
                                                <label htmlFor="colour_Blue" style={{backgroundColor: "#668cb9"}}
                                                       className="btn-colour"> </label>
                                                <input type="radio" name="colour" value="value_Blue" id="colour_Blue"
                                                       required className="input-invisible"/>
                                            </li>
                                            <li className="list-inline-item">
                                                <label htmlFor="colour_White" style={{backgroundColor: "#fff"}}
                                                       className="btn-colour"> </label>
                                                <input type="radio" name="colour" value="value_White" id="colour_White"
                                                       required className="input-invisible"/>
                                            </li>
                                            <li className="list-inline-item">
                                                <label htmlFor="colour_Violet" style={{backgroundColor: "#8b6ea4"}}
                                                       className="btn-colour"> </label>
                                                <input type="radio" name="colour" value="value_Violet"
                                                       id="colour_Violet"
                                                       required className="input-invisible"/>
                                            </li>
                                            <li className="list-inline-item">
                                                <label htmlFor="colour_Red" style={{backgroundColor: "#dd6265"}}
                                                       className="btn-colour"> </label>
                                                <input type="radio" name="colour" value="value_Red" id="colour_Red"
                                                       required
                                                       className="input-invisible"/>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-12 detail-option mb-5">
                                        <label
                                            className="detail-option-heading font-weight-bold">Items <span>(required)</span></label>
                                        <input name="items" type="number" value="1"
                                               className="form-control detail-quantity"/>
                                    </div>
                                </div>
                                <ul className="list-inline">
                                    <li className="list-inline-item">
                                        <button type="submit" className="btn btn-dark btn-lg mb-1"><i
                                            className="fa fa-shopping-cart mr-2"></i>Add to Cart
                                        </button>
                                    </li>
                                    <li className="list-inline-item"><a href="#"
                                                                        className="btn btn-outline-secondary mb-1">
                                        <i className="far fa-heart mr-2"></i>Add to wishlist</a></li>
                                </ul>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <section className="mt-5">
                <div className="container">
                    <ul role="tablist" className="nav nav-tabs flex-column flex-sm-row">
                        <li className="nav-item"><a data-toggle="tab" href="#description" role="tab"
                                                    className="nav-link detail-nav-link active">Description</a></li>
                        <li className="nav-item"><a data-toggle="tab" href="#additional-information" role="tab"
                                                    className="nav-link detail-nav-link">Additional Information</a></li>
                        <li className="nav-item"><a data-toggle="tab" href="#reviews" role="tab"
                                                    className="nav-link detail-nav-link">Reviews</a></li>
                    </ul>
                    <div className="tab-content py-4">
                        <div id="description" role="tabpanel" className="tab-pane active px-3">
                            <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. LOLUt enim ad minim veniam,
                                quis
                                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. LOLDuis
                                aute
                                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur.
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                                mollit
                                anim id est laborum.</p>
                            <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. LOLUt enim ad minim veniam,
                                quis
                                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. LOLDuis
                                aute
                                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur.
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                                mollit
                                anim id est laborum.</p>
                        </div>
                        <div id="additional-information" role="tabpanel" className="tab-pane">
                            <div className="row">
                                <div className="col-lg-6">
                                    <table className="table text-sm">
                                        <tbody>
                                        <tr>
                                            <th className="text-uppercase font-weight-normal border-0">Product #</th>
                                            <td className="text-muted border-0">Lorem ipsum dolor sit amet</td>
                                        </tr>
                                        <tr>
                                            <th className="text-uppercase font-weight-normal ">Available packaging</th>
                                            <td className="text-muted ">LOLDuis aute irure dolor in reprehenderit</td>
                                        </tr>
                                        <tr>
                                            <th className="text-uppercase font-weight-normal ">Weight</th>
                                            <td className="text-muted ">dolor sit amet</td>
                                        </tr>
                                        <tr>
                                            <th className="text-uppercase font-weight-normal ">Sunt in culpa qui</th>
                                            <td className="text-muted ">Lorem ipsum dolor sit amet</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="col-lg-6">
                                    <table className="table text-sm">
                                        <tbody>
                                        <tr>
                                            <th className="text-uppercase font-weight-normal border-0">Weight</th>
                                            <td className="text-muted border-0">dolor sit amet</td>
                                        </tr>
                                        <tr>
                                            <th className="text-uppercase font-weight-normal ">Sunt in culpa qui</th>
                                            <td className="text-muted ">Lorem ipsum dolor sit amet</td>
                                        </tr>
                                        <tr>
                                            <th className="text-uppercase font-weight-normal ">Product #</th>
                                            <td className="text-muted ">Lorem ipsum dolor sit amet</td>
                                        </tr>
                                        <tr>
                                            <th className="text-uppercase font-weight-normal ">Available packaging</th>
                                            <td className="text-muted ">LOLDuis aute irure dolor in reprehenderit</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div id="reviews" role="tabpanel" className="tab-pane">
                            <div className="row mb-5">
                                <div className="col-lg-10 col-xl-9">
                                    <div className="media review">
                                        <div className="text-center mr-4 mr-xl-5"><img
                                            src="https://d19m59y37dris4.cloudfront.net/sell/1-2-2/img/person-1.jpg"
                                            alt="Han Solo" className="review-image"/><span
                                            className="text-uppercase text-muted">Dec 2018</span></div>
                                        <div className="media-body">
                                            <h5 className="mt-2 mb-1">Han Solo</h5>
                                            <div className="mb-2"><i className="fa fa-xs fa-star text-warning"></i><i
                                                className="fa fa-xs fa-star text-warning"></i><i
                                                className="fa fa-xs fa-star text-warning"></i><i
                                                className="fa fa-xs fa-star text-warning"></i><i
                                                className="fa fa-xs fa-star text-warning"></i>
                                            </div>
                                            <p className="text-muted">One morning, when Gregor Samsa woke from troubled
                                                dreams, he found himself transformed in his bed into a horrible vermin.
                                                He
                                                lay on his armour-like back, and if he lifted his head a little he could
                                                see
                                                his brown belly, slightly domed and divided by arches into stiff
                                                sections </p>
                                        </div>
                                    </div>
                                    <div className="media review">
                                        <div className="text-center mr-4 mr-xl-5"><img
                                            src="https://d19m59y37dris4.cloudfront.net/sell/1-2-2/img/person-2.jpg"
                                            alt="Luke Skywalker" className="review-image"/><span
                                            className="text-uppercase text-muted">Dec 2018</span></div>
                                        <div className="media-body">
                                            <h5 className="mt-2 mb-1">Luke Skywalker</h5>
                                            <div className="mb-2"><i className="fa fa-xs fa-star text-warning"></i><i
                                                className="fa fa-xs fa-star text-warning"></i><i
                                                className="fa fa-xs fa-star text-warning"></i><i
                                                className="fa fa-xs fa-star text-warning"></i><i
                                                className="fa fa-xs fa-star text-gray-200"></i>
                                            </div>
                                            <p className="text-muted">The bedding was hardly able to cover it and seemed
                                                ready to slide off any moment. His many legs, pitifully thin compared
                                                with
                                                the size of the rest of him, waved about helplessly as he
                                                looked. &quot;What's happened to me?&quot; he thought. It wasn't a
                                                dream. </p>
                                        </div>
                                    </div>
                                    <div className="media review">
                                        <div className="text-center mr-4 mr-xl-5"><img
                                            src="https://d19m59y37dris4.cloudfront.net/sell/1-2-2/img/person-3.jpg"
                                            alt="Princess Leia" className="review-image"/><span
                                            className="text-uppercase text-muted">Dec 2018</span></div>
                                        <div className="media-body">
                                            <h5 className="mt-2 mb-1">Princess Leia</h5>
                                            <div className="mb-2"><i className="fa fa-xs fa-star text-warning"></i><i
                                                className="fa fa-xs fa-star text-warning"></i><i
                                                className="fa fa-xs fa-star text-warning"></i><i
                                                className="fa fa-xs fa-star text-gray-200"></i><i
                                                className="fa fa-xs fa-star text-gray-200"></i>
                                            </div>
                                            <p className="text-muted">His room, a proper human room although a little
                                                too
                                                small, lay peacefully between its four familiar walls. A collection of
                                                textile samples lay spread out on the table. </p>
                                        </div>
                                    </div>
                                    <div className="media review">
                                        <div className="text-center mr-4 mr-xl-5"><img
                                            src="https://d19m59y37dris4.cloudfront.net/sell/1-2-2/img/person-4.jpg"
                                            alt="Jabba Hut" className="review-image"/><span
                                            className="text-uppercase text-muted">Dec 2018</span></div>
                                        <div className="media-body">
                                            <h5 className="mt-2 mb-1">Jabba Hut</h5>
                                            <div className="mb-2"><i className="fa fa-xs fa-star text-warning"></i><i
                                                className="fa fa-xs fa-star text-warning"></i><i
                                                className="fa fa-xs fa-star text-warning"></i><i
                                                className="fa fa-xs fa-star text-warning"></i><i
                                                className="fa fa-xs fa-star text-warning"></i>
                                            </div>
                                            <p className="text-muted">Samsa was a travelling salesman - and above it
                                                there
                                                hung a picture that he had recently cut out of an illustrated magazine
                                                and
                                                housed in a nice, gilded frame. </p>
                                        </div>
                                    </div>
                                    <div className="py-5 px-3">
                                        <h5 className="text-uppercase mb-4">Leave a review</h5>
                                        <form id="contact-form" method="post" action="contact.php" className="form">
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <div className="form-group">
                                                        <label htmlFor="name" className="form-label">Your name *</label>
                                                        <input type="text" name="name" id="name"
                                                               placeholder="Enter your name" required
                                                               className="form-control"/>
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="form-group">
                                                        <label htmlFor="rating" className="form-label">Your rating
                                                            *</label>
                                                        <select name="rating" id="rating"
                                                                className="custom-select focus-shadow-0">
                                                            <option value="5">&#9733;&#9733;&#9733;&#9733;&#9733; (5/5)
                                                            </option>
                                                            <option value="4">&#9733;&#9733;&#9733;&#9733;&#9734; (4/5)
                                                            </option>
                                                            <option value="3">&#9733;&#9733;&#9733;&#9734;&#9734; (3/5)
                                                            </option>
                                                            <option value="2">&#9733;&#9733;&#9734;&#9734;&#9734; (2/5)
                                                            </option>
                                                            <option value="1">&#9733;&#9734;&#9734;&#9734;&#9734; (1/5)
                                                            </option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="email" className="form-label">Your email *</label>
                                                <input type="email" name="email" id="email"
                                                       placeholder="Enter your  email"
                                                       required className="form-control"/>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="review" className="form-label">Review text *</label>
                                                <textarea rows={4} name="review" id="review"
                                                          placeholder="Enter your review"
                                                          required className="form-control"></textarea>
                                            </div>
                                            <button type="submit" className="btn btn-outline-dark">Post review</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="my-5">
                <div className="container">
                    <header className="text-center">
                        <h6 className="text-uppercase mb-5">You might also like</h6>
                    </header>
                    <div className="row">
                        <div className="col-lg-2 col-md-4 col-6">
                            <div className="product">
                                <div className="product-image">
                                    <div className="ribbon ribbon-info">Fresh</div>
                                    <img
                                        src="https://d19m59y37dris4.cloudfront.net/sell/1-2-2/img/product/serrah-galos-494312-unsplash.jpg"
                                        alt="product" className="img-fluid"/>
                                    <div className="product-hover-overlay"><a href="detail.html"
                                                                              className="product-hover-overlay-link"></a>
                                        <div className="product-hover-overlay-buttons"><a href="detail.html"
                                                                                          className="btn btn-dark btn-buy"><i
                                            className="fa-search fa"></i><span
                                            className="btn-buy-label ml-2">View</span></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="py-2">
                                    <p className="text-muted text-sm mb-1">Jackets</p>
                                    <h3 className="h6 text-uppercase mb-1"><a href="detail.html" className="text-dark">White
                                        Tee</a></h3><span className="text-muted">$40.00</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-6">
                            <div className="product">
                                <div className="product-image"><img
                                    src="https://d19m59y37dris4.cloudfront.net/sell/1-2-2/img/product/kyle-loftus-590881-unsplash.jpg"
                                    alt="product" className="img-fluid"/>
                                    <div className="product-hover-overlay"><a href="detail.html"
                                                                              className="product-hover-overlay-link"></a>
                                        <div className="product-hover-overlay-buttons"><a href="detail.html"
                                                                                          className="btn btn-dark btn-buy"><i
                                            className="fa-search fa"></i><span
                                            className="btn-buy-label ml-2">View</span></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="py-2">
                                    <p className="text-muted text-sm mb-1">Denim</p>
                                    <h3 className="h6 text-uppercase mb-1"><a href="detail.html" className="text-dark">Black
                                        blouse</a></h3><span className="text-muted">$40.00</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-6">
                            <div className="product">
                                <div className="product-image">
                                    <div className="ribbon ribbon-primary">Sale</div>
                                    <img
                                        src="https://d19m59y37dris4.cloudfront.net/sell/1-2-2/img/product/kyle-loftus-596319-unsplash.jpg"
                                        alt="product" className="img-fluid"/>
                                    <div className="product-hover-overlay"><a href="detail.html"
                                                                              className="product-hover-overlay-link"></a>
                                        <div className="product-hover-overlay-buttons"><a href="detail.html"
                                                                                          className="btn btn-dark btn-buy"><i
                                            className="fa-search fa"></i><span
                                            className="btn-buy-label ml-2">View</span></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="py-2">
                                    <p className="text-muted text-sm mb-1">Accessories</p>
                                    <h3 className="h6 text-uppercase mb-1"><a href="detail.html" className="text-dark">College
                                        jacket</a></h3><span className="text-muted">$40.00</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-6">
                            <div className="product">
                                <div className="product-image"><img
                                    src="https://d19m59y37dris4.cloudfront.net/sell/1-2-2/img/product/ethan-haddox-484912-unsplash.jpg"
                                    alt="product" className="img-fluid"/>
                                    <div className="product-hover-overlay"><a href="detail.html"
                                                                              className="product-hover-overlay-link"></a>
                                        <div className="product-hover-overlay-buttons"><a href="detail.html"
                                                                                          className="btn btn-dark btn-buy"><i
                                            className="fa-search fa"></i><span
                                            className="btn-buy-label ml-2">View</span></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="py-2">
                                    <p className="text-muted text-sm mb-1">Denim</p>
                                    <h3 className="h6 text-uppercase mb-1"><a href="detail.html" className="text-dark">Carrot-fit
                                        jeans</a></h3><span className="text-muted">$40.00</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-6">
                            <div className="product">
                                <div className="product-image"><img
                                    src="https://d19m59y37dris4.cloudfront.net/sell/1-2-2/img/product/serrah-galos-494231-unsplash.jpg"
                                    alt="product" className="img-fluid"/>
                                    <div className="product-hover-overlay"><a href="detail.html"
                                                                              className="product-hover-overlay-link"></a>
                                        <div className="product-hover-overlay-buttons"><a href="detail.html"
                                                                                          className="btn btn-dark btn-buy"><i
                                            className="fa-search fa"></i><span
                                            className="btn-buy-label ml-2">View</span></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="py-2">
                                    <p className="text-muted text-sm mb-1">Jackets</p>
                                    <h3 className="h6 text-uppercase mb-1"><a href="detail.html" className="text-dark">Striped
                                        T-Shirt</a></h3><span className="text-muted">$40.00</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-6">
                            <div className="product">
                                <div className="product-image"><img
                                    src="https://d19m59y37dris4.cloudfront.net/sell/1-2-2/img/product/averie-woodard-319832-unsplash.jpg"
                                    alt="product" className="img-fluid"/>
                                    <div className="product-hover-overlay"><a href="detail.html"
                                                                              className="product-hover-overlay-link"></a>
                                        <div className="product-hover-overlay-buttons"><a href="detail.html"
                                                                                          className="btn btn-dark btn-buy"><i
                                            className="fa-search fa"></i><span
                                            className="btn-buy-label ml-2">View</span></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="py-2">
                                    <p className="text-muted text-sm mb-1">Shirts</p>
                                    <h3 className="h6 text-uppercase mb-1"><a href="detail.html" className="text-dark">Short
                                        top</a></h3><span className="text-muted">$40.00</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
