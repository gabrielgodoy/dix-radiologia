import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { LatLngExpression } from "leaflet";

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
      </MapContainer>
    </div>
  );
};
