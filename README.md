# EC544 Project: Blockchain Powered Smart Lock

**Team 10:**
* Juehao Lin
* Talha Kamran
* Nuwapa Promchotichai (Prim)

# Demo Video
[![IMAGE ALT TEXT](http://img.youtube.com/vi/j_uyuUCPhrg/0.jpg)](https://www.youtube.com/watch?v=j_uyuUCPhrg "EC544 Demo")

# Note

As mentioned in the section **VII. Demonstration Issues** of the report, we ran into issue with polygon public test network. Thus, our project demonstration was done using ganache and the local test network (RPC server with IP address). For more information on the issue, please refer to **VII. Demonstration Issues** section of the report

* [Demo_code]() folder contains file including web3 and files for raspberry pi used to demonstrate the project shown in the video
* Other files and folders on the main readme are the web3 app with polygon network.

---

## Running React on Repl.it

[React](https://reactjs.org/) is a popular JavaScript library for building user interfaces.

[Vite](https://vitejs.dev/) is a blazing fast frontend build tool that includes features like Hot Module Reloading (HMR), optimized builds, and TypeScript support out of the box.

Using the two in conjunction is one of the fastest ways to build a web app.

### Getting Started
- Hit run
- Edit [App.jsx](#src/App.jsx) and watch it live update!

By default, Replit runs the `dev` script, but you can configure it by changing the `run` field in the `.replit` file.

- In order to connect your wallet you have to swtich to the Polygon TestNet for this follow the steps below:
  - 1. Make sure you have the MetaMask extension for your browser
    2. Go to https://mumbai.polygonscan.com/ and scroll to the bottom and press "Add Polyogon Network" (Should have a MetaMask logo next to it)
    3. On the same website scroll to the top and switch from MainNet to  TestNet and then scroll to the bottom and  press "Add to Mumbai Network"
    4. Go to your MetaMask Extension and on top where it says Ethereum MainNet switch that to Polyogon TestNet.
    5. Before you connect your wallet get some FAKE money!
    6. Use this website to send yourself some fake money (MATIC token) to so you can use it to open the door: https://faucet.polygon.technology/
    8. Once you have your money, Now you are ready to connect your wallet. 
    9. Once you press Connect Wallet, it should prompt you to pay gas fees.
    10. This will begin the mining process which you can see if you inspect the website and look at the console.log
