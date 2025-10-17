'use client';
import Link from 'next/link';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Travel() {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
        });
    }, []);

    const tours = [
        { name: "Burg Khalifa At The Top Tickets", image: "BurgKhalifa.svg" },
        { name: "Yas Waer World from Dubai", image: "YasWaerWorld.svg" },
        { name: "Abu Dhabi City Tour", image: "AbuDhabiCity.svg" },
        { name: "Museum of the Future", image: "Museum.svg" }
    ];

    return (
        <>
            {/* travel tours section */}
            <div className="rts__section facilities__area has__background has__shape py-90">
                <div className="section__shape">
                    <img src="/assets/images/shape/facility-1.svg" alt="" />
                </div>
                <div className="container">
                    <div className="row justify-content-center text-center mb-40">
                        <div className="col-lg-6" data-aos="fade-up" data-aos-delay="300">
                            <div className="section__topbar">
                                <span className="h6 subtitle__icon__three mx-auto">Travels</span>
                                <h2 className="section__title text-center fw-lighter" style={{ whiteSpace: "nowrap" }}>Top Dubai Tours & Activities</h2>                            </div>
                        </div>
                    </div>
                    <div className="row g-5 justify-content-center">
                        {tours.map((tour, index) => (
                            <div 
                                key={index} 
                                className="col-xl-3 col-lg-6 col-md-6" 
                                data-aos="fade-up" 
                                data-aos-delay={300 + (index * 100)}
                            >
                                <Link href="/" className="text-decoration-none">
                                    <div className="position-relative overflow-hidden shadow-sm" style={{ height: '350px' }}>
                                        <img 
                                            src={`/assets/images/travel/${tour.image}`} 
                                            alt={tour.name} 
                                            className="w-100 h-100"
                                            style={{ objectFit: 'cover' }}
                                        />
                                        <div className="position-absolute bottom-0 start-0 end-0 text-center text-white p-2"
                                            style={{ 
                                                background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
                                                backdropFilter: 'blur(1px)'
                                            }}>
                                            <h6 className="card-title h6 mb-0 ">{tour.name}</h6>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* travel tours section end */}
        </>
    );
}

export default Travel;