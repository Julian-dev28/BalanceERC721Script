//SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.0;

import '@openzeppelin/contracts/token/ERC721/ERC721.sol';

struct tokenIdAndOwner {
  uint256 tokenId;
  address owner;
}

contract BalanceCheckNFT {
  /* Fallback function, don't accept any ETH */
  function tokenBalance(address tokenAddress, uint256[] memory tokenId)
    public
    view
    returns (tokenIdAndOwner[] memory holders)
  {
    tokenIdAndOwner[] memory owners = new tokenIdAndOwner[](tokenId.length);

    for (uint256 i = 0; i < tokenId.length; i++) {
      owners[i].tokenId = tokenId[i];
      owners[i].owner = ERC721(tokenAddress).ownerOf(tokenId[i]);
    }

    holders = owners;
  }
}
