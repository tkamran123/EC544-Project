// Interaction with Ethereum
var Web3 = require('web3');

// connect to the node
var web3 = new Web3(new Web3.providers.HttpProvider('http://192.168.99.181:7545'));

// The contract that we are going to interact with
var contractAddress = '0x87D3c55312f62E1A10FD84e603366A8558e1b015';

var ABI = [
     {
       "inputs": [],
       "payable": false,
       "stateMutability": "nonpayable",
       "type": "constructor"
     },
     {
       "anonymous": false,
       "inputs": [
         {
           "indexed": true,
           "internalType": "address",
           "name": "previousOwner",
           "type": "address"
         },
         {
           "indexed": true,
           "internalType": "address",
           "name": "newOwner",
           "type": "address"
         }
       ],
       "name": "OwnershipTransferred",
       "type": "event"
     },
     {
       "constant": true,
       "inputs": [],
       "name": "State",
       "outputs": [
         {
           "internalType": "bool",
           "name": "",
           "type": "bool"
         }
       ],
       "payable": false,
       "stateMutability": "view",
       "type": "function"
     },
     {
       "constant": true,
       "inputs": [],
       "name": "isOwner",
       "outputs": [
         {
           "internalType": "bool",
           "name": "",
           "type": "bool"
         }
       ],
       "payable": false,
       "stateMutability": "view",
       "type": "function"
     },
     {
       "constant": true,
       "inputs": [],
       "name": "owner",
       "outputs": [
         {
           "internalType": "address",
           "name": "",
           "type": "address"
         }
       ],
       "payable": false,
       "stateMutability": "view",
       "type": "function"
     },
     {
       "constant": false,
       "inputs": [],
       "name": "renounceOwnership",
       "outputs": [],
       "payable": false,
       "stateMutability": "nonpayable",
       "type": "function"
     },
     {
       "constant": true,
       "inputs": [],
       "name": "state",
       "outputs": [
         {
           "internalType": "bool",
           "name": "",
           "type": "bool"
         }
       ],
       "payable": false,
       "stateMutability": "view",
       "type": "function"
     },
     {
       "constant": false,
       "inputs": [],
       "name": "toggle",
       "outputs": [
         {
           "internalType": "bool",
           "name": "",
           "type": "bool"
         }
       ],
       "payable": false,
       "stateMutability": "nonpayable",
       "type": "function"
     },
     {
       "constant": false,
       "inputs": [
         {
           "internalType": "address",
           "name": "newOwner",
           "type": "address"
         }
       ],
       "name": "transferOwnership",
       "outputs": [],
       "payable": false,
       "stateMutability": "nonpayable",
       "type": "function"
     }
   ];


var contract = new web3.eth.Contract(ABI, contractAddress);


let myVar;
async function myFunction(){
    myVar = await contract.methods.state().call();
 }


myFunction().then(()=> {
    var test = myVar;
    console.log(test)

})





