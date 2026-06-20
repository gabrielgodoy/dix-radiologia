import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { LatLngExpression } from "leaflet";
import { useEffect } from "react";

function MapRefresher({ isVisible }: { isVisible: boolean }) {
  const map = useMap();

  useEffect(() => {
    if (isVisible) {
      // Small timeout ensures container DOM animations finish first
      setTimeout(() => {
        map.invalidateSize();
      }, 100);
    }
  }, [isVisible, map]);

  return null;
}

export const UnitMap = ({ position }: { position: LatLngExpression }) => {
  return (
    <div>
      <MapContainer
        center={position}
        zoom={13}
        style={{ height: "210px", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>A customizable popup marker!</Popup>
        </Marker>
        <MapRefresher isVisible />
      </MapContainer>
    </div>
  );
};
