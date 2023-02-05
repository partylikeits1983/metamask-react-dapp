// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract DAI is ERC20 {
    uint constant _initial_supply = 10**50 * (10**18);

    uint public value;

    constructor() ERC20("DAI", "DAI") {
        _mint(msg.sender, _initial_supply);
    }

    function mint(uint256 amount) external {
        require(amount < 10_000*1e18, "amount minted must me less than 10_000*1e18");
        _mint(msg.sender, amount);
    }
    
}
