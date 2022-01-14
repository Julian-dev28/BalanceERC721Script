import { ethers } from 'hardhat';
import {BULKTOKENIDS, NFT_ABI} from './constants'

async function main() {

    const NFT_ADDRESS = '0x0c2485d08c7611ceafdbb370dad4fa86b5935ff4';
    const ADDRESS = '0xa6f793FbbFf1e78Ce60E560B70aD3D18C8200b8c'
    const CONTRACT = await ethers.getContractFactory('BalanceCheckerNFT')
    const BALANCE_CHECKER = await CONTRACT.attach(ADDRESS)

    const NFT_OWNERS = await BALANCE_CHECKER.tokenBalance(NFT_ADDRESS,BULKTOKENIDS)
    console.log(NFT_OWNERS)

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
