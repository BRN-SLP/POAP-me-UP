#!/bin/bash

# Basescan V2 API Verification
API_KEY="MVCUIKT5HKRY6U86ZBYUVBJT6NQ6N3CIPW"
CONTRACT_ADDRESS="0xF1D496761e48056970e1B808DA392593Bc913Dcd"

# Read flattened source
FLATTENED_SOURCE=$(cat << 'EOFCODE'
// SPDX-License-Identifier: MIT
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
}
EOFCODE
)

# Constructor args
CONSTRUCTOR_ARGS="00000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000080000000000000000000000000000000000000000000000000000000000000000a504f4150204d652055700000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004504f41500000000000000000000000000000000000000000000000000000000"

echo "Submitting verification request to Basescan V2 API..."

# V2 API endpoint
curl -X POST "https://api.basescan.org/v2/api" \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "chainid=8453" \
  -d "module=contract" \
  -d "action=verifysourcecode" \
  -d "contractaddress=$CONTRACT_ADDRESS" \
  -d "sourceCode=$FLATTENED_SOURCE" \
  -d "codeformat=solidity-single-file" \
  -d "contractname=POAPMeUp" \
  -d "compilerversion=v0.8.22+commit.4fc1097e" \
  -d "optimizationUsed=1" \
  -d "runs=200" \
  -d "constructorArguements=$CONSTRUCTOR_ARGS" \
  -d "licenseType=3" \
  -d "apikey=$API_KEY"

echo ""
echo "Request submitted! Check status at:"
echo "https://basescan.org/address/$CONTRACT_ADDRESS#code"
