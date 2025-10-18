import Link from 'next/link'
import React from 'react'

function ServiceSix() {
    return (
        <>
            {/* service */}
            <div className="rts__section section__padding">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-12">
                            <div className="section__head text-center mb-40">
                                <h2 className="section__title">why choose our events</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="service__list">
                            {/* single service item */}
                            <div className="service__item">
                                <div className="service__item__icon">
                                    <i className="flaticon-24-hours" />
                                </div>
                                <Link href="#" className="h6">
                                    Safety & Security
                                </Link>
                                <p>
                                    Your peace of mind is our priority. Enjoy 24/7 on-site security, advanced surveillance,
                                    and secure storage for your valuables.
                                </p>
                            </div>
                            {/* single service item end */}
                            {/* single service item */}
                            <div className="service__item">
                                <div className="service__item__icon">
                                    <i className="flaticon-wifi" />
                                </div>
                                <Link href="#" className="h6">
                                    Modern Connectivity
                                </Link>
                                <p>
                                    Stay connected with free high-speed internet throughout the property and Smart TVs in every room,
                                    so entertainment and convenience are always at your fingertips.
                                </p>
                            </div>
                            {/* single service item end */}
                            {/* single service item */}
                            <div className="service__item">
                                <div className="service__item__icon">
                                    <img
                                        height={40}
                                        width={40}
                                        src="/assets/images/icon/bed.svg"
                                        alt=""
                                    />
                                </div>
                                <Link href="#" className="h6">
                                    Quality Room
                                </Link>
                                <p>
                                    A fitness center is a vibrant and dynamic environment designed to
                                    promote health and Fitnee Center well-being.
                                </p>
                            </div>
                            {/* single service item end */}
                            {/* single service item */}
                            <div className="service__item">
                                <div className="service__item__icon">
                                    <i className="flaticon-plane" />
                                </div>
                                <Link href="#" className="h6">
                                    Airport transport
                                </Link>
                                <p>
                                    Airport transportation plays a crucial role in travel experiences
                                    for passengers. It various services, including taxis, ride-sharing
                                </p>
                            </div>
                            {/* single service item end */}
                        </div>
                    </div>
                </div>
            </div>
            {/* service end */}
        </>

    )
}

export default ServiceSix