"use client";

import React from "react";
import Link from "next/link";

export default function Download() {
  return (
    <section className="rts__section download__area is__home__main section__padding">
      <div className="section__shape d-none d-xl-block">
        <img src="/assets/images/about/section__shape.svg" alt="shape" />
      </div>

      <div className="container">
        <div className="download__wrapper">
          {/* Left Side: Text + QR codes */}
          <div className="content">
            <span className="h6 subtitle__icon__two d-block wow fadeInUp">
              Immerse in Elegance
            </span>
            <h2 className="content__title wow fadeInUp">
              Manage your stay easily with the Smana App.
            </h2>
            <p className="content__subtitle wow fadeInUp" data-wow-delay=".3s">
              Scan the QR code below to get started.
            </p>

            <div className="qr-grid wow fadeInUp pb-5" data-wow-delay=".5s">
              {/* iOS QR */}
              <div className="qr-item">
                <div className="qr-card radius-8">
                  <img src="/assets/images/download/grcode2.svg" alt="QR iOS" />
                </div>
                <Link
                  href="#"
                  className="theme-btn bg-black btn-style sm-btn border d-none d-lg-block"
                >
                  <span style={{ color: "#fff !important" }}>Download iOS</span>
                </Link>
              </div>

              {/* Android QR */}
              <div className="qr-item">
                <div className="qr-card radius-8">
                  <img
                    src="/assets/images/download/qrcode1.svg"
                    alt="QR Android"
                  />
                </div>
                <Link
                  href="#"
                  className="theme-btn bg-black btn-style sm-btn border d-none d-lg-block"
                >
                  <span style={{ color: "#fff !important" }}>Download Android</span>
                </Link>
              </div>

              {/* Store badges */}
              <div className="badges col-12 mt-4 d-flex align-items-center gap-4">
                <div className="badge-card radius-6">
                  <img
                    src="/assets/images/download/icon.svg"
                    alt="App Store"
                    width={160}
                    height={160}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Phone Mockup */}
          <div className="image align-bottom">
            <div
              className="position-relative radius wow fadeInUp overflow-hidden phone-container"
              data-wow-delay=".3s"
            >
              <div className="jara-mask-1 jarallax image-height pt-0">
                <img
                  src="/assets/images/download/phone.svg"
                  alt="Phone mockup"
                  className="phone-image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Section adjustments */
        .download__area {
          background: #fff;
          color: #000;
          padding-top: 20px !important;
          padding-bottom: 0px !important;
        }

        .download__wrapper {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
          align-items: end; /* ensures phone touches bottom */
        }

        @media (min-width: 992px) {
          .download__wrapper {
            grid-template-columns: 1fr 1fr;
          }
        }

        .content {
          color: #000;
        }

        .content h2,
        .content span,
        .content p {
          color: #000 !important;
        }

        .qr-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 2rem;
          margin-top: 1.5rem;
        }

        .qr-item {
          text-align: center;
        }

        .qr-card {
          background: #fff;
          padding: 1rem;
          border-radius: 8px;
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.06);
          display: inline-block;
        }

        /* Download button black with white text */
        .theme-btn {
          background: #000 !important;
          color: #fff !important;
          padding: 10px 24px;
          border-radius: 8px;
          display: inline-block;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .theme-btn:hover {
          opacity: 0.85;
          transform: translateY(-2px);
        }

        /* Phone image flush to bottom */
        .image {
          display: flex;
          justify-content: center;
          align-items: end;
        }

        .phone-container {
          margin: 0;
          padding: 0;
        }

        .phone-image {
          width: 100%;
          max-width: 620px; /* slightly larger */
          height: auto;
          display: block;
          margin-bottom: 0 !important;
        }
      `}</style>
    </section>
  );
}
