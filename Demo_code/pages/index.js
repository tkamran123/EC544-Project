import { useWeb3React } from "@web3-react/core";
import { InjectedConnector } from "@web3-react/injected-connector";
import { abi } from "../constants/abi";
import { useState, useEffect } from "react";
import { ethers } from "ethers";
import { messagePrefix } from "@ethersproject/hash";

export const injected = new InjectedConnector();

export default function Home() {
  const [hasMetamask, setHasMetamask] = useState(false);

  useEffect(() => {
    if (typeof window.ethereum !== "undefined") {
      setHasMetamask(true);
    }
  });

  const {
    active,
    activate,
    chainId,
    account,
    library: provider,
  } = useWeb3React();

  async function connect() {
    if (typeof window.ethereum !== "undefined") {
      try {
        await activate(injected);
        setHasMetamask(true);
      } catch (e) {
        console.log(e);
      }
    }
  }

  async function execute() {
    if (active) {
      const signer = provider.getSigner();
      //const contractAddress = "0xE902607aEC371A4667C1f119272F2141D3B50ed7";
      const contractAddress = "0x87D3c55312f62E1A10FD84e603366A8558e1b015";
      const contract = new ethers.Contract(contractAddress, abi, signer);
      try {
        await contract.toggle();
        
        let state = await contract.State();
        console.log(state)
        
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("Please install MetaMask");
    }
  }

  return (
    <div className="mainContainer">
      <div className="dataContainer">
        <div className="header">
        👋 Hey there!
        </div>

        <div className="bio">
         Connect wallet and request access to enter! 
        </div>

        <div>
        {hasMetamask ? (
          active ? (
            "Connected to wallet! "
          ) : (
          <button className="waveButton" onClick={() => connect()}>Connect</button>
          )
        ) : (
          "Please install metamask"
        )}

        {active ? <button className="waveButton" onClick={() => execute()}>Unlock/lock the door</button> : ""}
        </div>
    </div>
  </div>

    
  );
}
