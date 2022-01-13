# ERC721 Balance Checking script

See `BalanceERC721Script/scripts`

## Local development

In CLI, run the command:

```zsh
yarn
```

Change [`envExample.json`](./envExample.json) to ``.env.json`` and input the required data <br>
_You can provide empty strings for local development_


Change addresses and tokenIds found in `BalanceERC721Script/helpers/constants.ts`<br>
Change target NFT addresses in scripts<br>

Users can use either script to quickly view tokenId Owners
## Scripts
```zsh
yarn compile
```

```zsh
yarn getBalance --network mainnet
```

```zsh
yarn getBalanceAlt --network mainnet
```

see [`package.json`](./package.json) for more

