import React from 'react';
import {Link} from "react-router-dom";


function Header() {
  return (<header className="header header-absolute">
      <div className="top-bar">
        <div className="container-fluid">
          <div className="row d-flex align-items-center">
            <div className="col-sm-7 d-none d-sm-block">
              <ul className="list-inline mb-0">
                <li className="list-inline-item pr-3 mr-0">
                  <svg className="svg-icon mr-2">
                    <use xlinkHref="#calls-1"></use>
                  </svg>
                  020-800-456-747
                </li>
                <li className="list-inline-item px-3 border-left d-none d-lg-inline-block">Free shipping on orders over
                  $300
                </li>
              </ul>
            </div>
            <div className="col-sm-5 d-flex justify-content-end">
              <div className="dropdown border-right px-3">
                <a id="langsDropdown" href="https://example.com"
                   data-toggle="dropdown" aria-haspopup="true"
                   aria-expanded="false"
                   className="dropdown-toggle topbar-link">
                  <img
                    src="https://d19m59y37dris4.cloudfront.net/sell/1-2-2/img/united-kingdom.svg" alt="english"
                    className="topbar-flag"/>English</a>
                <div aria-labelledby="langsDropdown" className="dropdown-menu dropdown-menu-right"><a href="#"
                                                                                                      className="dropdown-item text-sm"><img
                  src="https://d19m59y37dris4.cloudfront.net/sell/1-2-2/img/germany.svg" alt="german"
                  className="topbar-flag"/>German</a><a href="#" className="dropdown-item text-sm"> <img
                  src="https://d19m59y37dris4.cloudfront.net/sell/1-2-2/img/france.svg" alt="french"
                  className="topbar-flag"/>French</a></div>
              </div>
              <div className="dropdown pl-3 ml-0"><a id="currencyDropdown" href="#" data-toggle="dropdown"
                                                     aria-haspopup="true" aria-expanded="false"
                                                     className="dropdown-toggle topbar-link">USD</a>
                <div aria-labelledby="currencyDropdown" className="dropdown-menu dropdown-menu-right"><a href="#"
                                                                                                         className="dropdown-item text-sm">EUR</a><a
                  href="#" className="dropdown-item text-sm"> GBP</a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav
        className="navbar navbar-expand-lg bg-transparent navbar-sticky navbar-airy navbar-dark bg-hover-white bg-fixed-white navbar-hover-light navbar-fixed-light">
        <div className="container-fluid">
          <button type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse"
                  aria-expanded="false" aria-label="Toggle navigation" className="navbar-toggler navbar-toggler-right">
            <i className="fa fa-bars"></i></button>
          <div id="navbarCollapse" className="collapse navbar-collapse">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item dropdown">
                <a id="homeDropdownMenuLink" href="index.html" data-toggle="dropdown"
                   aria-haspopup="true" aria-expanded="false"
                   className="nav-link active">

                  Home<i className="fa fa-angle-down"></i></a>
                <div aria-labelledby="homeDropdownMenuLink" className="dropdown-menu"><a href="index.html"
                                                                                         className="dropdown-item">Fullscreen
                  home + Lookbook</a><a href="index2.html" className="dropdown-item">Split-screen home</a><a
                  href="index3.html" className="dropdown-item">Classic home</a><a href="index4.html"
                                                                                  className="dropdown-item">Parallax
                  sections <span className="badge badge-info ml-1">New</span></a><a href="index5.html"
                                                                                    className="dropdown-item">Slider +
                  broken grid <span className="badge badge-info ml-1">New</span> </a></div>
              </li>
              <li className="nav-item"><Link to="/category" className="nav-link">Shop</Link>
              </li>
              <li className="nav-item dropdown position-static"><a href="#" data-toggle="dropdown" className="nav-link">Template<i
                className="fa fa-angle-down"></i></a>
                <div className="dropdown-menu megamenu py-lg-0">
                  <div className="row">
                    <div className="col-lg-9">
                      <div className="row p-3 pr-lg-0 pl-lg-5 pt-lg-5">
                        <div className="col-lg-3">
                          <h6 className="text-uppercase">Homepage</h6>
                          <ul className="megamenu-list list-unstyled">
                            <li className="megamenu-list-item"><a href="index.html" className="megamenu-list-link">Fullscreen
                              home + Lookbook </a></li>
                            <li className="megamenu-list-item"><a href="index2.html" className="megamenu-list-link">Split-screen
                              home </a></li>
                            <li className="megamenu-list-item"><a href="index3.html" className="megamenu-list-link">Classic
                              home </a></li>
                            <li className="megamenu-list-item"><a href="index4.html" className="megamenu-list-link">Parallax
                              sections <span className="badge badge-info ml-1">New</span> </a></li>
                            <li className="megamenu-list-item"><a href="index5.html" className="megamenu-list-link">Slider
                              + Broken grid <span className="badge badge-info ml-1">New</span> </a></li>
                          </ul>
                          <h6 className="text-uppercase">Shop</h6>
                          <ul className="megamenu-list list-unstyled">
                            <li className="megamenu-list-item"><a href="category.html" className="megamenu-list-link">Category
                              - left sidebar </a></li>
                            <li className="megamenu-list-item"><a href="category-right.html"
                                                                  className="megamenu-list-link">Category - right
                              sidebar </a></li>
                            <li className="megamenu-list-item"><a href="category-no-sidebar.html"
                                                                  className="megamenu-list-link">Category - no
                              sidebar </a></li>
                            <li className="megamenu-list-item"><a href="category-full.html"
                                                                  className="megamenu-list-link">Category - full
                              width </a></li>
                            <li className="megamenu-list-item"><a href="category-masonry.html"
                                                                  className="megamenu-list-link">Category - masonry
                              items </a></li>
                            <li className="megamenu-list-item"><a href="category-banner.html"
                                                                  className="megamenu-list-link">Category - w/
                              banner </a>
                            </li>
                            <li className="megamenu-list-item"><a href="detail.html" className="megamenu-list-link">Product
                              detail </a></li>
                            <li className="megamenu-list-item"><a href="detail-2.html" className="megamenu-list-link">Product
                              detail - v.2 </a></li>
                          </ul>
                        </div>
                        <div className="col-lg-3">
                          <h6 className="text-uppercase">Order process</h6>
                          <ul className="megamenu-list list-unstyled">
                            <li className="megamenu-list-item"><a href="cart.html" className="megamenu-list-link">Shopping
                              cart </a></li>
                            <li className="megamenu-list-item"><a href="cart-2.html" className="megamenu-list-link">Shopping
                              cart - v. 2 <span className="badge badge-info ml-1">New</span> </a></li>
                            <li className="megamenu-list-item"><a href="checkout1.html" className="megamenu-list-link">Checkout
                              1 - Address </a></li>
                            <li className="megamenu-list-item"><a href="checkout2.html" className="megamenu-list-link">Checkout
                              2 - Delivery </a></li>
                            <li className="megamenu-list-item"><a href="checkout3.html" className="megamenu-list-link">Checkout
                              3 - Payment </a></li>
                            <li className="megamenu-list-item"><a href="checkout4.html" className="megamenu-list-link">Checkout
                              4 - Review </a></li>
                            <li className="megamenu-list-item"><a href="checkout5.html" className="megamenu-list-link">Checkout
                              5 - Confirmation </a></li>
                          </ul>
                          <h6 className="text-uppercase">Blog</h6>
                          <ul className="megamenu-list list-unstyled">
                            <li className="megamenu-list-item"><a href="blog.html"
                                                                  className="megamenu-list-link">Blog </a></li>
                            <li className="megamenu-list-item"><a href="post.html"
                                                                  className="megamenu-list-link">Post </a></li>
                          </ul>
                        </div>
                        <div className="col-lg-3">
                          <h6 className="text-uppercase">Pages</h6>
                          <ul className="megamenu-list list-unstyled">
                            <li className="megamenu-list-item"><a href="contact.html"
                                                                  className="megamenu-list-link">Contact </a></li>
                            <li className="megamenu-list-item"><a href="contact-2.html" className="megamenu-list-link">Contact
                              v.2 </a></li>
                            <li className="megamenu-list-item"><a href="text.html" className="megamenu-list-link">Text
                              page </a></li>
                            <li className="megamenu-list-item"><a href="faq.html"
                                                                  className="megamenu-list-link">F.A.Q.s <span
                              className="badge badge-info ml-1">New</span> </a></li>
                            <li className="megamenu-list-item"><a href="coming-soon.html"
                                                                  className="megamenu-list-link">Coming
                              soon </a></li>
                          </ul>
                          <h6 className="text-uppercase">Customer</h6>
                          <ul className="megamenu-list list-unstyled">
                            <li className="megamenu-list-item"><a href="customer-login.html"
                                                                  className="megamenu-list-link">Login/sign up </a></li>
                            <li className="megamenu-list-item"><a href="customer-orders.html"
                                                                  className="megamenu-list-link">Orders </a></li>
                            <li className="megamenu-list-item"><a href="customer-order.html"
                                                                  className="megamenu-list-link">Order detail </a></li>
                            <li className="megamenu-list-item"><a href="customer-addresses.html"
                                                                  className="megamenu-list-link">Addresses </a></li>
                            <li className="megamenu-list-item"><a href="customer-account.html"
                                                                  className="megamenu-list-link">Profile </a></li>
                          </ul>
                        </div>
                        <div className="col-lg-3">
                          <h6 className="text-uppercase">Documentation</h6>
                          <ul className="megamenu-list list-unstyled">
                            <li className="megamenu-list-item"><a href="docs/docs-introduction.html"
                                                                  className="megamenu-list-link">Introduction </a></li>
                            <li className="megamenu-list-item"><a href="docs/docs-directory-structure.html"
                                                                  className="megamenu-list-link">Directory
                              structure </a>
                            </li>
                            <li className="megamenu-list-item"><a href="docs/docs-gulp.html"
                                                                  className="megamenu-list-link">Gulp </a></li>
                            <li className="megamenu-list-item"><a href="docs/docs-customizing-css.html"
                                                                  className="megamenu-list-link">Customizing CSS </a>
                            </li>
                            <li className="megamenu-list-item"><a href="docs/docs-credits.html"
                                                                  className="megamenu-list-link">Credits </a></li>
                            <li className="megamenu-list-item"><a href="docs/docs-changelog.html"
                                                                  className="megamenu-list-link">Changelog </a></li>
                          </ul>
                          <h6 className="text-uppercase">Components</h6>
                          <ul className="megamenu-list list-unstyled">
                            <li className="megamenu-list-item"><a href="docs/components-bootstrap.html"
                                                                  className="megamenu-list-link">Bootstrap </a></li>
                            <li className="megamenu-list-item"><a href="docs/components-sell.html"
                                                                  className="megamenu-list-link">Theme </a></li>
                            <li className="megamenu-list-item"><a href="component-variants/header.html"
                                                                  className="megamenu-list-link">Header variants <span
                              className="badge badge-info ml-1">New</span> </a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="row megamenu-services d-none d-lg-flex">
                        <div className="col-xl-3 col-lg-6 d-flex">
                          <div className="megamenu-services-item">
                            <svg className="svg-icon megamenu-services-icon">
                              <use xlinkHref="#delivery-time-1"></use>
                            </svg>
                            <div>
                              <h6 className="text-uppercase">Free shipping &amp; return</h6>
                              <p className="mb-0 text-muted text-sm">Free Shipping over $300</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 d-flex">
                          <div className="megamenu-services-item">
                            <svg className="svg-icon megamenu-services-icon">
                              <use xlinkHref="#money-1"></use>
                            </svg>
                            <div>
                              <h6 className="text-uppercase">Money back guarantee</h6>
                              <p className="mb-0 text-muted text-sm">30 Days Money Back</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 d-flex">
                          <div className="megamenu-services-item">
                            <svg className="svg-icon megamenu-services-icon">
                              <use xlinkHref="#customer-support-1"></use>
                            </svg>
                            <div>
                              <h6 className="text-uppercase">020-800-456-747</h6>
                              <p className="mb-0 text-muted text-sm">24/7 Available Support</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 d-flex">
                          <div className="megamenu-services-item">
                            <svg className="svg-icon megamenu-services-icon">
                              <use xlinkHref="#secure-payment-1"></use>
                            </svg>
                            <div>
                              <h6 className="text-uppercase">Secure Payment</h6>
                              <p className="mb-0 text-muted text-sm">Secure Payment</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 d-none d-lg-block"><img
                      src="https://d19m59y37dris4.cloudfront.net/sell/1-2-2/img/megamenu.jpg" alt=""
                      className="bg-image"/>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item"><Link to="/contact" className="nav-link">Contact</Link>
              </li>
              <li className="nav-item dropdown">
                <a id="docsDropdownMenuLink" href="index.html" data-toggle="dropdown"
                   aria-haspopup="true" aria-expanded="false" className="nav-link ">

                  Docs<i className="fa fa-angle-down"></i></a>
                <div aria-labelledby="docsDropdownMenuLink" className="dropdown-menu dropdown-menu-right">
                  <h6 className="dropdown-header font-weight-normal">Documentation</h6><a
                  href="docs/docs-introduction.html" className="dropdown-item">Introduction </a><a
                  href="docs/docs-directory-structure.html" className="dropdown-item">Directory structure </a><a
                  href="docs/docs-gulp.html" className="dropdown-item">Gulp </a><a href="docs/docs-customizing-css.html"
                                                                                   className="dropdown-item">Customizing
                  CSS </a><a href="docs/docs-credits.html" className="dropdown-item">Credits </a><a
                  href="docs/docs-changelog.html" className="dropdown-item">Changelog </a>
                  <div className="dropdown-divider"></div>
                  <h6 className="dropdown-header font-weight-normal">Components</h6><a
                  href="docs/components-bootstrap.html" className="dropdown-item">Bootstrap </a><a
                  href="docs/components-sell.html" className="dropdown-item">Theme </a><a
                  href="component-variants/header.html" className="dropdown-item">Header variants <span
                  className="badge badge-info ml-1">New</span> </a>
                </div>
              </li>
            </ul>
            <div className="d-flex align-items-center justify-content-between justify-content-lg-end mt-1 mb-2 my-lg-0">
              <div data-toggle="search" className="nav-item navbar-icon-link">
                <svg className="svg-icon">
                  <use xlinkHref="#search-1"></use>
                </svg>
              </div>
              <div className="nav-item"><Link to="/auth/login" className="navbar-icon-link">
                <svg className="svg-icon">
                  <use xlinkHref="#male-user-1"></use>
                </svg>
                <span
                  className="text-sm ml-2 ml-lg-0 text-uppercase text-sm font-weight-bold d-none d-sm-inline d-lg-none">Log in    </span></Link>
              </div>
              <div className="nav-item dropdown"><Link to="/cart" className="navbar-icon-link d-lg-none">
                <svg className="svg-icon">
                  <use xlinkHref="#cart-1"></use>
                </svg>
                <span
                  className="text-sm ml-2 ml-lg-0 text-uppercase text-sm font-weight-bold d-none d-sm-inline d-lg-none">View cart</span></Link>
                <div className="d-none d-lg-block"><Link id="cartdetails" data-toggle="dropdown" aria-haspopup="true"
                                                         aria-expanded="false" to="/cart"
                                                         className="navbar-icon-link dropdown-toggle">
                  <svg className="svg-icon">
                    <use xlinkHref="#cart-1"></use>
                  </svg>
                  <div className="navbar-icon-link-badge">3</div>
                </Link>
                  <div aria-labelledby="cartdetails" className="dropdown-menu dropdown-menu-right p-4">
                    <div className="navbar-cart-product-wrapper">
                      <div className="navbar-cart-product">
                        <div className="d-flex align-items-center"><a href="detail.html"><img
                          src="https://d19m59y37dris4.cloudfront.net/sell/1-2-2/img/product/product-square-ian-dooley-347968-unsplash.jpg"
                          alt="..." className="img-fluid navbar-cart-product-image"/></a>
                          <div className="w-100"><a href="#" className="close text-sm mr-2"><i
                            className="fa fa-times"> </i></a>
                            <div className="pl-3"><a href="detail.html" className="navbar-cart-product-link">Skull
                              Tee</a>
                              <small className="d-block text-muted">Quantity: 1</small>
                              <strong className="d-block text-sm">$75.00 </strong></div>
                          </div>
                        </div>
                      </div>
                      <div className="navbar-cart-product">
                        <div className="d-flex align-items-center"><a href="detail.html"><img
                          src="https://d19m59y37dris4.cloudfront.net/sell/1-2-2/img/product/product-square-kyle-loftus-596319-unsplash.jpg"
                          alt="..." className="img-fluid navbar-cart-product-image"/></a>
                          <div className="w-100"><a href="#" className="close text-sm mr-2"><i
                            className="fa fa-times"> </i></a>
                            <div className="pl-3"><a href="detail.html" className="navbar-cart-product-link">Transparent
                              Blouse</a>
                              <small className="d-block text-muted">Quantity: 1</small>
                              <strong className="d-block text-sm">$75.00 </strong></div>
                          </div>
                        </div>
                      </div>
                      <div className="navbar-cart-product">
                        <div className="d-flex align-items-center"><a href="detail.html"><img
                          src="https://d19m59y37dris4.cloudfront.net/sell/1-2-2/img/product/product-square-serrah-galos-494312-unsplash.jpg"
                          alt="..." className="img-fluid navbar-cart-product-image"/></a>
                          <div className="w-100"><a href="#" className="close text-sm mr-2"><i
                            className="fa fa-times"> </i></a>
                            <div className="pl-3"><a href="detail.html" className="navbar-cart-product-link">White
                              Tee</a>
                              <small className="d-block text-muted">Quantity: 1</small>
                              <strong className="d-block text-sm">$75.00 </strong></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="navbar-cart-total"><span className="text-uppercase text-muted">Total</span><strong
                      className="text-uppercase">$75.00</strong></div>
                    <div className="d-flex justify-content-between"><Link to="/cart"
                                                                          className="btn btn-link text-dark mr-3">View
                      Cart <i className="fa-arrow-right fa"></i></Link><Link to="/checkout"
                                                                             className="btn btn-outline-dark">Checkout</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="search-area-wrapper">
        <div className="search-area d-flex align-items-center justify-content-center">
          <div className="close-btn">
            <svg className="svg-icon svg-icon-light w-3rem h-3rem">
              <use xlinkHref="#close-1"></use>
            </svg>
          </div>
          <form action="#" className="search-area-form">
            <div className="form-group position-relative">
              <input type="search" name="search" id="search" placeholder="What are you looking for?"
                     className="search-area-input"/>
              <button type="submit" className="search-area-button">
                <svg className="svg-icon">
                  <use xlinkHref="#search-1"></use>
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </header>
  )
}


export default Header;
