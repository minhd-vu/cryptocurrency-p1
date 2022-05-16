import { useCallback, useEffect, useRef, useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import { web3 } from "./util/interact";

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
  const [viewport, setViewport] = useState({
    latitude: 38.8298,
    longitude: -77.3074,
    zoom: 8,
  });

  const [tokens, setTokens] = useState([]);
  const mapRef = useRef();

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

  const handleViewportChange = useCallback(
    (newViewport) => setViewport(newViewport),
    []
  );

  return (
    <div style={{ height: "100vh" }}>
      <ReactMapGL
        {...viewport}
        ref={mapRef}
        width="100%"
        height="100%"
        mapStyle="mapbox://styles/emarino135/cl395kp5v000715q5xkqsmi4h9"
        onViewportChange={handleViewportChange}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
      >
        {tokens.map((token, index) => (
          <Marker
            key={index}
            latitude={token.location.latitude}
            longitude={token.location.longitude}
          >
            <Pin image={token.image} />
          </Marker>
        ))}
      </ReactMapGL>
    </div>
  );
};

export default Map;
