
const Web3 = require("web3");

(async () => {
  const web3 = new Web3(
    "https://api.avax.network/ext/bc/C/rpc"
  );

  // address of ERC721 NFT
  const nftAddress = "0x0c2485d08c7611ceafdbb370dad4fa86b5935ff4";
  // ERC721 abi to interact with contract
  const nftAbi = [
    {
      inputs: [
        {
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
      ],
      name: "ownerOf",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
  ];

  // interact with contract
  const nftContract = new web3.eth.Contract(nftAbi, nftAddress);

  // generate call data to get owner of token #1
  const callData1 = nftContract.methods["ownerOf"](500).encodeABI();

  // generate call data to get owner of token #2
  const callData2 = nftContract.methods["ownerOf"](1000).encodeABI();

  // generate call data to get owner of token #3
  const callData3 = nftContract.methods["ownerOf"](1500).encodeABI();

  // ----------------------------------------------------------------------------------
  // multicall
  // ----------------------------------------------------------------------------------

  // address of multicall contract for ETH mainnet
  const multicallAddress = "0xE84FaeC71b906B8325d8E9cd1B54a3cDCFb2697F";
  // multicall abi to interact with contract
  const multicallAbi = [
    {
      constant: false,
      inputs: [
        {
          components: [
            { name: "target", type: "address" },
            { name: "callData", type: "bytes" },
          ],
          name: "calls",
          type: "tuple[]",
        },
      ],
      name: "aggregate",
      outputs: [
        { name: "blockNumber", type: "uint256" },
        { name: "returnData", type: "bytes[]" },
      ],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
  ];

  // interact with multicall contract
  const multicallContract = new web3.eth.Contract(
    multicallAbi,
    multicallAddress
  );

  // provide args to multicall contract.
  // this will allow multicall to know who and what to call
  const multicallArgs = [
    {
      target: nftAddress,
      callData: callData1,
    },
    {
      target: nftAddress,
      callData: callData2,
    },
    {
      target: nftAddress,
      callData: callData3,
    },
  ];

  // call multicall. The multicallArgs will call the NFT contract
  // and return the ownersOf token id 1,2,3
  const ownersOf = await multicallContract.methods["aggregate"](
    multicallArgs
  ).call();
  console.log(ownersOf);
})();
