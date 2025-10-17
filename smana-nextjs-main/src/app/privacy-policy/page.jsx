"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import TopBar from "../home-1/TopBar";
import HeaderOne from "../home-1/Header";
import FooterOne from "../home-1/FooterOne";
import BackToTop from "../home-1/BackToTop";
import GDPRCookie from "../home-1/GDPRCookie";

function PrivacyPolicy() {
  // useEffect(() => {
  //     document.documentElement.setAttribute("data-theme", "dark");
  //     return () => {
  //         document.documentElement.removeAttribute("data-theme"); // Cleanup when leaving this page
  //     };

  // }, []);
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

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
      {/* Privacy Policy Header */}
      <div className="rts__section facilities__area has__background has__shape py-90">
        <div className="section__shape">
          <img src="/assets/images/shape/facility-1.svg" alt="" />
        </div>
        <div className="container">
          <div className="row justify-content-center text-center mb-40">
            <div className="col-lg-8" data-aos="fade-up" data-aos-delay="300">
              <div className="section__topbar">
                <span className="h6 subtitle__icon__three mx-auto">Legal</span>
                <h1 className="section__title mb-4">Privacy Policy</h1>
                <p className="lead">
                  Last updated: {new Date().toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Privacy Policy Content */}
      <div className="container py-60">
        <div className="row justify-content-center">
          <div className="col-lg-10" data-aos="fade-up" data-aos-delay="400">
            <div className="privacy-content">
              {/* Introduction */}
              <section className="mb-5">
                <h2 className="h3 mb-3 text-primary">1. Introduction</h2>
                <p className="mb-3">
                  Welcome to our Privacy Policy. Your privacy is critically
                  important to us. This privacy policy document outlines the
                  types of personal information that is collected and recorded
                  by our hotel and how we use it.
                </p>
                <p>
                  We are committed to protecting your personal information and
                  your right to privacy. If you have any questions or concerns
                  about our policy, or our practices with regards to your
                  personal information, please contact us at
                  privacy@hotelname.com.
                </p>
              </section>

              {/* Information We Collect */}
              <section className="mb-5">
                <h2 className="h3 mb-3 text-primary">
                  2. Information We Collect
                </h2>
                <h4 className="h5 mb-2">
                  Personal Information You Disclose to Us
                </h4>
                <p className="mb-3">
                  We collect personal information that you voluntarily provide
                  to us when registering at the Hotel, expressing an interest in
                  obtaining information about us or our products and services,
                  when participating in activities on the Hotel or otherwise
                  contacting us.
                </p>
                <ul className="mb-4">
                  <li className="mb-2">
                    <strong>Personal Identifiers:</strong> Name, email address,
                    phone number, passport details
                  </li>
                  <li className="mb-2">
                    <strong>Booking Information:</strong> Check-in and check-out
                    dates, room preferences
                  </li>
                  <li className="mb-2">
                    <strong>Payment Information:</strong> Credit card details,
                    billing address
                  </li>
                  <li className="mb-2">
                    <strong>Demographic Information:</strong> Age, nationality,
                    preferences
                  </li>
                  <li>
                    <strong>Special Requirements:</strong> Dietary restrictions,
                    accessibility needs
                  </li>
                </ul>

                <h4 className="h5 mb-2">Information Automatically Collected</h4>
                <p>
                  We automatically collect certain information when you visit,
                  use or navigate the Hotel. This information does not reveal
                  your specific identity but may include device and usage
                  information.
                </p>
              </section>

              {/* How We Use Your Information */}
              <section className="mb-5">
                <h2 className="h3 mb-3 text-primary">
                  3. How We Use Your Information
                </h2>
                <p className="mb-3">
                  We use personal information collected via our Hotel for a
                  variety of business purposes described below:
                </p>
                <ul>
                  <li className="mb-2">
                    To facilitate account creation and logon process
                  </li>
                  <li className="mb-2">
                    To send administrative information to you
                  </li>
                  <li className="mb-2">To fulfill and manage your bookings</li>
                  <li className="mb-2">
                    To post testimonials with your consent
                  </li>
                  <li className="mb-2">To request feedback about your stay</li>
                  <li className="mb-2">
                    To protect our Services and maintain security
                  </li>
                  <li className="mb-2">
                    To respond to legal requests and prevent harm
                  </li>
                  <li>
                    For other business purposes like data analysis and improving
                    our services
                  </li>
                </ul>
              </section>

              {/* Sharing Your Information */}
              <section className="mb-5">
                <h2 className="h3 mb-3 text-primary">
                  4. Will Your Information Be Shared With Anyone?
                </h2>
                <p className="mb-3">
                  We only share information with your consent, to comply with
                  laws, to provide you with services, to protect your rights, or
                  to fulfill business obligations.
                </p>
                <p>
                  We may process or share your data that we hold based on the
                  following legal basis:
                </p>
                <ul>
                  <li className="mb-2">
                    <strong>Consent:</strong> We may process your data if you
                    have given us specific consent
                  </li>
                  <li className="mb-2">
                    <strong>Legal Obligations:</strong> We may disclose your
                    information where required by law
                  </li>
                  <li className="mb-2">
                    <strong>Vital Interests:</strong> We may disclose your
                    information to protect your vital interests
                  </li>
                  <li>
                    <strong>Business Transfers:</strong> We may share or
                    transfer your information during business negotiations
                  </li>
                </ul>
              </section>

              {/* Cookies */}
              <section className="mb-5">
                <h2 className="h3 mb-3 text-primary">
                  5. Cookies and Tracking Technologies
                </h2>
                <p className="mb-3">
                  We may use cookies and similar tracking technologies to access
                  or store information. Specific information about how we use
                  such technologies and how you can refuse certain cookies is
                  set out in our Cookie Policy.
                </p>
                <p>
                  You can set your browser to refuse all or some browser
                  cookies, or to alert you when websites set or access cookies.
                  If you disable or refuse cookies, please note that some parts
                  of this website may become inaccessible or not function
                  properly.
                </p>
              </section>

              {/* Data Retention */}
              <section className="mb-5">
                <h2 className="h3 mb-3 text-primary">
                  6. How Long Do We Keep Your Information?
                </h2>
                <p className="mb-3">
                  We will only keep your personal information for as long as it
                  is necessary for the purposes set out in this privacy policy,
                  unless a longer retention period is required or permitted by
                  law.
                </p>
                <p>
                  When we have no ongoing legitimate business need to process
                  your personal information, we will either delete or anonymize
                  such information, or securely store it until deletion is
                  possible.
                </p>
              </section>

              {/* Data Security */}
              <section className="mb-5">
                <h2 className="h3 mb-3 text-primary">
                  7. How Do We Keep Your Information Safe?
                </h2>
                <p className="mb-3">
                  We have implemented appropriate technical and organizational
                  security measures designed to protect the security of any
                  personal information we process. However, please also remember
                  that we cannot guarantee that the internet itself is 100%
                  secure.
                </p>
                <p>
                  Although we will do our best to protect your personal
                  information, transmission of personal information to and from
                  our Hotel is at your own risk. You should only access the
                  services within a secure environment.
                </p>
              </section>

              {/* Your Privacy Rights */}
              <section className="mb-5">
                <h2 className="h3 mb-3 text-primary">8. Your Privacy Rights</h2>
                <p className="mb-3">
                  In some regions, you have rights that allow you greater access
                  to and control over your personal information.
                </p>
                <ul className="mb-3">
                  <li className="mb-2">
                    <strong>Right to Access:</strong> Request copies of your
                    personal data
                  </li>
                  <li className="mb-2">
                    <strong>Right to Rectification:</strong> Request correction
                    of inaccurate information
                  </li>
                  <li className="mb-2">
                    <strong>Right to Erasure:</strong> Request deletion of your
                    personal data
                  </li>
                  <li className="mb-2">
                    <strong>Right to Restrict Processing:</strong> Request
                    restriction of processing your data
                  </li>
                  <li className="mb-2">
                    <strong>Right to Data Portability:</strong> Request transfer
                    of your data to another organization
                  </li>
                  <li>
                    <strong>Right to Object:</strong> Object to processing of
                    your personal data
                  </li>
                </ul>
                <p>
                  You may make such a request by contacting us. We will consider
                  and act upon any request in accordance with applicable data
                  protection laws.
                </p>
              </section>

              {/* Updates */}
              <section className="mb-5">
                <h2 className="h3 mb-3 text-primary">
                  9. Updates to This Policy
                </h2>
                <p className="mb-3">
                  We may update this privacy policy from time to time. The
                  updated version will be indicated by an updated "Revised" date
                  and the updated version will be effective as soon as it is
                  accessible.
                </p>
                <p>
                  We encourage you to review this privacy policy frequently to
                  be informed of how we are protecting your information.
                </p>
              </section>

              {/* Contact */}
              <section className="mb-5">
                <h2 className="h3 mb-3 text-primary">10. Contact Us</h2>
                <p className="mb-2">
                  If you have questions or comments about this policy, you may
                  contact our Data Protection Officer (DPO) by:
                </p>
                <ul className="mb-3">
                  <li className="mb-1">
                    <strong>Email:</strong> privacy@hotelname.com
                  </li>
                  <li className="mb-1">
                    <strong>Phone:</strong> +1 (555) 123-4567
                  </li>
                  <li className="mb-1">
                    <strong>Post:</strong> 123 Hotel Street, City, State 12345
                  </li>
                </ul>
                <p>
                  Based on the applicable laws of your country, you may have the
                  right to file a complaint with the relevant data protection
                  authority if you have concerns about how we process your
                  personal information.
                </p>
              </section>

              {/* Consent */}
              <section className="mt-5 p-4 bg-light rounded">
                <h3 className="h4 mb-3">Your Consent</h3>
                <p className="mb-0">
                  By using our website and services, you hereby consent to our
                  Privacy Policy and agree to its terms.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .privacy-content {
          line-height: 1.8;
          color: #333;
        }
        .privacy-content h2,
        .privacy-content h3,
        .privacy-content h4 {
          color: #2c3e50;
          margin-top: 2rem;
        }
        .privacy-content ul {
          padding-left: 1.5rem;
        }
        .privacy-content li {
          margin-bottom: 0.5rem;
        }
        .text-primary {
          color: #2c3e50 !important;
        }
        .bg-light {
          background-color: #f8f9fa !important;
        }
      `}</style>
      <FooterOne />
      <BackToTop />
    </>
  );
}

export default PrivacyPolicy;
