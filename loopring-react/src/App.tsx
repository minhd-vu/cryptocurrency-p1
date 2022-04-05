import "./styles.css";
import { useConnect } from "./useConnect";
import { walletServices, connectProvides } from "@loopring-web/web3-provider";
import * as sdk from "@loopring-web/loopring-sdk";

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
      </div>
    </div>
  );
}
