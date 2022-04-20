import { web3 } from "./util/interact";

const Map = async (props) => {
  const response = await web3.alchemy.getNftMetadata({
    contractAddress: "0x4c4a07f737bf57f6632b6cab089b78f62385acae",
    tokenId: 3669,
  });
  console.log(response);

  return <></>;
};

export default Map;
