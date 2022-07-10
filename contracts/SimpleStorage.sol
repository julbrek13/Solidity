//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;
import "hardhat/console.sol";

contract Simplestorage {
    uint256 public favoriteNumber;
    string private storag;
    struct People {
        uint256 favoriteNumber;
        string name;
    }
    People[] public people;

    constructor(string memory _storag) {
        console.log("Deploying a Simplestorage with storag:", _storag);
        storag = _storag;
    }

    function store() public view returns (string memory) {
        return storag;
    }

    function store(uint256 _favoriteNumber) public {
        favoriteNumber = _favoriteNumber;
    }

    function add(string memory _name, uint256 _favoriteNumber) public {
        //people.push(People(_favoriteNumber, _name));
        People memory newPerson = People({
            favoriteNumber: _favoriteNumber,
            name: _name
        });
        people.push(newPerson);
    }
}

//0x5FbDB2315678afecb367f032d93F642f64180aa3
