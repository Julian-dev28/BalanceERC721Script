# ERC721 Ownership and AVAX Balance Checking scripts

See `./scripts`

## Local development

In CLI, run the command:

```zsh
yarn
```

Change [`envExample.json`](./envExample.json) to ``.env.json`` and input the required data <br>
_You can provide empty strings for local development_


Change addresses and tokenIds found in `./scripts/constants.ts`<br>
Change target NFT addresses in scripts<br>

Users can use either script to quickly view tokenId Owners
## Scripts
```zsh
yarn compile
```

```zsh
yarn getOwners --network mainnet
```

```zsh
yarn getOwner --network mainnet
```

```zsh
yarn getBalances --network mainnet
```
see [`package.json`](./package.json) for more

