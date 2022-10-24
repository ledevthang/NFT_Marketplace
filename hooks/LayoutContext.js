import { useState, useEffect, createContext, useMemo } from "react";
import detectEthereumProvider from "@metamask/detect-provider";
import Web3 from "web3";
export const LayoutContext = createContext({});

export const LayoutProvider = ({ children }) => {
  const [web3Api, setWeb3Api] = useState({
    provider: null,
    web3: null,
    contract: null,
    isLoading: true,
  });
  useEffect(() => {
    const loadProviders = async () => {
      const provider = await detectEthereumProvider();
      if (provider) {
        const web3 = new Web3(provider);
        setWeb3Api({ web3, provider, contract: null, isLoading: false });
      } else {
        setWeb3Api((api) => ({ ...api, isLoading: false }));
        console.log("Please, install Metamask.");
      }
    };
    loadProviders();
  }, []);

  useEffect(() => {
    web3Api.provider &&
      web3Api.provider.on("accountsChanged", (accounts) =>
        setWeb3Api({ ...web3Api, account: accounts[0] })
      );
  }, [web3Api.provider]);
  const connectMetamask = web3Api.provider
    ? async () => {
        try {
          const accounts = await web3Api.provider.request({
            method: "eth_requestAccounts",
          });
          setWeb3Api({ ...web3Api, account: accounts[0] });
        } catch (error) {
          console.log(error);
        }
      }
    : () => {
        console.error("Cannot connect to Metamask");
      };
  const _web3Api = useMemo(() => {
    return {
      ...web3Api,
      connect: connectMetamask,
    };
  }, [web3Api]);
  return (
    <LayoutContext.Provider value={_web3Api}>{children}</LayoutContext.Provider>
  );
};
