"use client"; // if you are using the App Router (Next 13+)

import { useEffect } from "react";

export default function BookingWidget() {
    useEffect(() => {
    // Only run on the client
    const existingScript = document.getElementById("propInfo");
    if (!existingScript) {
        const script = document.createElement("script");
        script.src =
        "https://settings.swiftbook.io/displaywidget/preview/booking-service.min.js?propertyId=922NTB4KvUyMULPhfaf6jIByDI9bB28KjeIgLsaAONEt5hRdfSOYyNTI=&scriptId=922NTB4KvUyMULPhfaf6jIByDI9bB28KjeIgLsaAONEt5hRdfSOYyNTI=";
        script.id = "propInfo";
        script.async = true;
        document.body.appendChild(script);
    }

    // Optional cleanup (remove script on unmount)
    return () => {
        const script = document.getElementById("propInfo");
        if (script) script.remove();
    };
}, []);

    return (
    <div
        id="quickbook-widget-922NTB4KvUyMULPhfaf6jIByDI9bB28KjeIgLsaAONEt5hRdfSOYyNTI=-922NTB4KvUyMULPhfaf6jIByDI9bB28KjeIgLsaAONEt5hRdfSOYyNTI="
        className="Configure-quickBook-Widget"
        style={{ width: "100%", minHeight: "100px" }} // adjust as needed
    ></div>
);
}
