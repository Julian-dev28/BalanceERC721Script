const { ethers, waffle} = require("hardhat");
import {BULKTOKENIDS} from '../helpers/constants'

async function main() {

    const NFTAddress = '0x0c2485d08c7611ceafdbb370dad4fa86b5935ff4';
    
    const address = '0xa6f793FbbFf1e78Ce60E560B70aD3D18C8200b8c'
    const contract = await ethers.getContractFactory('BalanceCheckNFT')
    const BalanceChecker = await contract.attach(address)

    const balanceNFT = await BalanceChecker.tokenBalance(NFTAddress,BULKTOKENIDS)
    console.log(balanceNFT)

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
