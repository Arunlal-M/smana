"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import TopBar from "../home-1/TopBar";
import HeaderOne from "../home-1/Header";
import FooterOne from "../home-1/FooterOne";
import BackToTop from "../home-1/BackToTop";
import GDPRCookie from "../home-1/GDPRCookie";

function Clubs() {
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "dark");
    return () => {
      document.documentElement.removeAttribute("data-theme"); // Cleanup when leaving this page
    };
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  const clubs = [
    {
      name: "Hungama",
      image: "Hungama.svg",
      description:
        "Experience the ultimate party atmosphere at Hungama, featuring state-of-the-art sound systems, vibrant lighting, and the best DJs in town. Our multi-level venue offers different music genres across floors.",
      features: [
        "Live DJ Performances",
        "VIP Sections",
        "Themed Nights",
        "Premium Bar",
      ],
    },
    {
      name: "Dhamal",
      image: "Dhamal.svg",
      description:
        "Dhamal brings you an electrifying Bollywood experience with pulsating music, colorful decor, and energetic dance floors. Perfect for those who love Bollywood beats and vibrant celebrations.",
      features: [
        "Bollywood Music",
        "Dance Floor",
        "Cultural Events",
        "Signature Cocktails",
      ],
    },
    {
      name: "Spice",
      image: "Spice.svg",
      description:
        "A sophisticated lounge bar offering exotic cocktails, fine wines, and a relaxed ambiance. Spice is perfect for intimate gatherings and corporate events with its elegant setting.",
      features: [
        "Exotic Cocktails",
        "Lounge Setting",
        "Private Booths",
        "Wine Selection",
      ],
    },
    {
      name: "Sports Bar",
      image: "SportsBar.svg",
      description:
        "Catch all the live sports action on our giant HD screens while enjoying craft beers and delicious pub food. The ultimate destination for sports enthusiasts.",
      features: ["HD Screens", "Live Sports", "Craft Beers", "Pub Food"],
    },
    {
      name: "D'Promenade Restaurant",
      image: "D'PromenadeRestaurant.svg",
      description:
        "Fine dining meets entertainment at D'Promenade. Enjoy gourmet cuisine with live music performances in an elegant setting overlooking the city skyline.",
      features: ["Fine Dining", "Live Music", "City Views", "Gourmet Cuisine"],
    },
    {
      name: "Jalwa",
      image: "Jalwa.svg",
      description:
        "Jalwa offers a luxurious clubbing experience with premium services, international DJs, and an exclusive crowd. The place to see and be seen in the city.",
      features: [
        "International DJs",
        "Luxury Interiors",
        "Bottle Service",
        "Celebrity Events",
      ],
    },
    {
      name: "Party Hall",
      image: "PartyHall.svg",
      description:
        "Our versatile party hall can accommodate any event from weddings to corporate parties. Fully customizable with professional event planning services.",
      features: [
        "Customizable Space",
        "Event Planning",
        "Large Capacity",
        "All Occasions",
      ],
    },
  ];

  return (
    <>
      <GDPRCookie
        settings={{
          title: "Accept Cookies & privacy",
          message:
            "Cookies enable you to use shopping carts and to personalize your experience on our sites, tell us which parts of our websites people have visited, help us measure the effectiveness of ads and web searches.",
          expires: 90, // Cookie expiration in days
        }}
      />
      {/* <TopBar /> */}
      <HeaderOne />
      {/* clubs detailed page */}
      <div className="rts__section facilities__area has__background has__shape py-90">
        <div className="section__shape">
          <img src="/assets/images/shape/facility-1.svg" alt="" />
        </div>
        <div className="container">
          <div className="row justify-content-center text-center mb-40">
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="300">
              <div className="section__topbar">
                <span className="h6 subtitle__icon__three mx-auto">
                  All Venues
                </span>
                <h2 className="section__title">Our Clubs & Party Spaces</h2>
                <p className="mt-3">
                  Discover our complete collection of premium party venues and
                  entertainment spaces
                </p>
              </div>
            </div>
          </div>
          <div className="row g-5 justify-content-center">
            {clubs.map((club, index) => (
              <div
                key={index}
                className="col-xl-4 col-lg-6 col-md-6"
                data-aos="fade-up"
                data-aos-delay={100 + index * 50}
              >
                <div
                  className="club-card position-relative overflow-hidden shadow-sm rounded"
                  style={{ height: "500px" }}
                >
                  <img
                    src={`/assets/images/partyvibe/${club.image}`}
                    alt={club.name}
                    className="w-100 h-100"
                    style={{ objectFit: "cover" }}
                  />
                  {/* Hover Overlay with Details */}
                  <div
                    className="club-overlay position-absolute top-0 start-0 end-0 bottom-0 d-flex flex-column justify-content-end text-white p-4"
                    style={{
                      background: "rgba(0, 0, 0, 0.85)",
                      transform: "translateY(100%)",
                      transition: "transform 0.5s ease-in-out",
                    }}
                  >
                    <h4 className="mb-3 text-white fw-bold">{club.name}</h4>
                    <p className="mb-3" style={{ lineHeight: "1.6" }}>
                      {club.description}
                    </p>
                    <div className="mb-3">
                      <h6 className="fw-bold mb-2">Features:</h6>
                      <ul className="list-unstyled">
                        {club.features.map((feature, idx) => (
                          <li key={idx} className="mb-1">
                            • {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="text-center">
                      <button className="btn btn-outline-light px-4">
                        Book Now
                      </button>
                    </div>
                  </div>
                  {/* Static Title */}
                  <div
                    className="position-absolute bottom-0 start-0 end-0 text-center text-white p-3"
                    style={{
                      background:
                        "linear-gradient(transparent, rgba(0,0,0,0.8))",
                    }}
                  >
                    <h5 className="h5 mb-0 fw-bold">{club.name}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Back Button */}
          <div className="row justify-content-center mt-40">
            <div className="col-lg-12 justify-content-center text-center text-white main__right">
              <Link
                href="/home-video"
                className="theme-btn bg-black btn-style sm-btn border d-none d-lg-block"
              >
                <span style={{ color: "#fff !important" }}>Back to Home</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .club-card:hover .club-overlay {
          transform: translateY(0) !important;
        }
        .club-card:hover .position-absolute:last-child {
          opacity: 0 !important;
        }
      `}</style>
      <FooterOne />
      <BackToTop />
    </>
  );
}

export default Clubs;
