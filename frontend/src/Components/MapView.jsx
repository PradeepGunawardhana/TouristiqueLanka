import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const locations = [
  { name: "Colombo", lat: 6.9271, lng: 79.8612 },
  { name: "Kandy", lat: 7.2906, lng: 80.6337 },
  { name: "Galle", lat: 6.0535, lng: 80.221 },
  { name: "Negombo", lat: 7.2087, lng: 79.8542 },
  { name: "Pinnawala", lat: 6.825, lng: 80.125 },
  { name: "Ella", lat: 6.8847, lng: 81.0552 },
  { name: "Sigiriya", lat: 7.2333, lng: 80.5833 },
  { name: "Anuradhapura", lat: 8.3114, lng: 80.4037 },
];

export default function MapView() {
  return (
    <div className="w-full h-full rounded-xl overflow-hidden z-10">
      <MapContainer
        center={[7.8731, 80.7718]}
        zoom={7}
        scrollWheelZoom={true}
        className="h-full w-full"
      >
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {locations.map((loc, i) => (
          <Marker key={i} position={[loc.lat, loc.lng]}>
            <Popup>
              <b>{loc.name}</b>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
