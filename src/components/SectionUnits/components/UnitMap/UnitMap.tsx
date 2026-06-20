import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { LatLngExpression } from "leaflet";
import L from "leaflet";
import iconUrl from "leaflet-defaulticon-compatibility/dist/images/marker-icon.png";
import shadowUrl from "leaflet-defaulticon-compatibility/dist/images/marker-shadow.png";

export const UnitMap = ({ position }: { position: LatLngExpression }) => {
  delete (L.Icon.Default.prototype as { _getIconUrl?: unknown })._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconUrl,
    shadowUrl,
  });

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
          <Popup>Dix Radiologia</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};
