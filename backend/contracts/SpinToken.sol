// SPDX-License-Identifier: Unlicensed

pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";



contract SpinCoin is ERC20, ERC20Burnable, Pausable, Ownable {
    constructor() ERC20("SpinCoin", "SPC") {
        _mint(msg.sender, 1000000000000000 * 10**decimals());
    }

    function pause() public onlyOwner {
        _pause();
    }

    function unpause() public onlyOwner {
        _unpause();
    }

    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 amount
    ) internal override whenNotPaused {
        super._beforeTokenTransfer(from, to, amount);
    }

	function transferTokenFrom(address from, address to, uint256 amount) public onlyOwner {
		super.transferFrom(from, to, amount);
	}
}
