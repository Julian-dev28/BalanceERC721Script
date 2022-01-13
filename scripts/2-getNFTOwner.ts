const { ethers, waffle} = require("hardhat");
import {BULKTOKENIDS, tokenAbi} from './constants';
import {nftAbi} from './constants'

async function main() {
    const provider = ethers.provider
    const tokenId = 50
    const NFTAddress = '0x0c2485d08c7611ceafdbb370dad4fa86b5935ff4';
    let nft = new ethers.Contract(NFTAddress, nftAbi, provider)
    let owner = await nft.ownerOf(tokenId) 
    console.log({tokenId, owner})
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
