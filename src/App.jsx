import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import "./App.css";
import abi from "./utils/EntryPortal.json"; 

const App = () => {
  const [currentAccount, setCurrentAccount] = useState("");
  const [allHistory, setHistory] = useState([]);
  const contractAddress = "0x319273d41004950C464DBcfd5b16758C55A63B78"; // Contract Block 1 Address
  
  /*
   * Create a method that gets all history from the contract
   */
  const getHistory = async () => {
    try {
      const { ethereum } = window;
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const EntryPortalContract = new ethers.Contract(contractAddress, contractABI, signer);

        /*
         * Call the getAllWaves method from your Smart Contract
         */
        const history = await EntryPortalContract.getHistory();


        /*
         * We only need address, timestamp, and message in our UI so let's
         * pick those out
         */
        let historyCleaned = [];
        history.forEach(enter => {
          historyCleaned.push({
            address: enter.student,
            timestamp: new Date(enter.timestamp * 1000)
          });
        });

        /*
         * Store our data in React State
         */
        setHistory(historyCleaned);
      } else {
        console.log("Ethereum object doesn't exist!")
      }
    } catch (error) {
      console.log(error);
    }
  }

  const contractABI = abi.abi;
  
  const checkIfWalletIsConnected = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        console.log("Make sure you have metamask!");
        return;
      } else {
        console.log("We have the ethereum object", ethereum);
      }

      const accounts = await ethereum.request({ method: "eth_accounts" });

      if (accounts.length !== 0) {
        const account = accounts[0];
        console.log("Found an authorized account:", account);
        setCurrentAccount(account);
         const EntryPortalContract = new 
        EntryPortalContract.getHistory(); 
      } else {
        console.log("No authorized account found")
      }
    } catch (error) {
      console.log(error);
    }
  }

  /**
  * Implement your connectWallet method here
  */
  const connectWallet = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        alert("Get MetaMask!");
        return;
      }
  

      const accounts = await ethereum.request({ method: "eth_requestAccounts" });

      console.log("Connected", accounts[0]);
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error)
    }
  }

  const enter = async () => {
    try {
      const { ethereum } = window;

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();

        //Using using contractABI here
        const EntryPortalContract = new ethers.Contract(contractAddress, contractABI, signer);

        /*
        * Execute the actual entry from your smart contract
        */
        const entryTxn = await EntryPortalContract.enter();
        console.log("Mining...", entryTxn.hash);

        await entryTxn.wait();
        console.log("Mined -- ", entryTxn.hash);


        //History of Entries - Denied & Allowed
        let final = await EntryPortalContract.state(); 
        EntryPortalContract.toggle(); 
        console.log("The door is...",final)
        //function showStatus() {
 // var val=contract.State.call();
 // console.log(val);

  //if (val == true) {
  //  lock.writeSync(0);
  //} else {
  //  lock.writeSync(1);
  
        let count = await EntryPortalContract.getTotalEntries();
        console.log("Retrieved total entry count...", count.toNumber());
      } else {
        console.log("Ethereum object doesn't exist!");
      }
    } catch (error) {
      console.log(error);
    }
}
  

  useEffect(() => {
    checkIfWalletIsConnected();
  }, [])

  return (
    <div className="mainContainer">
      <div className="dataContainer">
        <div className="header">
        👋 Hey there!
        </div>

        <div className="bio">
         Connect wallet and request access to enter! 
        </div>

        <button className="waveButton" onClick={enter}>
          Enter
        </button>

        {/*
        * If there is no currentAccount render this button
        */}
        {!currentAccount && (
          <button className="waveButton" onClick={connectWallet}>
            Connect Wallet
          </button>
        )}
        {allHistory.map((enter, index) => {
          return (
            <div key={index} style={{ backgroundColor: "OldLace", marginTop: "16px", padding: "8px" }}>
              <div>Address: {enter.address}</div>
              <div>Time: {enter.timestamp.toString()}</div>
            </div>)
                        })}
      </div>
    </div>
  );
}

export default App
