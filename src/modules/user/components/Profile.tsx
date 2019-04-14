import React from 'react'

export default function Profile() {
    return (<div>
        <div className="block mb-5">
            <div className="block-header"><strong className="text-uppercase">Change your password</strong></div>
            <div className="block-body">
                <form>
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label htmlFor="password_old" className="form-label">Old password</label>
                                <input id="password_old" type="password" className="form-control"/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label htmlFor="password_1" className="form-label">New password</label>
                                <input id="password_1" type="password" className="form-control"/>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label htmlFor="password_2" className="form-label">Retype new password</label>
                                <input id="password_2" type="password" className="form-control"/>
                            </div>
                        </div>
                    </div>
                    <div className="text-center mt-4">
                        <button type="submit" className="btn btn-outline-dark"><i className="far fa-save mr-2"></i>Change
                            password
                        </button>
                    </div>
                </form>
            </div>
        </div>
        <div className="block mb-5">
            <div className="block-header"><strong className="text-uppercase">Personal details</strong></div>
            <div className="block-body">
                <form>
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label htmlFor="firstname" className="form-label">Firstname</label>
                                <input id="firstname" type="text" className="form-control"/>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label htmlFor="lastname" className="form-label">Lastname</label>
                                <input id="lastname" type="text" className="form-control"/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label htmlFor="company" className="form-label">Company</label>
                                <input id="company" type="text" className="form-control"/>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label htmlFor="street" className="form-label">Street</label>
                                <input id="street" type="text" className="form-control"/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6 col-md-3">
                            <div className="form-group">
                                <label htmlFor="city" className="form-label">Company</label>
                                <input id="city" type="text" className="form-control"/>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-3">
                            <div className="form-group">
                                <label htmlFor="zip" className="form-label">ZIP</label>
                                <input id="zip" type="text" className="form-control"/>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-3">
                            <div className="form-group">
                                <label htmlFor="state" className="form-label">State</label>
                                <select id="state" className="form-control"></select>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-3">
                            <div className="form-group">
                                <label htmlFor="country" className="form-label">Country</label>
                                <select id="country" className="form-control"></select>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label htmlFor="phone" className="form-label">Telephone</label>
                                <input id="phone" type="text" className="form-control"/>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input id="email" type="text" className="form-control"/>
                            </div>
                        </div>
                    </div>
                    <div className="text-center mt-4">
                        <button type="submit" className="btn btn-outline-dark"><i className="far fa-save mr-2"></i>Save
                            changes
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>)
}
