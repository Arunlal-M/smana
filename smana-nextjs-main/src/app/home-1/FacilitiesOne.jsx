'use client';
import Link from 'next/link';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function FacilitiesOne() {
    useEffect(() => {
        AOS.init({
            duration: 800,  // Animation duration
            once: true,    // Ensures animations run once
        });
    }, []);

    return (
        <>
            {/* facilities */}
            <div className="rts__section facilities__area has__background has__shape py-90">
                <div className="section__shape">
                    <img src="/assets/images/shape/facility-1.svg" alt="" />
                </div>
                <div className="container">
                    <div className="row justify-content-center text-center mb-40">
                        <div className="col-lg-6" data-aos="fade-up" data-aos-delay="300">
                            <div className="section__topbar">
                                <span className="h6 subtitle__icon__three mx-auto">Facilities</span>
                                <h2 className="section__title">A Symphony of Comfort</h2>
                                <p className="content__subtitle wow fadeInUp" data-wow-delay=".3s">
                                    Relax, recharge, and enjoy everything we offer.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row g-4">
                        <div className="col-xl-3 col-lg-6 col-md-6" data-aos="fade-up" data-aos-delay="300">
                            <div className="card rts__card no-border is__home radius-6">
                                <div className="card-body">
                                    <div className="icon">
                                        <img src="/assets/images/icon/bed.svg" alt="" />
                                    </div>
                                    <Link href="/">
                                        <h6 className="card-title h6 mb-15">Rooms and Suites</h6>
                                    </Link>
                                    <p className="card-text">
                                        Varied types of rooms, from standard to luxury suites, equipped with essentials like beds.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6" data-aos="fade-up" data-aos-delay="400">
                            <div className="card rts__card no-border is__home radius-6">
                                <div className="card-body">
                                    <div className="icon">
                                        <img src="/assets/images/icon/security.svg" alt="" />
                                    </div>
                                    <Link href="/">
                                        <h6 className="card-title h6 mb-15">Safety & Security</h6>
                                    </Link>
                                    <p className="card-text">
                                        Your peace of mind is our priority. Enjoy 24/7 on-site security, advanced surveillance, and secure storage for your valuables.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6" data-aos="fade-up" data-aos-delay="500">
                            <div className="card rts__card no-border is__home radius-6">
                                <div className="card-body">
                                    <div className="icon">
                                        <img src="/assets/images/icon/gym.svg" alt="" />
                                    </div>
                                    <Link href="/">
                                        <h6 className="card-title h6 mb-15">Fitness & Wellness</h6>
                                    </Link>
                                    <p className="card-text">
                                        Stay active and rejuvenated at our fully equipped fitness center.
                                        From cardio and strength training to revitalizing massages and wellness treatments,
                                        we’ve got your well-being covered.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6" data-aos="fade-up" data-aos-delay="600">
                            <div className="card rts__card no-border is__home radius-6">
                                <div className="card-body">
                                    <div className="icon">
                                        <img src="/assets/images/icon/swimming-pool.svg" alt="" />
                                    </div>
                                    <Link href="/">
                                        <h6 className="card-title h6 mb-15">Swimming Pool</h6>
                                    </Link>
                                    <p className="card-text">
                                        Dive into relaxation in our sparkling indoor or outdoor pools. Perfect for a refreshing swim or leisurely moments, complemented by spa-like experiences.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* facilities end */}
        </>
    );
}

export default FacilitiesOne;
