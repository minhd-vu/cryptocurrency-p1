import { web3 } from "./util/interact";
import { useState, useEffect } from "react";

const Map = (props) => {
  const [tokens, setTokens] = useState({});

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

  return <p>{JSON.stringify(tokens)}</p>;
};

export default Map;
