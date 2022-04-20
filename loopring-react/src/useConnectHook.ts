import React from "react";
import { provider } from "web3-core";
import {
  walletServices,
  Commands,
  ErrorType,
  ProcessingType,
} from "@loopring-web/web3-provider";
export enum ChainId {
  MAINNET = 1,
  GOERLI = 5
}
export function useConnectHook({
  // handleChainChanged,
  handleConnect,
  handleAccountDisconnect,
  handleError,
  handleProcessing,
}: {
  handleProcessing?: (props: {
    type: keyof typeof ProcessingType;
    opts: any;
  }) => void;
  handleError?: (props: {
    type: keyof typeof ErrorType;
    errorObj: any;
  }) => void;
  // handleChainChanged?: (chainId: string) => void,
  handleConnect?: (props: {
    accounts: string;
    provider: provider;
    chainId: ChainId | "unknown";
  }) => void;
  handleAccountDisconnect?: () => void;
}) {
  const subject = React.useMemo(() => walletServices.onSocket(), []);
  React.useEffect(() => {
    const subscription = subject.subscribe(
      ({ data, status }: { status: keyof typeof Commands; data?: any }) => {
        switch (status) {
          case "Error":
            if (handleError) {
              handleError(data);
            }
            break;
          case "Processing":
            if (handleProcessing) {
              handleProcessing(data);
            }
            break;
          // case 'ChangeNetwork':
          //     // {chainId} = data ? data : {chainId: undefined};
          //     handleChainChanged ? handleChainChanged(data.chainId) : undefined;
          //     break
          case "ConnectWallet": // provider, accounts, chainId, networkId
            const { accounts, provider, chainId } = data
              ? data
              : {
                  accounts: undefined,
                  provider: undefined,
                  chainId: ChainId.GOERLI,
                };
            if (handleConnect) {
              handleConnect({ accounts, provider, chainId });
            }
            break;
          case "DisConnect":
            if (handleAccountDisconnect) {
              handleAccountDisconnect();
            }
        }
      }
    );
    return () => subscription.unsubscribe();
  }, [subject]);
}