import React, { memo, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import { Icon } from "leaflet";

function LeafeletMap(props) {
  const { latlng } = props;
  const zoom = 4;

  return (
    <div
      className="w-full max-w-3xl h-[20rem] relative mx-auto mt-8 flex flex-col gap-3"
      id="map"
    >
      <h1 className="font-bold text-lg sm:text-2xl lg:mb-0 sm:col-span-2">
        Location
      </h1>
      <MapContainer
        style={{ height: "100%", width: "100%", borderRadius: "0.3rem" }}
        center={latlng}
        zoom={zoom}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          position={latlng}
          icon={
            new Icon({
              iconUrl: markerIconPng,
              iconSize: [25, 41],
              iconAnchor: [12, 41],
            })
          }
        >
          <Popup>Cinema</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default memo(LeafeletMap);
