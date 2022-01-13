const { ethers, waffle} = require("hardhat");
import {BULKTOKENIDS} from './constants';
import {nftAbi} from './constants'

async function main() {
    const tokenId = 50
    const NFTAddress = '0x0c2485d08c7611ceafdbb370dad4fa86b5935ff4';
    const contract = await ethers.getContractFactory('ERC721')
    const NFT = await contract.attach(NFTAddress)
    const NFTOWner = await NFT.ownerOf(tokenId)
    console.log({tokenId, NFTOWner})
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
