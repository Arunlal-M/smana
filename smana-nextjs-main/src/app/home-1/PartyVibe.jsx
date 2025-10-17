'use client';
import Link from 'next/link';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function FacilitiesOne() {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
        });
    }, []);

    const clubs = [
        { name: "Hungama", image: "Hungama.svg" },
        { name: "Dhamal", image: "Dhamal.svg" },
        { name: "Spice", image: "Spice.svg" },
        { name: "Sports Bar", image: "SportsBar.svg" },
        { name: "D'Promenade Restaurant", image: "D'PromenadeRestaurant.svg" },
        { name: "Jalwa", image: "Jalwa.svg" },
        { name: "Party Hall", image: "PartyHall.svg" }
    ];

    return (
        <>
            {/* facilities */}
            <div className="rts__section facilities__area has__background has__shape py-90">
                {/* <div className="section__shape">
                    <img src="/assets/images/shape/facility-1.svg" alt="" />
                </div> */}
                <div className="container">
                    <div className="row justify-content-center text-center mb-40">
                        <div className="col-lg-6" data-aos="fade-up" data-aos-delay="300">
                            <div className="section__topbar">
                                <span className="h6 subtitle__icon__three mx-auto">Clubs</span>
                                <h2 className="section__title">Party Vibes</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row g-5 justify-content-center">
                        {clubs.slice(0, 4).map((club, index) => ( // Show only first 4 on main page
                            <div 
                                key={index} 
                                className="col-xl-3 col-lg-4 col-md-6 col-sm-6" 
                                data-aos="fade-up" 
                                data-aos-delay={100 + (index * 50)}
                            >
                                <Link href="/" className="text-decoration-none">
                                    <div className="position-relative overflow-hidden shadow-sm" style={{ height: '250px' }}>
                                        <img 
                                            src={`/assets/images/partyvibe/${club.image}`} 
                                            alt={club.name} 
                                            className="w-100 h-100"
                                            style={{ objectFit: 'cover' }}
                                        />
                                        <div className="position-absolute bottom-0 start-0 end-0 text-center text-white p-2"
                                            style={{ 
                                                background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
                                                backdropFilter: 'blur(1px)'
                                            }}>
                                            <h6 className="card-title h6 mb-0 ">{club.name}</h6>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                    {/* More Button */}
                        <div className="col-lg-2 justify-content-center text-center mt-5 mx-auto">
                            <Link
                                href="/clubs"
                                className="theme-btn btn-style fill no-border wow fadeInUp"
                                data-wow-delay=".5s"
                            >
                                <span>View All Clubs</span>
                            </Link>
                        </div>
                </div>
            </div>
            {/* facilities end */}
        </>
    );
}

export default FacilitiesOne;