import React from 'react'

export default function ContactModule() {
    return (<section>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6 col-xl-5 mx-auto">
                        <ul className="breadcrumb justify-content-left">
                            <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                            <li className="breadcrumb-item active">Contact</li>
                        </ul>
                        <h4 className="mb-4 text-uppercase">Contact us</h4>
                        <p className="lead mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco</p>
                        <div className="row mb-5">
                            <div className="col-md-4 text-center text-md-left">
                                <svg className="svg-icon svg-icon-light text-primary w-3rem h-3rem mb-3">
                                    <use xlinkHref="#navigation-map-1"></use>
                                </svg>
                                <h4 className="ff-base">Address</h4>
                                <p className="text-muted">13/25 New Avenue<br/>New Heaven, 45Y 73J<br/>England, <strong>Great
                                    Britain</strong></p>
                            </div>
                            <div className="col-md-4 text-center text-md-left">
                                <svg className="svg-icon svg-icon-light text-primary w-3rem h-3rem mb-3">
                                    <use xlinkHref="#audio-call-1"></use>
                                </svg>
                                <h4 className="ff-base">Call center</h4>
                                <p className="text-muted">Sed do eiusmod tempor incididunt ut labore et dolore magna
                                    aliqua.</p>
                                <p className="text-muted"><strong>+33 555 444 333</strong></p>
                            </div>
                            <div className="col-md-4 text-center text-md-left">
                                <svg className="svg-icon svg-icon-light text-primary w-3rem h-3rem mb-3">
                                    <use xlinkHref="#mail-1"></use>
                                </svg>
                                <h4 className="ff-base">Electronic support</h4>
                                <p className="text-muted">Please feel free to write an email to us or to use our
                                    electronic
                                    ticketing system.</p>
                                <ul className="list-unstyled text-muted">
                                    <li>info@sell.com</li>
                                    <li>support@sell.com</li>
                                </ul>
                            </div>
                        </div>
                        <hr className="mb-5"/>
                        <form id="contact-form" method="get" action="#" className="mb-5">
                            <h4 className="mb-4">Contact form</h4>
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label htmlFor="name" className="form-label">Your name *</label>
                                        <input type="text" name="name" id="name" placeholder="Enter your firstname"
                                               required className="form-control"/>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label htmlFor="email" className="form-label">Your email *</label>
                                        <input type="email" name="email" id="email" placeholder="Enter your  email"
                                               required className="form-control"/>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="message" className="form-label">Your message for us *</label>
                                <textarea rows={4} name="message" id="message" placeholder="Enter your message"
                                          required className="form-control"></textarea>
                            </div>
                            <button type="submit" className="btn btn-outline-dark">Send message</button>
                        </form>
                    </div>
                    <div className="col-lg-6">
                        <div id="map" className="full-screen my-3">MAP</div>
                    </div>
                </div>
            </div>
        </section>
    )
}
