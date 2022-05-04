# EC544 Project: Blockchain Powered Smart Lock

Team 10:
* Juehao Lin
* Talha Kamran
* Nuwapa Promchotichai (Prim)

Technology Used for demo:
* Ganache Blockchain & Metamask
* Remix IDE (to deploy contract)
* web3-react with nextjs / react
* Raspberry pi 4 & door locking/unlocking mechanisms (with solenoid)


## Quickstart for web3 set up

1. Clone this repository and install dependencies.
2. If you want to test with your own contract, otherwise skip this step: 
  * Deploy your contract with remix IDE. Add your contract ABI to abi.js, update the index.js to your contract address, call the function from index.js based on the function from your contract.
3. Add metamask to chrome browser extension and set up metamask local test network with RPC server provided via Ganache. Chain ID for Ganache is 1337.
4. Run ```yarn dev``` via terminal to run the project and test the web3 functionalities.
  * The UI consists of two buttons: connect and Unlock/lock the door. Connect button will connect your Metamask wallet. Once cononected to a wallet, you can click the button to unlock/lock the door. 

## Quickstart for Raspberry Pi set up

Hardware Parts:
* Raspberry Pi 4, MCU for the system
* 1, 5V Relay Module
* 1, DC 12V Solenoid Electromagnetic Mini Door Lock
* Female to female jumper wires
* Male to female jumper wires
* 1, 12V 2A Power Supply
* 1, Female DC Power Jack Adapter

Requirements:
* Node.js
* npm
* web3

1. Wire the hardware according to the diagram

![doorlock](https://github.com/tkamran123/EC544-Project/blob/main/Demo_code/hwdiagram.png)

2. Download the entryRead.js and checkState.sh to your raspberry pi.
3. Set up the bash script by: 
```
chmod +x checkState.sh
```
4. Follow [link](http://raspberrypi-aa.github.io/session2/bash.html) to set up using GPIO from bash
5. run bash script via raspberry pi by:
```
bash checkState.sh
```

## Video demonstration
[![IMAGE ALT TEXT](http://img.youtube.com/vi/j_uyuUCPhrg/0.jpg)](https://www.youtube.com/watch?v=j_uyuUCPhrg "EC544 Demo")
