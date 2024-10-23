// src/components/MapComponent.js
import React, { useState, useRef } from 'react';
import { MapContainer, TileLayer, useMapEvents, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import './MapComponent.css';

// Default marker icon fix (Leaflet marker issue in React)
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

// Component to handle map clicks
const MapEvents = ({ onAddPin }) => {
  const [position, setPosition] = useState(null);
  const [remark, setRemark] = useState('');
  const [address, setAddress] = useState('');

  const map = useMapEvents({
    click(e) {
      const { lat, lng } = e.latlng;
      setPosition({ lat, lng });
      fetchAddress(lat, lng); // Fetch address based on coordinates
      map.flyTo([lat, lng], map.getZoom());
    },
  });

  const fetchAddress = async (lat, lng) => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`
      );
      const data = await response.json();
      setAddress(data.display_name || 'Address not found');
    } catch (error) {
      console.error('Error fetching address:', error);
      setAddress('Unable to fetch address');
    }
  };

  const handleSavePin = () => {
    if (position && remark) {
      const newPin = { ...position, remark, address };
      onAddPin(newPin); // Save the pin with remark and address
      setPosition(null); // Reset after saving
      setRemark('');
      setAddress('');
    } else {
      alert('Please add a remark before saving!');
    }
  };

  return (
    <>
      {position && (
        <Marker position={[position.lat, position.lng]}>
          <Popup>
            <div className="popup-content">
              <textarea
                className="remark-textarea"
                value={remark}
                onChange={(e) => setRemark(e.target.value)}
                placeholder="Add a remark..."
              />
              <div className="address-text">{address}</div>
              <button className="save-button" onClick={handleSavePin}>
                Save Pin
              </button>
            </div>
          </Popup>
        </Marker>
      )}
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
    </>
  );
};

const MapComponent = ({ onAddPin }) => (
  <MapContainer center={[51.505, -0.09]} zoom={13} className="map-container">
    <MapEvents onAddPin={onAddPin} />
  </MapContainer>
);

export default MapComponent;
