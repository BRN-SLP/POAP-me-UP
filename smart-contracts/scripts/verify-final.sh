#!/bin/bash

API_KEY="MVCUIKT5HKRY6U86ZBYUVBJT6NQ6N3CIPW"
CONTRACT_ADDRESS="0xF1D496761e48056970e1B808DA392593Bc913Dcd"

# Create temp file with source code
cat > /tmp/source.sol << 'EOF'
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
EOF

SOURCE_CODE=$(cat /tmp/source.sol | jq -sRr @uri)
CONSTRUCTOR_ARGS="00000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000080000000000000000000000000000000000000000000000000000000000000000a504f4150204d652055700000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004504f41500000000000000000000000000000000000000000000000000000000"

curl -v -X POST "https://api.etherscan.io/v2/api" \
  -H "Content-Type: application/x-www-form-urlencoded" \
  --data-urlencode "chainid=8453" \
  --data-urlencode "module=contract" \
  --data-urlencode "action=verifysourcecode" \
  --data-urlencode "contractaddress=$CONTRACT_ADDRESS" \
  --data-urlencode "sourceCode@/tmp/source.sol" \
  --data-urlencode "codeformat=solidity-single-file" \
  --data-urlencode "contractname=POAPMeUp" \
  --data-urlencode "compilerversion=v0.8.22+commit.4fc1097e" \
  --data-urlencode "optimizationUsed=1" \
  --data-urlencode "runs=200" \
  --data-urlencode "constructorArguements=$CONSTRUCTOR_ARGS" \
  --data-urlencode "licenseType=3" \
  --data-urlencode "apikey=$API_KEY"

echo ""
echo "Check status at: https://basescan.org/address/$CONTRACT_ADDRESS#code"
