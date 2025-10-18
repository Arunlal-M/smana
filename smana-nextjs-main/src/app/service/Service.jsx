import Link from 'next/link'
import React from 'react'

function ServiceFive() {
    return (
        <>
            {/* service */}
            <div className="rts__section section__padding">
                <div className="container">
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
                                    Your peace of mind is our priority. Enjoy 24/7 on-site security, advanced surveillance, and secure storage for your valuables.
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
                                    <i className="flaticon-gym" />
                                </div>
                                <Link href="#" className="h6">
                                    Fitness & Wellness
                                </Link>
                                <p>
                                    Stay active and rejuvenated at our fully equipped fitness center. 
                                    From cardio and strength training to revitalizing massages and wellness treatments, 
                                    we’ve got your well-being covered.
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
                            {/* single service item */}
                            <div className="service__item">
                                <div className="service__item__icon">
                                    <img
                                        src="/assets/images/icon/desk.svg"
                                        width={40}
                                        height={40}
                                        alt=""
                                    />
                                </div>
                                <Link href="#" className="h6">
                                    Work Desk
                                </Link>
                                <p>
                                    A well-organized work desk is more than just a place to complete
                                    tasks; it's a hub of productivity and creativity.
                                </p>
                            </div>
                            {/* single service item end */}
                            {/* single service item */}
                            <div className="service__item">
                                <div className="service__item__icon">
                                    <i className="flaticon-swimming" />
                                </div>
                                <Link href="#" className="h6">
                                    Swimming Pool
                                </Link>
                                <p>
                                    Dive into relaxation in our sparkling indoor or outdoor pools. Perfect for a refreshing swim or leisurely moments, complemented by spa-like experiences.
                                </p>
                            </div>
                            {/* single service item end */}
                            {/* single service item */}
                            <div className="service__item">
                                <div className="service__item__icon">
                                    <img
                                        src="/assets/images/icon/bed.svg"
                                        width={40}
                                        height={40}
                                        alt=""
                                    />
                                </div>
                                <Link href="#" className="h6">
                                    Rooms and Suites
                                </Link>
                                <p>
                                    On-site security personnel and surveillance. from standard to
                                    luxury suites, Secure it is storage for valuables.
                                </p>
                            </div>
                            {/* single service item end */}
                            {/* single service item */}
                            <div className="service__item">
                                <div className="service__item__icon">
                                    <i className="flaticon-shower" />
                                </div>
                                <Link href="#" className="h6">
                                    Shower
                                </Link>
                                <p>
                                    The warm water cascaded down, enveloping a soothing as I stood in
                                    the shower. Each droplet danced on my skin, washing.
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

export default ServiceFive