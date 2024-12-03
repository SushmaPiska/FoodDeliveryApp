import React, { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const StyledMap = () => {
  useEffect(() => {
    const map = L.map("map").setView([51.5074, -0.1278], 13); 
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 18,
      attribution: "© OpenStreetMap contributors",
    }).addTo(map);

    
    const marker = L.marker([51.5074, -0.1278]).addTo(map);

    const popupContent = `
      <div style="
        background-color: #101935;
        color: white;
        padding: 15px;
        border-radius: 8px;
        font-family: Arial, sans-serif;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
      ">
        <h1 style="
          margin: 0;
          font-size: 18px;
          font-weight: bold;
        ">McDonald's</h1>
        <p style="margin: 5px 0; font-size: 14px; color: #f2f2f2;">
          <strong>South London</strong>
        </p>
        <p style="margin: 5px 0; font-size: 14px; color: #f2f2f2;">
          Tooley St, London Bridge, London SE1 2TF, United Kingdom
        </p>
        <p style="margin: 5px 0; font-size: 14px; color: #f2f2f2;">
          <strong>Phone number:</strong> +934443-43
        </p>
        <p style="margin: 5px 0; font-size: 14px; color: #00aaff;">
          <strong>Website:</strong> <a href="http://mcdonalds.uk/" target="_blank" style="color: #00aaff; text-decoration: none;">http://mcdonalds.uk/</a>
        </p>
      </div>
    `;
    marker.bindPopup(popupContent).openPopup();

    return () => {
      map.remove();
    };
  }, []);

  return (
    <div
      id="map"
      style={{
        height: "500px",
        width: "100%",
        borderRadius: "10px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
      }}
    ></div>
  );
};

export default StyledMap;
