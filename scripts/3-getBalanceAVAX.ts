const { ethers, waffle} = require("hardhat");
import { ADDRESSES } from './constants';

async function main() {
    
    const address = '0xD3F4C46A7CB7b74c5183F950C8e7aFBA90466148'
    const contract = await ethers.getContractFactory('BalanceCheckerAVAX')
    const BalanceChecker = await contract.attach(address)

    const balances = await BalanceChecker.tokenBalance(ADDRESSES)
    console.log({balances})

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
