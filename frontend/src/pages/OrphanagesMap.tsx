import React from "react";
import { Link } from "react-router-dom";
import { FiArrowRight, FiPlus } from "react-icons/fi";
import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";
import Leaflet from "leaflet";

import "leaflet/dist/leaflet.css";

import mapMarkerImg from "../images/map-marker.svg";

import "../styles/pages/orphanages-map.css";

const mapIcon = Leaflet.icon({
  iconUrl: mapMarkerImg,
  iconSize:[58, 68],
  iconAnchor:[29, 68],
  popupAnchor: [170, 2],
});

function OrphanagesMap() {
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarkerImg} alt="Happy" />

          <h2>Choose an Orphanage in the Map</h2>
          <p>Many children are waiting for your visit :</p>
        </header>

        <footer>
          <strong>Cologne</strong>
          <span>North-Rhine Westphalia</span>
        </footer>
      </aside>

      <MapContainer
        center={[-27.2092052,-49.6401092]}
        zoom={14}
        style={{ width: "100%", height: "100%" }}
      >
        {/* {<TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />} */}
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
        />

        <Marker 
            icon={mapIcon}
            position={[-27.2092052,-49.6401092]}
        >
        <Popup closeButton={false} minWidth={248} maxWidth={248} className="map-popup">
            Lar das Meninas
            <Link to ="orphanages/1" >
                <FiArrowRight size={28} color="#FFF" />
            </Link>
        </Popup>
        </Marker>

      </MapContainer>
      {/* streets-v11 */}
      {/* light-v10 */}
      {/* satellite-v9 */}
      {/* outdoors-v11 */}
      {/* dark-v10 */}

      <Link to="/orphanages/create" className="create-orphanage">
        <FiPlus size={32} color="#FFF" />
      </Link>
    </div>
  );
}

export default OrphanagesMap;