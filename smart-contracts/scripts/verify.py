#!/usr/bin/env python3
import requests

API_KEY = "MVCUIKT5HKRY6U86ZBYUVBJT6NQ6N3CIPW"
CONTRACT_ADDRESS = "0xF1D496761e48056970e1B808DA392593Bc913Dcd"

SOURCE_CODE = '''// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract POAPMeUp is ERC721URIStorage, Ownable {
    uint256 public nextTokenId;

    constructor(
        string memory _name,
        string memory _symbol
    ) ERC721(_name, _symbol) Ownable(msg.sender) {
        nextTokenId = 1;
    }

    function mint(address _to, string memory _uri) external returns (uint256) {
        uint256 tokenId = nextTokenId;
        _mint(_to, tokenId);
        _setTokenURI(tokenId, _uri);
        nextTokenId++;
        return tokenId;
    }
}'''

CONSTRUCTOR_ARGS = "00000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000080000000000000000000000000000000000000000000000000000000000000000a504f4150204d652055700000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004504f41500000000000000000000000000000000000000000000000000000000"

data = {
    "chainid": "8453",
    "module": "contract",
    "action": "verifysourcecode",
    "contractaddress": CONTRACT_ADDRESS,
    "sourceCode": SOURCE_CODE,
    "codeformat": "solidity-single-file",
    "contractname": "POAPMeUp",
    "compilerversion": "v0.8.22+commit.4fc1097e",
    "optimizationUsed": "1",
    "runs": "200",
    "constructorArguements": CONSTRUCTOR_ARGS,
    "licenseType": "3",
    "apikey": API_KEY
}

print("Sending verification request...")
response = requests.post("https://api.etherscan.io/v2/api", data=data)
print(f"Status Code: {response.status_code}")
print(f"Response: {response.text}")
print(f"\nCheck contract at: https://basescan.org/address/{CONTRACT_ADDRESS}#code")
