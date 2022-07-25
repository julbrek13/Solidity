
<<<<<<< HEAD
contract Simplestorage {
    uint256 public favoriteNumber;
    string private storag;
    uint256 public testVar = 0;
=======
// SPDX-License-Identifier: MIT
 pragma solidity ^0.8.0;
//import "hardhat/console.sol";


contract SimpleStorage {

    uint256 favoriteNumber;

>>>>>>> f1cf5d2595c622e4c11f98f8587d147cc2008402
    struct People {
        uint256 favoriteNumber;
        string name;
    }
    // uint256[] public anArray;
    People[] public people;

    mapping(string => uint256) public nameToFavoriteNumber;

    function store(uint256 _favoriteNumber) public {
        favoriteNumber = _favoriteNumber;
<<<<<<< HEAD
        testVar = 5;
    }

    function add(string memory _name, uint256 _favoriteNumber) public {
        //people.push(People(_favoriteNumber, _name));
        People memory newPerson = People({
            favoriteNumber: _favoriteNumber,
            name: _name
        });
        people.push(newPerson);
=======
    }
    
    function retrieve() public view returns (uint256){
        return favoriteNumber;
    }

    function addPerson(string memory _name, uint256 _favoriteNumber) public {
        people.push(People(_favoriteNumber, _name));
        nameToFavoriteNumber[_name] = _favoriteNumber;
>>>>>>> f1cf5d2595c622e4c11f98f8587d147cc2008402
    }
}