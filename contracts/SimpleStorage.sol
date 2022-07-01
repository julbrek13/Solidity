//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;
import "hardhat/console.sol";

contract Simplestorage {
    string private storag;

    constructor(string memory _storag) {
        console.log("Deploying a Simplestorage with storag:", _storag);
        storag = _storag;
    }

    function store() public view returns (string memory) {
        return storag;
    }

}

//0x5FbDB2315678afecb367f032d93F642f64180aa3
