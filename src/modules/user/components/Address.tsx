import React from 'react'

export default function Address() {
    return (<div>
            <form action="#">
                <div className="block">
                    <div className="block-header">
                        <h6 className="text-uppercase mb-0">Invoice address </h6>
                    </div>
                    <div className="block-body">
                        <div className="row">
                            <div className="form-group col-md-6">
                                <label htmlFor="fullname_invoice" className="form-label">Full Name</label>
                                <input type="text" name="fullname_invoice" placeholder="Joe Black" id="fullname_invoice"
                                       className="form-control"/>
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="emailaddress_invoice" className="form-label">Email Address</label>
                                <input type="text" name="emailaddress_invoice" placeholder="joe.black@gmail.com"
                                       id="emailaddress_invoice" className="form-control"/>
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="street_invoice" className="form-label">Street</label>
                                <input type="text" name="street_invoice" placeholder="123 Main St." id="street_invoice"
                                       className="form-control"/>
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="city_invoice" className="form-label">City</label>
                                <input type="text" name="city_invoice" placeholder="City" id="city_invoice"
                                       className="form-control"/>
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="zip_invoice" className="form-label">ZIP</label>
                                <input type="text" name="zip_invoice" placeholder="Postal code" id="zip_invoice"
                                       className="form-control"/>
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="state_invoice" className="form-label">State</label>
                                <input type="text" name="state_invoice" placeholder="State" id="state_invoice"
                                       className="form-control"/>
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="phonenumber_invoice" className="form-label">Phone Number</label>
                                <input type="text" name="phonenumber_invoice" placeholder="Phone Number"
                                       id="phonenumber_invoice" className="form-control"/>
                            </div>
                            <div className="form-group col-12 mt-3">
                                <div className="custom-control custom-checkbox">
                                    <input id="show-shipping-address" type="checkbox" name="clothes-brand"
                                           className="custom-control-input"/>
                                    <label htmlFor="show-shipping-address" data-toggle="collapse"
                                           data-target="#shippingAddress" aria-expanded="false"
                                           aria-controls="shippingAddress"
                                           className="custom-control-label align-middle">Use a different shipping
                                        address</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="shippingAddress" aria-expanded="false" className="collapse">
                        <div className="block">
                            <div className="block-header">
                                <h6 className="text-uppercase mb-0">Shipping address </h6>
                            </div>
                            <div className="block-body">
                                <div className="row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="street_shipping" className="form-label">Street</label>
                                        <input type="text" name="street_shipping" placeholder="123 Main St."
                                               id="street_shipping" className="form-control"/>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="city_shipping" className="form-label">City</label>
                                        <input type="text" name="city_shipping" placeholder="City" id="city_shipping"
                                               className="form-control"/>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="zip_shipping" className="form-label">ZIP</label>
                                        <input type="text" name="zip_shipping" placeholder="Postal code"
                                               id="zip_shipping"
                                               className="form-control"/>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="state_shipping" className="form-label">State</label>
                                        <input type="text" name="state_shipping" placeholder="State" id="state_shipping"
                                               className="form-control"/>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="phonenumber_shipping" className="form-label">Phone
                                            Number</label>
                                        <input type="text" name="phonenumber_shipping" placeholder="Phone Number"
                                               id="phonenumber_shipping" className="form-control"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="form-group mt-3 text-center">
                    <button type="submit" className="btn btn-outline-dark"><i className="far fa-save mr-2"></i>Save
                        changes
                    </button>
                </div>
            </form>
        </div>
    )
}
