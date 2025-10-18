'use client'
import BookingWidget from '@/components/BookingWidget';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

function AdvanceForm() {
    const [checkInDate, setCheckInDate] = useState(null);
    const [checkOutDate, setCheckOutDate] = useState(null);

    return (
        <div className="rts__section advance__search__section is__home__one">
            <div className="container">
                <div className="row">
                    <BookingWidget />
                </div>
            </div>
            
            {/* Add CSS to fix z-index issue */}
            <style jsx>{`
                :global(.date-picker-popper) {
                    z-index: 9999 !important;
                }
                :global(.react-datepicker__triangle) {
                    display: none;
                }
            `}</style>
        </div>
    );
}

export default AdvanceForm;