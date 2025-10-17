'use client';
import Link from 'next/link';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Events() {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
        });
    }, []);

    const events = [
        { 
            name: "Meetings and Conventions", 
            image: "meetings-conventions.svg",
            description: "Our rooms offer a harmonious blend of comfort and elegance, designed to provide an exceptional stay for every guest. Each room features plush bedding."
        },
        { 
            name: "Weddings", 
            image: "weddings.svg",
            description: "Our rooms offer a harmonious blend of comfort and elegance, designed to provide an exceptional stay for every guest. Each room features plush bedding."
        },
        { 
            name: "Gathering", 
            image: "gathering.svg",
            description: "Our rooms offer a harmonious blend of comfort and elegance, designed to provide an exceptional stay for every guest. Each room features plush bedding."
        }
    ];

    return (
        <>
            {/* events section */}
            <div className="rts__section facilities__area has__background has__shape py-90">
                <div className="section__shape">
                    <img src="/assets/images/shape/facility-1.svg" alt="" />
                </div>
                <div className="container">
                    <div className="row justify-content-center text-center mb-40">
                        <div className="col-lg-6" data-aos="fade-up" data-aos-delay="300">
                            <div className="section__topbar">
                                <span className="h6 subtitle__icon__three mx-auto">Events</span>
                                <h2 className="section__title">Plan Your Perfect Event</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row g-4 justify-content-center">
                        {events.map((event, index) => (
                            <div 
                                key={index} 
                                className="col-xl-4 col-lg-6 col-md-6" 
                                data-aos="fade-up" 
                                data-aos-delay={300 + (index * 100)}
                            >
                                <div className="position-relative overflow-hidden shadow-sm rounded" 
                                     style={{ 
                                         height: '400px', 
                                         cursor: 'pointer',
                                         transition: 'all 0.4s ease'
                                     }}>
                                    <img 
                                        src={`/assets/images/events/${event.image}`} 
                                        alt={event.name} 
                                        className="w-100 h-100"
                                        style={{ objectFit: 'cover' }}
                                    />
                                    
                                    {/* Static Title - Always Visible with Dark Background */}
                                    <div className="position-absolute bottom-0 start-0 end-0 text-white p-3"
                                         style={{ 
                                             background: 'rgba(0, 0, 0, 0.7)',
                                             transition: 'opacity 0.4s ease',
                                             zIndex: 2
                                         }}>
                                        <h5 className="h5 mb-0 text-center fw-bold">{event.name}</h5>
                                    </div>
                                    
                                    {/* Hover Overlay - Dark Glass Card */}
                                    <div className="position-absolute top-0 start-0 end-0 bottom-0 d-flex flex-column justify-content-end text-white p-4"
                                         style={{ 
                                             background: 'rgba(0, 0, 0, 0.9)',
                                             backdropFilter: 'blur(5px)',
                                             transform: 'translateY(100%)',
                                             transition: 'transform 0.6s ease-in-out',
                                             borderTop: '3px solid #fff',
                                             zIndex: 3
                                         }}>
                                        <h5 className="h4 mb-3 fw-bold text-center">{event.name}</h5>
                                        <p className="mb-4 text-center" 
                                           style={{ lineHeight: '1.6', fontSize: '0.95rem' }}>
                                            {event.description}
                                        </p>
                                        <div className="text-center">
                                            <Link href="/" className="text-decoration-none">
                                                <span className="d-inline-block px-4 py-2 text-white fw-bold"
                                                      style={{ 
                                                          border: '2px solid #fff',
                                                          background: 'transparent',
                                                          transition: 'all 0.3s ease',
                                                          fontSize: '0.9rem',
                                                          letterSpacing: '1px'
                                                      }}>
                                                    PLAN AN EVENT
                                                </span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style jsx global>{`
                .position-relative.overflow-hidden.shadow-sm.rounded:hover .position-absolute:last-child {
                    transform: translateY(0) !important;
                }
                .position-relative.overflow-hidden.shadow-sm.rounded:hover .position-absolute:nth-last-child(2) {
                    opacity: 0 !important;
                }
                .position-relative.overflow-hidden.shadow-sm.rounded:hover {
                    transform: translateY(-8px) !important;
                    box-shadow: 0 15px 30px rgba(0,0,0,0.3) !important;
                }
                .d-inline-block.px-4.py-2.text-white.fw-bold:hover {
                    background: #fff !important;
                    color: #000 !important;
                }
            `}</style>
        </>
    );
}

export default Events;