import { ethers } from 'hardhat';
import { ADDRESSES } from './constants';

async function main() {
    
    const CONTRACT = await ethers.getContractFactory('BalanceCheckerAVAX')
    const BALANCE_CHECKER = await CONTRACT.attach('0xD3F4C46A7CB7b74c5183F950C8e7aFBA90466148')
    const BALANCES = await BALANCE_CHECKER.tokenBalance(ADDRESSES)
    console.log({BALANCES});

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
