import { web3 } from "./util/interact";
import { useState, useEffect } from "react";

const Map = (props) => {
  const [metadata, setMetadata] = useState({});

  useEffect(() => {
    async function init() {
      const response = await web3.alchemy.getNftMetadata({
        contractAddress: "0x4c4a07f737bf57f6632b6cab089b78f62385acae",
        tokenId: 3669,
      });
      console.log(response);
      setMetadata(response);
    }
    init();
  }, []);

  return <p>{JSON.stringify(metadata)}</p>;
};

export default Map;
