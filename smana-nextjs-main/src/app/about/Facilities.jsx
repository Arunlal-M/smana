'use client'
import React, { useEffect } from 'react'
import Rellax from 'rellax';
import Link from 'next/link';
function FacilitiesSeven() {
    useEffect(() => {
        if (typeof window !== "undefined") {
            new Rellax(".rellax", { speed: 1 });
        }
    }, []);
    return (
        <>
            {/* our facility */}
            <div className="rts__section facility__area is__about has__background has__shape">
                <div className="section__shape wow fadeInRight" data-wow-delay=".5s">
                    <img src="/assets/images/pages/about-shape.svg" alt="" />
                </div>
                <div className="container">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6">
                            <div className="facility__content">
                                <div className="section__content__left">
                                    <span className="h6 subtitle__icon__two d-block wow fadeInUp">
                                        Facilities
                                    </span>
                                    <h2 className="content__title h2 lh-1">Hotel Facilities</h2>
                                </div>
                                <div className="row mt-20 g-5 wow fadeInUp" data-wow-delay=".5s">
                                    <div className="col-lg-6 col-md-6">
                                        <div className="card rts__card no-border is__home__three">
                                            <div className="card-body">
                                                <div className="icon">
                                                    <img src="/assets/images/icon/bed.svg" alt="" />
                                                </div>
                                                <Link href="#">
                                                    <h6 className="card-title h6 mb-15">Rooms and Suites</h6>
                                                </Link>
                                                <p className="card-text">
                                                    Varied types of rooms, from standard to luxury suites,
                                                    equipped with essentials like beds.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="card rts__card no-border is__home__three">
                                            <div className="card-body">
                                                <div className="icon">
                                                    <img src="/assets/images/icon/security.svg" alt="" />
                                                </div>
                                                <Link href="#">
                                                    <h6 className="card-title h6 mb-15">Safety & Security</h6>
                                                </Link>
                                                <p className="card-text">
                                                    Your peace of mind is our priority. Enjoy 24/7 on-site security, advanced surveillance, and secure storage for your valuables.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="card rts__card no-border is__home__three">
                                            <div className="card-body">
                                                <div className="icon">
                                                    <img src="/assets/images/icon/gym.svg" alt="" />
                                                </div>
                                                <Link href="#">
                                                    <h6 className="card-title h6 mb-15">Fitness & Wellness</h6>
                                                </Link>
                                                <p className="card-text">
                                                    Stay active and rejuvenated at our fully equipped fitness center. From cardio and strength training to revitalizing massages and wellness treatments, we’ve got your well-being covered.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="card rts__card no-border is__home__three">
                                            <div className="card-body">
                                                <div className="icon">
                                                    <img src="/assets/images/icon/swimming-pool.svg" alt="" />
                                                </div>
                                                <Link href="#">
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
                        <div className="col-lg-6">
                            <div className="facility__image jara-mask-3 jarallax">
                                <img
                                    height={765}
                                    width={605}
                                    className="jarallax-img rellax rellax-img"
                                    src="/assets/images/index-3/facility.webp"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* our facility end */}
        </>

    )
}

export default FacilitiesSeven