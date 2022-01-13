import { task } from 'hardhat/config'
import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers'
import { BigNumber } from 'ethers'
import '@typechain/hardhat'
import '@nomiclabs/hardhat-ethers'
import '@nomiclabs/hardhat-waffle'
import 'hardhat-gas-reporter'
import '@nomiclabs/hardhat-etherscan'
import { MNEMONIC, APIKEY, COINMARKET } from './.env.json'

// When using the hardhat network, you may choose to fork Fuji or Avalanche Mainnet
// This will allow you to debug contracts using the hardhat network while keeping the current network state
// To enable forking, turn one of these booleans on, and then run your tasks/scripts using ``--network hardhat``
// For more information go to the hardhat guide
// https://hardhat.org/hardhat-network/
// https://hardhat.org/guides/mainnet-forking.html
const FORK_FUJI = false
const FORK_MAINNET = false
const forkingData = FORK_FUJI
  ? {
    url: 'https://api.avax-test.network/ext/bc/C/rpc',
  }
  : FORK_MAINNET
    ? {
      url: 'https://api.avax.network/ext/bc/C/rpc',
    }
    : undefined

task('accounts', 'Prints the list of accounts', async (args, hre): Promise<void> => {
  const accounts: SignerWithAddress[] = await hre.ethers.getSigners()
  accounts.forEach((account: SignerWithAddress): void => {
    console.log(account.address)
  })
})

task('balances', 'Prints the list of AVAX account balances', async (args, hre): Promise<void> => {
  const accounts: SignerWithAddress[] = await hre.ethers.getSigners()
  for (const account of accounts) {
    const balance: BigNumber = await hre.ethers.provider.getBalance(account.address)
    console.log(`${account.address} has balance ${balance.toString()}`)
  }
})

export default {
  gasReporter: {
    currency: 'USD',
    // coinmarketcap: COINMARKET,
    gasPrice: 100,
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: APIKEY,
  },

  solidity: {
    compilers: [
      {
        version: '0.8.0',
        settings: {
          optimizer: {
            enabled: true,
            runs: 10,
          },
        },
      },
      {
        version: '0.8.10',
        settings: {
          optimizer: {
            enabled: true,
            runs: 10,
          },
        },
      },
      {
        version: '0.4.21',
        settings: {
          optimizer: {
            enabled: true,
            runs: 10,
          },
        },
      },
    ],
  },
  networks: {
    hardhat: {
      gasPrice: 225000000000,
      chainId: 43114, //Only specify a chainId if we are not forking
      // forking: {
      //   url: 'https://api.avax.network/ext/bc/C/rpc',
      // },
    },
    FUJI: {
      url: 'https://api.avax-test.network/ext/bc/C/rpc',
      gasPrice: 225000000000,
      chainId: 43113,
      accounts: { mnemonic: MNEMONIC },
    },
    mainnet: {
      url: 'https://api.avax.network/ext/bc/C/rpc',
      gasPrice: 225000000000,
      chainId: 43114,
      accounts: { mnemonic: MNEMONIC },
    },
  },
}
