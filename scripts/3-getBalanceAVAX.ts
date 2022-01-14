import { ethers } from 'hardhat';
import { ADDRESSES } from './constants';

async function main() {
    // const provider = ethers.getDefaultProvider('https://api.avax.network/ext/bc/C/rpc')
    // const balances = await ethers.utils.formatEther( await ethers.BigNumber.from (await provider.getBalance('0xC85FaFdd93a84f77174bC5Fc7c2031A3D76630A1'))).toString();
    const CONTRACT = await ethers.getContractFactory('BalanceCheckerAVAX')
    const BALANCE_CHECKER = await CONTRACT.attach('0xD3F4C46A7CB7b74c5183F950C8e7aFBA90466148')
    const BALANCES = await BALANCE_CHECKER.tokenBalance(ADDRESSES)
    console.log(JSON.stringify(BALANCES), null, 2)

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
