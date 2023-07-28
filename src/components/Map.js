"use client";
import { useState } from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";

// create map view
export function ChangeView({ coords }) {
  const map = useMap();
  map.setView(coords, 12);
  return null;
}

// map component
const Map = () => {
  const [geoData, setGeoData] = useState({ lat: 28.6448, lng: 77.216721 }); // geographical location pointer
  const center = [geoData.lat, geoData.lng];

  return (
    <section className="relative">
      <MapContainer
        center={center}
        zoom={13}
        style={{ height: "400px", width: "auto" }}
        scrollWheelZoom={false}
      >
        {/* leaflet credit */}
        <TileLayer
          attribution=""
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* set marker position */}
        {geoData.lat && geoData.lng && (
          <Marker position={[geoData.lat, geoData.lng]} />
        )}

        {/* map view area */}
        <ChangeView coords={center} />
      </MapContainer>

      {/* find nearby my button */}
      <button className="btn absolute right-5 bottom-5 z-[9999]">
        Near Me
      </button>
    </section>
  );
};

export default Map;
