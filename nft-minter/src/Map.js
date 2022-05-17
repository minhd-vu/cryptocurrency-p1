import { useCallback, useEffect, useRef, useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import { web3 } from "./util/interact";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

const Map = (props) => {
  const mapContainer = useRef(null);
  const map = useRef(null);

  // fetch all of the NFTs from the contract with location metadata
  useEffect(() => {
    async function init() {
      let tokenId = 3669;
      let response;
      do {
        response = await web3.alchemy.getNftMetadata({
          contractAddress: "0x4c4a07f737bf57f6632b6cab089b78f62385acae",
          tokenId: tokenId++,
        });
        if (response.metadata.location) {
          const coords = response.metadata.location;
          // add the marker here

          console.log(response.metadata);

          const size = 50;
          const el = document.createElement("img");
          el.src = response.metadata.image;
          el.style.height = `${size}px`;
          el.style.width = `${size}px`;
          el.style.cursor = "pointer";
          el.style.backgroundSize = "cover";
          el.style.backgroundImage = `url(${response.metadata.image})`;
          el.style.transform = `translate(${-size / 2}px,${-size}px)`;
          el.viewBox = "0 0 24 24";

          console.log(el);

          new mapboxgl.Marker(el)
            .setLngLat([coords.longitude, coords.latitude])
            .addTo(map.current);
        }
      } while (!response.error);
    }

    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/emarino135/cl395mdm3001714qgcd7adwsz",
      center: [-77.3074, 38.8298],
      zoom: 8,
    });

    init();
  }, []);

  return (
    <div
      ref={mapContainer}
      style={{ height: "100vh" }}
      className="map-container"
    />
  );
};

export default Map;
