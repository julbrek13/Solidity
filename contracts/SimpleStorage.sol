//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;
import "hardhat/console.sol";

contract Simplestorage {
    uint256 public favoriteNumber;
    string private storag;

    constructor(string memory _storag) {
        console.log("Deploying a Simplestorage with storag:", _storag);
        storag = _storag;
    }

    function store() public view returns (string memory) {
        return storag;
    }

    function store(uint256 _favoriteNumber) public {
        favoriteNumber = _favoriteNumber;
        uint256 testVar = 5;
    }

    //functions view and pure
    //view, no consume gas, no es una tranaccion solo reviso el estado de una vairable
    function retrieve() public view returns (uint256) {
        return favoriteNumber;
    }

    //pure, se utiliza para hacer dunciones que quiero utilizar que no necesita leer ningun almacenamiento por lo tanto no consume gas
    function add() public pure returns (uint256) {
        return (1 + 1);
    }
}

//0x5FbDB2315678afecb367f032d93F642f64180aa3
