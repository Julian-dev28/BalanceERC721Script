import { ethers } from 'hardhat';
import { NFT_ABI } from './constants';

async function main() {
    const PROVIDER = ethers.provider
    const TOKEN_ID = 50
    const NFT_ADDRESS = '0x0c2485d08c7611ceafdbb370dad4fa86b5935ff4';
    let NFT = new ethers.Contract(NFT_ADDRESS, NFT_ABI, PROVIDER)
    let OWNER = await NFT.ownerOf(TOKEN_ID) 
    console.log({TOKEN_ID, OWNER})
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
