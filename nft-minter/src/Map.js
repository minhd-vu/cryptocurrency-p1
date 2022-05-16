import { useCallback, useEffect, useRef, useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import { web3 } from "./util/interact";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

const Pin = (props) => {
  const { size = 50, onClick, image } = props;

  return (
    <img
      src={image}
      alt="Pin"
      height={size}
      viewBox="0 0 24 24"
      style={{
        cursor: "pointer",
        transform: `translate(${-size / 2}px,${-size}px)`,
      }}
      onClick={onClick}
    />
  );
};

const Map = (props) => {

  const [tokens, setTokens] = useState([]);

  const mapContainer = useRef(null);
  const map = useRef(null);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/emarino135/cl395mdm3001714qgcd7adwsz",
      center: [-77.3074, 38.8298],
      zoom: 8,
    });
  });

  // fetch all of the NFTs from the contract with location metadata
  useEffect(() => {
    async function init() {
      const tokens = [];
      let tokenId = 3669;
      let response;
      do {
        response = await web3.alchemy.getNftMetadata({
          contractAddress: "0x4c4a07f737bf57f6632b6cab089b78f62385acae",
          tokenId: tokenId++,
        });
        if (response.metadata.location) {
          tokens.push(response.metadata);
        }
      } while (!response.error);

      setTokens(tokens);
    }
    init();
  }, []);

  return (
    <div
      ref={mapContainer}
      style={{ height: "100vh" }}
      className="map-container"
    >
      
    </div>
  );
};

export default Map;
