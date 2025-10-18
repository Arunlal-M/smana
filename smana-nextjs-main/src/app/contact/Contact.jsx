import React from 'react'

function ContactOne() {
    return (
        <>
            {/* contact area */}
            <div className="rts__section section__padding">
                <div className="container">
                    <div className="row g-30 align-items-center">
                        <div className="col-lg-6">
                            <div className="rts__contact">
                                <span className="h4 d-block mb-30 text-center">
                                    Love to hear from you Get in touch!
                                </span>
                                <form
                                    action="mailer.php"
                                    method="post"
                                    className="rts__contact__form"
                                    id="contact-form"
                                >
                                    <div className="form-input">
                                        <label htmlFor="name">Your Name</label>
                                        <div className="pr">
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                placeholder="Your Name"
                                                required
                                            />
                                            <i className="flaticon-user" />
                                        </div>
                                    </div>
                                    <div className="form-input">
                                        <label htmlFor="email">Your Email</label>
                                        <div className="pr">
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                placeholder="Your Email"
                                                required
                                            />
                                            <i className="flaticon-envelope" />
                                        </div>
                                    </div>
                                    <div className="form-input">
                                        <label htmlFor="msg">Your Message</label>
                                        <div className="pr">
                                            <textarea
                                                id="msg"
                                                name="msg"
                                                placeholder="Message"
                                                required
                                                defaultValue={""}
                                            />
                                            <img
                                                src="/assets/images/icon/message.svg"
                                                width={20}
                                                height={20}
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                    <button type="submit" className="theme-btn btn-style fill w-100">
                                        <span>Send Message</span>
                                    </button>
                                </form>
                                <div id="form-messages" className="mt-20" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="contact__image">
                                <img
                                    className="rounded-2 w-100 img-fluid"
                                    src="/assets/images/pages/contact.webp"
                                    width={645}
                                    height={560}
                                    alt="contact__image"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container pt-120">
                    <div className="row g-30 align-items-center">
                        <div className="col-lg-6">
                            <div className="contact__map">
                                <iframe
                                    className="w-100"
                                    height={560}
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14023.407564441395!2d55.27282648027855!3d25.251028156033435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f431abd59735b%3A0xa5572af81b501276!2sSmana%20Hotel%20Al%20Raffa!5e0!3m2!1sen!2sin!4v1760785124940!5m2!1sen!2sin"
                                    title="Map showing the location of My Business"
                                />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="contact__info">
                                <div className="contact__info__item">
                                    <h4>Smana Hotel Al Raffa Info Center</h4>
                                    <p>
                                        Open Hours: Monday – Sunday <br />
                                        {/* Telephone:&nbsp;+971-4329966,&nbsp;&nbsp;+971-4329027  <br /> */}
                                        Check-in time: 2:00 pm  <br />
                                        Check-out time: 12:00 pm  <br />
                                        {/* Fax: <br /> */}
                                        Email:&nbsp;smana@gmail.com
                                    </p>
                                </div>
                                <div className="contact__info__item">
                                    <h4>Smana Hotel location</h4>
                                    <p>
                                        37th St, Al Raffa – Dubai. United Arab Emirates  <br />
                                        P.O Box 49789  <br />
                                        Telephone:&nbsp;+971-4329966,&nbsp;&nbsp;+971-4329027  <br />
                                        {/* Fax:  <br /> */}
                                        Email:&nbsp;smana@gmail.com
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* contact area end */}
        </>

    )
}

export default ContactOne