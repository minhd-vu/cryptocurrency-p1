import "./styles.css";
import { useConnect } from "./useConnect";
import { walletServices, connectProvides } from "@loopring-web/web3-provider";
import * as sdk from "@loopring-web/loopring-sdk";
import axios from "axios";

const chainId = sdk.ChainId.GOERLI;

export const LoopringAPI = {
  userAPI: new sdk.UserAPI({ chainId }),
  exchangeAPI: new sdk.ExchangeAPI({ chainId }),
  globalAPI: new sdk.GlobalAPI({ chainId }),
  ammpoolAPI: new sdk.AmmpoolAPI({ chainId }),
  walletAPI: new sdk.WalletAPI({ chainId }),
  wsAPI: new sdk.WsAPI({ chainId }),
  whitelistedUserAPI: new sdk.WhitelistedUserAPI({ chainId }),
  nftAPI: new sdk.NFTAPI({ chainId }),
  delegate: new sdk.DelegateAPI({ chainId }),
  __chainId__: chainId,
};

export default function App() {
  useConnect();
  const metaMask = async () => {
    walletServices.sendDisconnect("", "should new provider");
    await connectProvides.MetaMask({});
  };
  const walletConnect = async () => {
    walletServices.sendDisconnect("", "should new provider");
    await connectProvides.WalletConnect({ account: undefined, darkMode: true });
  };
  const coinbase = async () => {
    walletServices.sendDisconnect("", "should new provider");
    await connectProvides.Coinbase({});
  };
  const disconnect = () => {
    walletServices.sendDisconnect("", "disconnect");
  };
  const getNFTData = async () => {
    const res = await axios.get(
      "https://uat2.loopring.io/api/v3/nft/info/nftData",
      {
        params: {
          minter: "0x10e7ed474f44994320e3a3d10b4585e489ec58ec",
          tokenAddress: "0xd2800b1c2f718b5190542426e899250342f9ab49",
          nftId:
            "0x820feae99d9828fbb021a814f6a929bd9aacec04eef9bd4a80346dc809e0e112",
        },
      }
    );
    // const res = await LoopringAPI.nftAPI.getContractNFTMeta({
    //   web3: connectProvides.usedProvide,
    //   tokenAddress: "0xd2800b1c2f718b5190542426e899250342f9ab49",
    //   _id: "0x820feae99d9828fbb021a814f6a929bd9aacec04eef9bd4a80346dc809e0e112",
    //   nftId:
    //     "0x820feae99d9828fbb021a814f6a929bd9aacec04eef9bd4a80346dc809e0e112",
    //   nftType: sdk.NFTType.ERC1155,
    // });
    // const res = await LoopringAPI.nftAPI.getInfoForNFTTokens({
    //   nftDatas: [
    //     "0x820feae99d9828fbb021a814f6a929bd9aacec04eef9bd4a80346dc809e0e112",
    //   ],
    // });
    console.log(res);
  };
  return (
    <div className="App">
      <h1>Hello Loopring React</h1>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <button onClick={metaMask}>
          <img
            src="https://static.loopring.io/assets/svg/meta-mask.svg"
            alt="MetaMask"
            height="36"
          />
        </button>
        <button onClick={walletConnect}>
          <img
            src="https://static.loopring.io/assets/svg/wallet-connect.svg"
            alt="walletConnect"
            height="36"
          />
        </button>
        <button onClick={coinbase}>
          <img
            src="https://static.loopring.io/assets/svg/coinbase-wallet.svg"
            alt="MetaMask"
            height="36"
          />
        </button>
        <button onClick={disconnect}>disconnect</button>
        <button onClick={getNFTData}>getNFTData</button>
      </div>
    </div>
  );
}
