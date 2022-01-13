//SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.0;

struct OwnerAndBalance {
  address owner;
  uint256 balance;
}

contract BalanceCheckerAVAX {
  function tokenBalance(address[] memory userAddresses)
    public
    view
    returns (OwnerAndBalance[] memory holders)
  {
    OwnerAndBalance[] memory owners = new OwnerAndBalance[](userAddresses.length);

    for (uint256 i = 0; i < userAddresses.length; i++) {
      owners[i].owner = address(userAddresses[i]);
      owners[i].balance = address(userAddresses[i]).balance;
    }

    holders = owners;
  }
}
