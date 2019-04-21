import React, {useEffect, useState} from 'react'
import {productService} from "../../services/product.service";
import Product from "./Product";
import {Link} from "react-router-dom";

interface Category {
    name: string,
    description: string
}

const initialCategory: Category = {name: "", description: ""};

function CategoryModule() {
    const [category, setCategory] = useState(initialCategory);
    const [products, setProducts] = useState([]);

    const [filters, setFilters] = useState({});

    async function getProducts() {
        let products = await productService.getProducts();
        setProducts(products);
    }

    async function getCategory() {
        let category = await productService.getCategory('women');
        setCategory(category);
    }

    useEffect(() => {
        getProducts();
    }, [filters]);

    useEffect(() => {
        getCategory();
    }, []);

    return (<div>
            <section className="position-relative dark-overlay py-3 py-lg-7">
                <img src="https://d19m59y37dris4.cloudfront.net/sell/1-2-2/img/photo/erii-gutierrez-487083-unsplash.jpg"
                     alt=""
                     className="bg-image"/>
                <div className="container overlay-content hero hero-page">
                    <ul className="breadcrumb justify-content-center no-border mb-0">
                        <li className="breadcrumb-item">
                            <Link to="/" className="text-white">Home</Link>
                        </li>
                        <li className="breadcrumb-item text-white active">{category.name}</li>
                    </ul>
                    <div className="hero-content pb-5 text-center text-white">
                        <h1 className="hero-heading">{category.name}</h1>
                        <p className="lead"
                           dangerouslySetInnerHTML={{__html: category.description}}/>
                    </div>
                </div>
            </section>
            <main className="pt-5">
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
                                {
                                    products.map((product, index) => (
                                        <div key={index} className="col-xl-4 col-sm-6">
                                            <Product product={product}/>
                                        </div>)
                                    )
                                }
                            </div>
                            <nav aria-label="page navigation" className="d-flex justify-content-center mb-5 mt-3">
                                <ul className="pagination">
                                    <li className="page-item"><a href="#" aria-label="Previous"
                                                                 className="page-link"><span
                                        aria-hidden="true">Prev</span><span className="sr-only">Previous</span></a></li>
                                    <li className="page-item active"><a href="#" className="page-link">1 </a></li>
                                    <li className="page-item"><a href="#" className="page-link">2 </a></li>
                                    <li className="page-item"><a href="#" className="page-link">3 </a></li>
                                    <li className="page-item"><a href="#" className="page-link">4 </a></li>
                                    <li className="page-item"><a href="#" className="page-link">5 </a></li>
                                    <li className="page-item"><a href="#" aria-label="Next" className="page-link"><span
                                        aria-hidden="true">Next</span><span className="sr-only">Next     </span></a>
                                    </li>
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
                                                <label htmlFor="colour_sidebar_Blue"
                                                       style={{backgroundColor: "#668cb9"}}
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
                                                <label htmlFor="colour_sidebar_Violet"
                                                       style={{backgroundColor: "#8b6ea4"}}
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
            </main>
        </div>
    )
}


export default CategoryModule;
