// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract CheckWinner {
    uint public counterWinner;

    constructor() {
        counterWinner = 0;
    }

    function triggerWinner(address winner) public {
        (bool s, ) = winner.call(abi.encodeWithSignature("attempt()"));
        require(s);

        counterWinner++;
    }
}
