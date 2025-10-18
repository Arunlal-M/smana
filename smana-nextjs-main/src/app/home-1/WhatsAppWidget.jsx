'use client';
import React, { useState, useEffect } from 'react';

const WhatsAppWidget = () => {
const [showButton, setShowButton] = useState(false);

  // Replace with your WhatsApp number (with country code, no + or spaces)
const phoneNumber = '9714329966'; // Example: 91 for India + your number
const message = 'Hello! I would like to know more about your services.';

  // Construct WhatsApp URL
const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

useEffect(() => {
    const handleScroll = () => {
    // Show after user scrolls down a bit (similar to BackToTop)
        if (window.scrollY > 100) {
            setShowButton(true);
        } else {
            setShowButton(true);
        }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
}, []);

const openWhatsApp = () => {
    // Opens WhatsApp Web on desktop or app on mobile automatically
    window.open(whatsappUrl, '_blank');
};

return (
    <button
        type="button"
        onClick={openWhatsApp}
        className={`whatsapp-widget ${showButton ? 'show' : ''}`}
        style={{
            position: 'fixed',
            bottom: '180px', // slightly above back-to-top button
            right: '20px',
            backgroundColor: '#25D366',
            border: 'none',
            borderRadius: '50%',
            width: '65px',
            height: '65px',
            display: showButton ? 'flex' : 'none',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
            boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
            transition: 'opacity 0.3s ease',
            zIndex: 1000,
        }}
        aria-label="Chat on WhatsApp"
    >
      {/* WhatsApp SVG Icon */}
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            width="38"
            height="38"
            fill="#fff"
        >
            <path d="M16.004 3C9.376 3 4 8.376 4 15.004c0 2.656.832 5.136 2.256 7.168L4 29l6.064-2.208A11.926 11.926 0 0 0 16.004 27C22.632 27 28 21.624 28 14.996S22.632 3 16.004 3zm-.016 22.4c-1.928 0-3.72-.568-5.216-1.544l-.376-.24-3.6 1.312.992-3.712-.248-.376A9.332 9.332 0 0 1 6.672 15c0-5.128 4.176-9.304 9.312-9.304 5.128 0 9.312 4.176 9.312 9.304 0 5.12-4.184 9.304-9.304 9.304z" />
            <path d="M21.56 18.56c-.304-.152-1.792-.88-2.072-.984-.28-.104-.48-.152-.68.152-.2.304-.776.984-.952 1.184-.176.2-.352.232-.656.08-.304-.152-1.28-.472-2.432-1.504-.9-.8-1.512-1.784-1.688-2.088-.176-.304-.02-.472.132-.624.136-.136.304-.352.456-.528.152-.176.2-.304.304-.504.104-.2.056-.376-.008-.528-.064-.152-.68-1.64-.928-2.248-.248-.6-.496-.52-.68-.528-.176-.008-.376-.008-.576-.008s-.528.08-.808.376c-.28.304-1.064 1.04-1.064 2.536 0 1.496 1.088 2.944 1.24 3.144.152.2 2.136 3.264 5.176 4.568.724.312 1.288.496 1.728.64.728.232 1.392.2 1.92.12.584-.088 1.792-.728 2.048-1.432.256-.704.256-1.312.176-1.432-.072-.12-.272-.192-.576-.344z" />
        </svg>
    </button>
);
};

export default WhatsAppWidget;
