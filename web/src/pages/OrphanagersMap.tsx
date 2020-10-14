import React from "react";
import { Link } from "react-router-dom";
import { FiPlus } from "react-icons/fi";
import { Map, TileLayer } from "react-leaflet";

import 'leaflet/dist/leaflet.css';

import mapMarker from "../images/map-marker.svg";
import "../styles/pages/orphanages-map.css";

function OrphanagersMap() {
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarker} alt="Happy" />

          <h2>Escolha um orfanato</h2>
          <p>Muitas crianças te esperam :)</p>
        </header>

        <footer>
          <strong>Marechal Cândido Rondon</strong>
          <span>Paraná</span>
        </footer>
      </aside>

      <Map
        center={[-24.5730669, -54.0738987]}
        zoom={15}
        style={{ width: "100%", height: "100%" }}
      >
          <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      </Map>

      <Link to="" className="create-orphanage">
        <FiPlus size={32} color="#fff" />
      </Link>
    </div>
  );
}

export default OrphanagersMap;
