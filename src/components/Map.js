"use client";
import { useState } from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";

export function ChangeView({ coords }) {
  const map = useMap();
  map.setView(coords, 12);
  return null;
}

export default function Map() {
  const [geoData, setGeoData] = useState({ lat: 28.6448, lng: 77.216721 });
  const center = [geoData.lat, geoData.lng];

  return (
    <section className="relative">
      <MapContainer
        center={center}
        zoom={13}
        style={{ height: "400px", width: "auto" }}
        dragging={false}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution=""
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {geoData.lat && geoData.lng && (
          <Marker position={[geoData.lat, geoData.lng]} />
        )}
        <ChangeView coords={center} />
      </MapContainer>
      <button className="btn absolute right-5 bottom-5 z-[9999]">
        Find Near Me
      </button>
    </section>
  );
}
