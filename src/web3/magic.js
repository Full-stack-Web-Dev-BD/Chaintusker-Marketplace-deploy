import { Magic } from "magic-sdk";
import Web3 from "web3";
import dotenv from 'dotenv';

dotenv.config();
console.log(process.env)
// Configure Polygon Testnet
const mumbaiNodeOptions = {
    rpcUrl: 'https://rpc-mumbai.maticvigil.com/',
    chainId: 80001,
    networkName: 'Mumbai Testnet'
};

export const magicMumbai = new Magic(
    "pk_live_651021D283F34999",
    { network: mumbaiNodeOptions }
)
magicMumbai.network = mumbaiNodeOptions;

// Console DID Token for Mumbai Testnet
console.log(magicMumbai.user.idToken);

export const web3Mumbai = new Web3(magicMumbai.rpcProvider);

// Configure Polygon Mainnet
const maticNodeOptions = {
    rpcUrl: 'https://rpc-mainnet.maticvigil.com/',
    chainId: 137,
    networkName: 'Matic Mainnet'
};

export const magicMatic = new Magic(
    "pk_live_651021D283F34999",
    { network: maticNodeOptions }
)
magicMatic.network = maticNodeOptions;

export const web3Matic = new Web3(magicMatic.rpcProvider);