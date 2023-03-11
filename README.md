# ERC721 Ownership and AVAX Balance Checking Scripts

This project provides scripts for checking the ownership of ERC721 tokens and AVAX balances on the Avalanche blockchain. The scripts can be found in the `./scripts` directory.

## Local Development

To use the scripts, follow these steps:

1. Install dependencies by running `yarn` in the command line interface (CLI).
2. Change `envExample.json` to `.env.json` and input the required data. You can provide empty strings for local development.
3. Change the addresses and token IDs found in `./scripts/constants.ts`.
4. Change the target NFT addresses in the scripts.

## Scripts

The following scripts are available:

- `yarn compile`: Compiles the smart contracts.
- `yarn getOwners --network mainnet`: Displays the owners of the ERC721 tokens on the Avalanche mainnet.
- `yarn getOwner --network mainnet`: Displays the owner of a single ERC721 token on the Avalanche mainnet.
- `yarn getBalances --network mainnet`: Displays the AVAX balances of the specified addresses on the Avalanche mainnet.

For more information on available scripts, please see the `package.json` file.

## Contributing

This project is open-source, and contributions are welcome. To contribute, please fork this repository and submit a pull request with your changes. Before submitting a pull request, please make sure that your changes adhere to the project's coding standards and pass all tests.

## License

This project is licensed under the MIT License.
