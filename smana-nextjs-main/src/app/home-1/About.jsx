"use client";
import React, { useEffect } from "react";
import Rellax from "rellax";
import Link from "next/link";

function AboutOne() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      new Rellax(".rellax", { speed: 1 });
    }
  }, []);
  return (
    <div className="rts__section about__area is__home__main section__padding">
      <div className="section__shape d-none d-xl-block">
        <img src="/assets/images/about/section__shape.svg" alt="" />
      </div>
      <div className="container">
        <div className="row">
          <div className="about__wrapper">
            <div className="image">
              <div
                className="position-relative radius wow fadeInUp overflow-hidden"
                data-wow-delay=".3s"
              >
                <div
                  className="jara-mask-1 jarallax image-height pt-0"
                  data-rellax-speed="2"
                >
                  {/* Ensure rellax-img is present */}
                  <img
                    src="/assets/images/about/about-1.webp"
                    className="jarallax-img rellax rellax-img"
                    alt="Background"
                  />
                </div>
              </div>
              <div
                className="image__card radius-10 wow fadeInUp"
                data-wow-delay=".5s"
              >
                <div className="icon radius-10 center-item">
                  <i className="flaticon-people" />
                </div>
                <div className="content">
                  <span className="h5">50+</span>
                  <p>Experience Staff</p>
                </div>
              </div>
              <div className="image__card__image wow fadeInUp">
                <img
                  src="/assets/images/about/about-main.webp"
                  width={312}
                  height={230}
                  alt="About"
                />
              </div>
            </div>
            <div className="content">
              <span className="h6 subtitle__icon__two d-block wow fadeInUp">
                About Us
              </span>
              <h2 className="content__title wow fadeInUp">
                Welcome To Our SMANA Hotel &amp; Resort
              </h2>
              <p
                className="content__subtitle wow fadeInUp"
                data-wow-delay=".3s"
              >
                Our hotel features well-appointed rooms, modern amenities, fine
                dining experiences, and warm hospitality that reflects the
                spirit of [City/Region]. With a commitment to excellence, we
                strive to create unforgettable moments for our guests. Our hotel
                features well-appointed rooms, modern amenities, fine dining
                experiences, and warm hospitality that reflects the spirit of
                [City/Region]. With a commitment to excellence, we strive to
                create unforgettable moments for our guests.
              </p>
              <Link
                href="/about"
                className="theme-btn btn-style fill no-border wow fadeInUp"
                data-wow-delay=".5s"
              >
                <span>Learn More</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutOne;
